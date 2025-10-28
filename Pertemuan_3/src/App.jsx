import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { BookProvider } from "./context/BookContext.jsx";
import Home from "./pages/Home.jsx";
import Stats from "./pages/Stats.jsx";

function App() {
  return (
    <BookProvider>
      <div className="app-container">
        <nav className="navbar">
          <h1>Manajemen Buku Pribadi</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/stats">Statistik</Link>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
      </div>
    </BookProvider>
  );
}

export default App;
