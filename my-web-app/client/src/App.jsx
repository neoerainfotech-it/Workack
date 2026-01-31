import React from 'react';
import './App.css';

function App() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="user-profile">
          <img src="https://via.placeholder.com/60" alt="Admin" className="avatar" />
          <h4>Vasantharaj B</h4>
          <p>Team Lead</p>
        </div>
        <nav className="menu-grid">
          <button className="menu-item">Dashboard</button>
          <button className="menu-item">Attendance</button>
          <button className="menu-item">Task Mgmt</button>
          <button className="menu-item">Pay Slip</button>
          <button className="menu-item">Chat</button>
          <button className="menu-item">Settings</button>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Dashboard Overview</h1>
        <p>Welcome to the Neoera Infotech Workack system.</p>
      </main>
    </div>
  );
}

export default App;