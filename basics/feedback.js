console.log("feedback.js loaded");

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>📣 Student Feedback Form</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>

    <div class="card p-4 shadow-sm mb-4">
      <div class="mb-3">
        <label for="faculty" class="form-label">Faculty Name</label>
        <input type="text" id="faculty" class="form-control" placeholder="e.g. Dr. Meera Iyer" />
      </div>

      <div class="mb-3">
        <label for="collegeRating" class="form-label">College Facilities Rating</label>
        <select id="collegeRating" class="form-select">
          <option value="" disabled selected>Rate from 1 to 5</option>
          ${[1, 2, 3, 4, 5].map((r) => `<option>${r}</option>`).join("")}
        </select>
      </div>

      <div class="mb-3">
        <label for="facultyRating" class="form-label">Faculty Performance Rating</label>
        <select id="facultyRating" class="form-select">
          <option value="" disabled selected>Rate from 1 to 5</option>
          ${[1, 2, 3, 4, 5].map((r) => `<option>${r}</option>`).join("")}
        </select>
      </div>

      <div class="mb-3">
        <label for="comments" class="form-label">Additional Comments</label>
        <textarea id="comments" class="form-control" rows="3" placeholder="Share your thoughts..."></textarea>
      </div>

      <button class="btn btn-success w-100" onclick="submitFeedback()">Submit Feedback</button>
    </div>

    <div id="feedback-output" class="mt-4"></div>
  </div>
`);

function submitFeedback() {
  const faculty = document.getElementById("faculty").value.trim();
  const collegeRating = document.getElementById("collegeRating").value;
  const facultyRating = document.getElementById("facultyRating").value;
  const comments = document.getElementById("comments").value.trim();

  if (!faculty || !collegeRating || !facultyRating || !comments) {
    alert("Please fill all fields before submitting.");
    return;
  }

  const feedback = {
    faculty,
    collegeRating,
    facultyRating,
    comments,
    timestamp: new Date().toLocaleString(),
  };

  localStorage.setItem("studentFeedback", JSON.stringify(feedback));
  displayFeedback();
}

function displayFeedback() {
  const feedback = JSON.parse(localStorage.getItem("studentFeedback"));
  if (!feedback) return;

  document.getElementById("feedback-output").innerHTML = `
    <div class="card p-4 shadow-sm">
      <h5>✅ Feedback Submitted</h5>
      <p><strong>Faculty:</strong> ${feedback.faculty}</p>
      <p><strong>College Rating:</strong> ${feedback.collegeRating}/5</p>
      <p><strong>Faculty Rating:</strong> ${feedback.facultyRating}/5</p>
      <p><strong>Comments:</strong> ${feedback.comments}</p>
      <p><small><strong>Submitted on:</strong> ${feedback.timestamp}</small></p>
      <button class="btn btn-outline-danger mt-3" onclick="deleteFeedback()">Delete Feedback</button>
    </div>
  `;
}

function deleteFeedback() {
  localStorage.removeItem("studentFeedback");
  document.getElementById("feedback-output").innerHTML = "";
}

function goBack() {
  window.location.reload();
}

function logout() {
  localStorage.clear();
  window.location.href = "collagedashboard.html";
}

// Auto-display if feedback exists
displayFeedback();
