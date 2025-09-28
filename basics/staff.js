const name = localStorage.getItem("userName") || "Staff";

renderModule(`
  <div class="container py-4">
    <button class="btn btn-danger float-end" onclick="logout()">Logout</button>
    <h2>🏢 Welcome, ${name}</h2>
    <p><strong>Department:</strong> Administration Office</p>

    <div class="row mt-4 g-4">
      ${renderCard(
        "💳 Payment Records",
        "View and manage student fee status",
        "payment.js"
      )}
      ${renderCard(
        "🔬 Lab Records",
        "Track lab usage and equipment logs",
        "labrecords.js"
      )}
      ${renderCard(
        "📊 View Results / Academics",
        "Access student performance reports",
        "viewresults.js"
      )}
      ${renderCard(
        "🗂️ Manage Student Data",
        "Edit student profiles and documents",
        "studentdata.js"
      )}
      ${renderCard(
        "🗓️ Scheduling & Timetable",
        "Set class and exam schedules",
        "scheduling.js"
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
