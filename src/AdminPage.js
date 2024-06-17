import React from 'react';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <header className="navbar">
        <div className="logo">Admin Panel</div>
        <nav>
          <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#users">Users</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </nav>
      </header>

      <section className="welcome-section" id="dashboard">
        <h1>Welcome, Admin</h1>
        <p>Manage your e-learning platform efficiently.</p>
      </section>

      <section className="users-section" id="users">
        <h2>Manage Users</h2>
        <div className="card">
          <h3>View Users</h3>
          <p>Monitor and manage all registered users.</p>
        </div>
        <div className="card">
          <h3>Add User</h3>
          <p>Create new user accounts and assign roles.</p>
        </div>
        <div className="card">
          <h3>Remove User</h3>
          <p>Delete user accounts as needed.</p>
        </div>
      </section>

      <section className="courses-section" id="courses">
        <h2>Manage Courses</h2>
        <div className="card">
          <h3>View Courses</h3>
          <p>Review all available courses on the platform.</p>
        </div>
        <div className="card">
          <h3>Add Course</h3>
          <p>Create and publish new courses.</p>
        </div>
        <div className="card">
          <h3>Update Course</h3>
          <p>Edit existing course details and content.</p>
        </div>
      </section>

      <section className="settings-section" id="settings">
        <h2>Settings</h2>
        <p>Adjust platform settings and configurations.</p>
      </section>

      <footer>
        <p>&copy; 2024 E-Learn Admin Panel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminPage;
