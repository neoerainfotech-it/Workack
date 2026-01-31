import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // This state will hold our data once the backend is ready
  const [users, setUsers] = useState([]);

  return (
    <div className="container">
      <header className="navbar">
        <h1>Workack <span className="logo-dot">.</span></h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Employees</li>
            <li>Settings</li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <section className="hero">
          <h2>Welcome, Vasantharaj</h2>
          <p>Neoera Infotech HRMS Management System</p>
        </section>

        <section className="data-section">
          <h3>Team Members</h3>
          <div className="user-list">
            {users.length > 0 ? (
              users.map(user => (
                <div key={user.id} className="user-card">
                  <h4>{user.name}</h4>
                  <p>{user.role}</p>
                </div>
              ))
            ) : (
              <p className="empty-msg">Frontend ready. Waiting for Backend connection...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App