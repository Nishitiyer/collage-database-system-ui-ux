console.log("reviewassignments.js loaded");

// Simulated assignment data (normally fetched from backend or localStorage)
const submittedAssignments = [
  {
    course: "B.Tech in Computer Science",
    topic: "AI Ethics in Healthcare",
    submissionDate: "2025-09-25",
    deadline: "2025-09-30",
    files: ["AI_Ethics_Report.pdf", "Presentation.pptx"],
    markingScheme: "40% Research, 30% Presentation, 30% Originality",
    weightage: 20,
  },
  {
    course: "BBA",
    topic: "Marketing Strategy for Startups",
    submissionDate: "2025-09-24",
    deadline: "2025-09-29",
    files: ["Startup_Marketing.docx"],
    markingScheme: "50% Strategy, 30% Creativity, 20% Execution",
    weightage: 25,
  },
];

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>📝 Review Assignments</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>

    ${submittedAssignments.map((a, i) => renderAssignmentCard(a, i)).join("")}
  </div>
`);

function renderAssignmentCard(a, index) {
  return `
    <div class="card p-4 shadow-sm mb-4">
      <h5>${a.course}</h5>
      <p><strong>Topic:</strong> ${a.topic}</p>
      <p><strong>Submission Date:</strong> ${a.submissionDate}</p>
      <p><strong>Deadline:</strong> ${a.deadline}</p>
      <p><strong>Files:</strong> ${a.files.join(", ")}</p>
      <p><strong>Marking Scheme:</strong> ${a.markingScheme}</p>
      <p><strong>Weightage:</strong> ${a.weightage}%</p>

      <div class="mb-3">
        <label for="grade-${index}" class="form-label">Grade</label>
        <select id="grade-${index}" class="form-select">
          <option value="" disabled selected>Select grade</option>
          <option>A+</option>
          <option>A</option>
          <option>B+</option>
          <option>B</option>
          <option>C</option>
          <option>F</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="feedback-${index}" class="form-label">Feedback</label>
        <textarea id="feedback-${index}" class="form-control" rows="2" placeholder="Write your comments..."></textarea>
      </div>

      <button class="btn btn-success w-100" onclick="submitReview(${index})">Submit Review</button>
    </div>
  `;
}

function submitReview(index) {
  const grade = document.getElementById(`grade-${index}`).value;
  const feedback = document.getElementById(`feedback-${index}`).value.trim();

  if (!grade || !feedback) {
    alert("Please select a grade and write feedback.");
    return;
  }

  alert(
    `✅ Review submitted for assignment ${
      index + 1
    }\nGrade: ${grade}\nFeedback: ${feedback}`
  );
}

function goBack() {
  window.location.reload();
}

function logout() {
  localStorage.clear();
  window.location.href = "collagedashboard.html";
}
