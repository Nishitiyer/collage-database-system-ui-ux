console.log("notices.js loaded");

const userRole = localStorage.getItem("userRole") || "student";
const userName = localStorage.getItem("userName") || "User";

const notices = {
  general: [
    "📢 College Fest starts on Oct 5th — registrations open now!",
    "🛠 Server maintenance scheduled for Oct 2nd, 10 PM to 12 AM.",
    "🎓 Mid-semester exams begin from Oct 10th. Check your timetable.",
  ],
  student: [
    "📚 Library hours extended till 8 PM for exam season.",
    "📝 Assignment submission deadline for Web Dev: Oct 3rd.",
    "💡 Hackathon registrations close on Oct 1st.",
  ],
  faculty: [
    "📊 Submit internal marks by Oct 7th via faculty portal.",
    "🗓 Faculty meeting scheduled for Oct 4th, 3 PM in Seminar Hall.",
    "📌 New research grant applications open till Oct 15th.",
  ],
  staff: [
    "🧾 Salary slips for September available in HR portal.",
    "🏫 Campus cleanup drive on Oct 6th — volunteers needed.",
    "🔐 Security audit scheduled for Oct 8th.",
  ],
};

const roleNotices = notices[userRole] || [];
const allNotices = [...notices.general, ...roleNotices];

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>📋 Notices for ${userName}</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>

    <div class="row">
      ${allNotices
        .map(
          (note, i) => `
        <div class="col-md-6 mb-3">
          <div class="card shadow-sm">
            <div class="card-body">
              <h6 class="card-title">Notice ${i + 1}</h6>
              <p class="card-text">${note}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  </div>
`);

function goBack() {
  window.location.reload(); // or loadModule('faculty.js') if you want to return to dashboard
}

function logout() {
  localStorage.clear();
  window.location.href = "collegedashboard.html";
}
