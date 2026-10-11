import React, { useState } from "react";

const initialStudents = [
  { id: 1, name: "Patel Drashti", course: "React Development" },
  { id: 2, name: "Patel Maharshi", course: "Web Development" },
  { id: 3, name: "Soni Riyon", course: "JavaScript" },
  { id: 4, name: "Chaudhary Bhumi", course: "React Development" },
  { id: 5, name: "Trivedi Trisha", course: "Web Development" },
  { id: 6, name: "Patel Tisha", course: "JavaScript" },
  { id: 7, name: "Padeliya Dhavni", course: "React Development" },
  { id: 8, name: "Patel Mahik", course: "Web Development" },
  { id: 9, name: "Patel Mansi", course: "JavaScript" },
  { id: 10, name: "Rathod Bhavy", course: "React Development" },
];

function StudentManagement() {
  const [students, setStudents] = useState(initialStudents);
  const [message, setMessage] = useState("");

  function handleDelete(id) {
    const deletedStudent = students.find(
      (student) => student.id === id
    );

    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== id)
    );

    setMessage(`${deletedStudent.name} deleted successfully!`);
  }

  return (
    <div className="student-container">
      <header className="page-header">
        <div className="header-icon">🎓</div>
        <h1>Student Management</h1>
        <p>Manage your student records easily</p>
        <span className="practical-badge">Practical 19 | Delete Operation</span>
      </header>

      <div className="summary-card">
        <div className="summary-icon">👨‍🎓</div>
        <div>
          <p>Total Students</p>
          <h2>{students.length}</h2>
        </div>
      </div>

      {message && (
        <div className="success-message" role="status">
          ✅ {message}
          <button
            className="close-message"
            onClick={() => setMessage("")}
            aria-label="Dismiss message"
          >
            ×
          </button>
        </div>
      )}

      {students.length === 0 ? (
        <div className="empty-message">
          <div className="empty-icon">📚</div>
          <h2>No Students Found</h2>
          <p>All student records have been deleted.</p>
        </div>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <div className="student-card" key={student.id}>
              <div className="student-top">
                <div className="student-avatar">
                  {student.name.charAt(0)}
                </div>
                <span className="student-number">
                  ID: {String(student.id).padStart(3, "0")}
                </span>
              </div>

              <h2>{student.name}</h2>

              <div className="course-info">
                <span>📘</span>
                <div>
                  <small>Enrolled Course</small>
                  <p>{student.course}</p>
                </div>
              </div>

              <button
                className="delete-btn"
                onClick={() => handleDelete(student.id)}
              >
                🗑️ Delete Student
              </button>
            </div>
          ))}
        </div>
      )}

      <footer>
        Student Management System | React JS
      </footer>
    </div>
  );
}

export default StudentManagement;