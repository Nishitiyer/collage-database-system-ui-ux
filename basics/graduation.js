console.log("graduation.js loaded");

const userRole = localStorage.getItem("userRole");
const userName = localStorage.getItem("userName");
const userRollNo = localStorage.getItem("userRollNo");

const graduationData = {
  ceremonyDate: "December 15, 2025",
  venue: "Nexus Point Auditorium",
  eligibilityCriteria: {
    student:
      "Must have completed all semesters with passing grades and cleared dues.",
    faculty: "Assigned to supervise or coordinate graduation activities.",
    staff: "Assigned to logistics or support roles during the ceremony.",
  },
  studentStatus: {
    "2023CS101": { eligible: true, remarks: "Cleared all requirements." },
    "2023CS102": {
      eligible: false,
      remarks: "Pending final semester results.",
    },
    "2023CS103": { eligible: true, remarks: "Approved by academic office." },
    // Add more roll numbers as needed
  },
};

const eligibility =
  graduationData.eligibilityCriteria[userRole] ||
  "No eligibility info available.";
const status = graduationData.studentStatus[userRollNo];

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>🎓 Graduation Info</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>

    <div class="card p-4 shadow-sm mb-4">
      <h5 class="mb-3">Ceremony Details</h5>
      <p><strong>Date:</strong> ${graduationData.ceremonyDate}</p>
      <p><strong>Venue:</strong> ${graduationData.venue}</p>
    </div>

    <div class="card p-4 shadow-sm mb-4">
      <h5 class="mb-3">Eligibility Criteria for ${userRole}</h5>
      <p>${eligibility}</p>
    </div>

    ${
      userRole === "student" && status
        ? `
      <div class="card p-4 shadow-sm mb-4">
        <h5 class="mb-3">Your Graduation Status</h5>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Roll No:</strong> ${userRollNo}</p>
        <p><strong>Eligible:</strong> ${
          status.eligible ? "✅ Yes" : "❌ No"
        }</p>
        <p><strong>Remarks:</strong> ${status.remarks}</p>
      </div>
    `
        : ""
    }
  </div>
`);

function goBack() {
  window.location.reload();
}

function logout() {
  localStorage.clear();
  window.location.href = "collegedashboard.html";
}
