const name = localStorage.getItem("userName") || "Student";
const rollno = localStorage.getItem("userRollNo") || "N/A";

renderModule(`
  <div class="container py-4">
    <button class="btn btn-danger float-end" onclick="logout()">Logout</button>
    <h2>👨‍🎓 Welcome, ${name}</h2>
    <p>Roll No: ${rollno}</p>

    <div class="row mt-4 g-4">
      ${renderCard(
        "📚 Courses",
        "View your enrolled subjects and syllabus",
        "course.js"
      )}
      ${renderCard(
        "🗓️ Attendance",
        "Track your attendance records",
        "attendance.js"
      )}
      ${renderCard("💬 Feedback", "Submit feedback for faculty", "feedback.js")}
      ${renderCard(
        "📅 Timetable",
        "View your weekly class schedule",
        "timetable.js"
      )}
      ${renderCard(
        "📊 Results",
        "Check your academic performance",
        "results.js"
      )}
      ${renderCard(
        "📎 Assignments",
        "View and submit your coursework",
        "assignments.js"
      )}
      ${renderCard(
        "📢 Notices",
        "Read college-wide announcements",
        "notices.js"
      )}
      ${renderCard(
        "🧑‍🏫 Faculty Directory",
        "Find contact info and office hours",
        "facultylist.js"
      )}
      ${renderCard(
        "🧠 Study Resources",
        "Access notes, past papers, and guides",
        "resources.js"
      )}
      ${renderCard(
        "🎓 Graduation Tracker",
        "Monitor your credits and eligibility",
        "graduation.js"
      )}
    </div>
  </div>
`);

function renderCard(icon, desc, file) {
  return `
    <div class="col-md-4">
      <div class="card p-4 text-center shadow-sm">
        <h5>${icon}</h5>
        <p>${desc}</p>
        <button class="btn btn-outline-primary mt-2" onclick="loadModule('${file}')">Open</button>
      </div>
    </div>
  `;
}

function logout() {
  localStorage.clear();
  window.location.href = "collagedashboard.html";
}
