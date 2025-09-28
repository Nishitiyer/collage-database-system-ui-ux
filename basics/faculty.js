const name = localStorage.getItem("userName") || "Faculty";

renderModule(`
  <div class="container py-4">
    <button class="btn btn-danger float-end" onclick="logout()">Logout</button>
    <h2>👩‍🏫 Welcome, ${name}</h2>
    <p><strong>Department:</strong> Computer Science & Engineering</p>

    <div class="row mt-4 g-4">
      ${renderCard(
        "📚 View Courses Allotted",
        "See your assigned subjects",
        "viewcourses.js"
      )}
      ${renderCard(
        "👥 Student List",
        "View students enrolled in your classes",
        "studentlist.js"
      )}
      ${renderCard(
        "🗓️ Edit Attendance",
        "Update attendance records",
        "editattendance.js"
      )}
      ${renderCard(
        "📊 Add Results",
        "Enter grades and performance",
        "addresults.js"
      )}
      ${renderCard(
        "📅 Manage Timetable",
        "View and modify class schedules",
        "managetimetable.js"
      )}
      ${renderCard(
        "📎 Review Assignments",
        "Grade and comment on submissions",
        "reviewassignments.js"
      )}
    </div>
  </div>
`);

function renderCard(icon, desc, file) {
  return `
    <div class="col-md-6">
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
