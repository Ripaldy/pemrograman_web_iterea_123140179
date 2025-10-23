// ====== KELAS untuk merepresentasikan Jadwal Kuliah ======
class Schedule {
  constructor(id, courseName, lecturer, day, time, room) {
    this.id = id;
    this.courseName = courseName;
    this.lecturer = lecturer;
    this.day = day;
    this.time = time;
    this.room = room;
  }
}

// ====== PENGELOLA UI (User Interface) ======
class UI {
  static displaySchedules() {
    Storage.getSchedulesAsync().then((schedules) => {
      // Tambahkan Sabtu & Minggu ke array hari
      const days = [
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
      ];
      days.forEach((day) => {
        const dayList = document.querySelector(`#list-${day}`);
        if (dayList) {
          dayList.innerHTML = "";
        }
      });

      schedules.forEach((schedule) => UI.addScheduleToBoard(schedule));
    });
  }

  static addScheduleToBoard(schedule) {
    const list = document.querySelector(`#list-${schedule.day}`);
    if (!list) return;

    const card = document.createElement("div");
    card.classList.add("schedule-card");
    card.innerHTML = `
            <h4>${schedule.courseName}</h4>
            <p>${schedule.lecturer}</p>
            <p><strong>Ruang:</strong> ${schedule.room}</p>
            <p><strong>Pukul:</strong> ${schedule.time}</p>
            <div class="schedule-actions">
                <button class="edit-btn" data-id="${schedule.id}">Edit</button>
                <button class="delete-btn" data-id="${schedule.id}">Hapus</button>
            </div>
        `;
    list.appendChild(card);
  }

  static clearFields() {
    document.querySelector("#schedule-id").value = "";
    document.querySelector("#course-name").value = "";
    document.querySelector("#lecturer").value = "";
    document.querySelector("#room").value = "";
    document.querySelector("#day").value = "Senin";
    document.querySelector("#time").value = "";
  }

  static fillForm(schedule) {
    document.querySelector("#form-title").textContent = "Edit Jadwal";
    document.querySelector("#schedule-id").value = schedule.id;
    document.querySelector("#course-name").value = schedule.courseName;
    document.querySelector("#lecturer").value = schedule.lecturer;
    document.querySelector("#room").value = schedule.room;
    document.querySelector("#day").value = schedule.day;
    document.querySelector("#time").value = schedule.time;
    document.querySelector("#submit-button").textContent = "Update";
    document.querySelector("#cancel-button").classList.remove("hidden");
  }

  static resetFormMode() {
    document.querySelector("#form-title").textContent = "Tambah Jadwal Baru";
    document.querySelector("#submit-button").textContent = "Tambah";
    document.querySelector("#cancel-button").classList.add("hidden");
    this.clearFields();
  }
}

// ====== PENGELOLA PENYIMPANAN (Local Storage) ======
class Storage {
  static getSchedules() {
    return JSON.parse(localStorage.getItem("schedules") || "[]");
  }

  static getSchedulesAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.getSchedules());
      }, 200);
    });
  }

  static saveSchedules(schedules) {
    localStorage.setItem("schedules", JSON.stringify(schedules));
  }
}

// ====== EVENT LISTENERS ======

document.addEventListener("DOMContentLoaded", UI.displaySchedules);

document.querySelector("#schedule-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.querySelector("#schedule-id").value;
  const courseName = document.querySelector("#course-name").value;
  const lecturer = document.querySelector("#lecturer").value;
  const room = document.querySelector("#room").value;
  const day = document.querySelector("#day").value;
  const time = document.querySelector("#time").value;

  const schedules = Storage.getSchedules();
  const scheduleData = { id, courseName, lecturer, day, time, room };

  if (id === "") {
    scheduleData.id = new Date().getTime().toString();
    const newSchedule = new Schedule(...Object.values(scheduleData));
    schedules.push(newSchedule);
  } else {
    const index = schedules.findIndex((s) => s.id === id);
    if (index > -1) {
      schedules[index] = new Schedule(...Object.values(scheduleData));
    }
  }

  Storage.saveSchedules(schedules);
  UI.displaySchedules();
  UI.resetFormMode();
});

document.querySelector("#schedule-board").addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  const id = button.dataset.id;
  if (button.classList.contains("delete-btn")) {
    let schedules = Storage.getSchedules().filter(
      (schedule) => schedule.id !== id
    );
    Storage.saveSchedules(schedules);
    UI.displaySchedules();
  }

  if (button.classList.contains("edit-btn")) {
    const scheduleToEdit = Storage.getSchedules().find(
      (schedule) => schedule.id === id
    );
    if (scheduleToEdit) {
      UI.fillForm(scheduleToEdit);
    }
  }
});

document.querySelector("#cancel-button").addEventListener("click", () => {
  UI.resetFormMode();
});

