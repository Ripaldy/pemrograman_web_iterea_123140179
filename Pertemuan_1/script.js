// Global array untuk menyimpan semua tugas
let arrayTasks = [];

// Fungsi untuk menyimpan data ke localStorage (Arrow Function)
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(arrayTasks));
  updatePendingCount();
};

// Fungsi untuk memuat data dari localStorage (Arrow Function)
const loadTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    arrayTasks = JSON.parse(storedTasks);
  }
  renderTasks();
};

// Fungsi untuk menampilkan tugas ke UI berdasarkan filter (Arrow Function)
const renderTasks = () => {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  const filterStatus = document.getElementById("filter-status").value;
  const filterCourse = document
    .getElementById("filter-course")
    .value.toLowerCase();

  // Menggunakan filter() untuk menyaring data
  const filteredTasks = arrayTasks.filter((task) => {
    const isCompleted = task.isCompleted;

    // Filter berdasarkan Status
    const statusMatch =
      filterStatus === "all" ||
      (filterStatus === "pending" && !isCompleted) ||
      (filterStatus === "completed" && isCompleted);

    // Filter berdasarkan Mata Kuliah
    const courseMatch = task.course.toLowerCase().includes(filterCourse);

    return statusMatch && courseMatch;
  });

  // Menggunakan forEach() untuk membuat elemen DOM
  filteredTasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");
    if (task.isCompleted) {
      listItem.classList.add("completed");
    }

    // Cari index asli di arrayTasks (penting untuk operasi Hapus/Selesai)
    const originalIndex = arrayTasks.findIndex((t) => t.id === task.id);

    // Menggunakan Template Literal (``) untuk HTML yang lebih rapi
    listItem.innerHTML = `
            <div class="task-details">
                <h4>${task.name}</h4>
                <p>Matkul: ${task.course} | Deadline: ${task.deadline}</p>
                <p>Status: <strong>${
                  task.isCompleted ? "Selesai" : "Belum Selesai"
                }</strong></p>
            </div>
            <div class="task-actions">
                <button class="complete-btn" data-index="${originalIndex}">
                    <i class="fas fa-check"></i> ${
                      task.isCompleted ? "Batal" : "Selesai"
                    }
                </button>
                <button class="delete-btn" data-index="${originalIndex}">
                    <i class="fas fa-trash"></i> Hapus
                </button>
            </div>
        `;

    taskList.appendChild(listItem);
  });

  updatePendingCount();
};

// Fungsi Validasi (Arrow Function)
const validateForm = (taskName, courseName, deadline) => {
  if (!taskName.trim() || !courseName.trim() || !deadline.trim()) {
    alert("Validasi Gagal: Semua kolom harus diisi!");
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const deadlineDate = new Date(deadline);

  // Memberi toleransi 1 hari (hari H masih boleh diinput)
  if (
    deadlineDate < today &&
    deadlineDate.toDateString() !== today.toDateString()
  ) {
    alert("Validasi Gagal: Deadline tidak boleh sudah terlewati!");
    return false;
  }

  return true;
};

// Handler untuk form submission (Arrow Function)
document.getElementById("task-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const taskNameInput = document.getElementById("taskName");
  const courseNameInput = document.getElementById("courseName");
  const deadlineInput = document.getElementById("deadline");

  const taskName = taskNameInput.value;
  const courseName = courseNameInput.value;
  const deadline = deadlineInput.value;

  if (!validateForm(taskName, courseName, deadline)) {
    return;
  }

  const newTask = {
    id: Date.now(),
    name: taskName,
    course: courseName,
    deadline: deadline,
    isCompleted: false,
  };

  arrayTasks.push(newTask);
  saveTasks();

  // Reset form
  taskNameInput.value = "";
  courseNameInput.value = "";
  deadlineInput.value = "";
  renderTasks();
});

// Handler untuk Aksi (Delegation Event)
document.getElementById("task-list").addEventListener("click", (e) => {
  const target = e.target.closest("button");
  if (!target) return; // Klik bukan pada tombol

  const index = target.dataset.index;

  if (target.classList.contains("complete-btn")) {
    // Toggle status selesai
    arrayTasks[index].isCompleted = !arrayTasks[index].isCompleted;
    saveTasks();
    renderTasks();
  }

  if (target.classList.contains("delete-btn")) {
    if (confirm(`Yakin ingin menghapus tugas: "${arrayTasks[index].name}"?`)) {
      // Hapus 1 elemen dari array
      arrayTasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }
  }
});

// Handler untuk Filter dan Pencarian
document
  .getElementById("filter-status")
  .addEventListener("change", renderTasks);
document.getElementById("filter-course").addEventListener("input", renderTasks);

// Fungsi untuk menampilkan jumlah tugas yang belum selesai (Arrow Function)
const updatePendingCount = () => {
  const pendingCount = arrayTasks.filter((task) => !task.isCompleted).length;
  document.getElementById("pending-count").textContent = pendingCount;
};

// Memuat data saat halaman pertama kali dibuka
window.onload = loadTasks;
