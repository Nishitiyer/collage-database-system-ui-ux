console.log("assignments.js loaded");

const courses = [
  "B.Tech in Computer Science",
  "BBA",
  "B.Sc in Biotechnology",
  "BA in Psychology & Design Thinking",
  "Diploma in Mechanical Engineering",
  "B.Sc in Data Analytics",
  "BA in Media & Communication",
  "B.Com in Accounting & Finance",
  "Diploma in Culinary Arts",
  "Certificate in UI/UX Design",
  "B.Sc in Genetics",
  "BA in Political Science",
  "B.Arch",
  "BA in Music Production",
  "Diploma in Yoga & Wellness",
  "B.Sc in Nursing",
  "B.Tech in Aerospace Engineering",
  "BA in Fine Arts",
  "MA in English Literature",
  "M.Sc in Environmental Science",
];

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>📎 Assignment Submission</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>

    <div class="card p-4 shadow-sm mb-4">
      <div class="mb-3">
        <label for="course" class="form-label">Select Course</label>
        <select id="course" class="form-select">
          <option value="" disabled selected>Select your course</option>
          ${courses.map((c) => `<option>${c}</option>`).join("")}
        </select>
      </div>

      <div class="mb-3">
        <label for="topic" class="form-label">Assignment Topic</label>
        <input type="text" id="topic" class="form-control" placeholder="e.g. AI Ethics in Healthcare" />
      </div>

      <div class="mb-3">
        <label for="submissionDate" class="form-label">Submission Date</label>
        <input type="date" id="submissionDate" class="form-control" />
      </div>

      <div class="mb-3">
        <label for="deadline" class="form-label">Deadline</label>
        <input type="date" id="deadline" class="form-control" />
      </div>

      <div class="mb-3">
        <label for="fileUpload" class="form-label">Attach Assignment</label>
        <input type="file" id="fileUpload" class="form-control" multiple />
      </div>

      <div class="mb-3">
        <label for="markingScheme" class="form-label">Marking Scheme</label>
        <textarea id="markingScheme" class="form-control" rows="3" placeholder="e.g. 40% Research, 30% Presentation, 30% Originality"></textarea>
      </div>

      <div class="mb-3">
        <label for="weightage" class="form-label">Weightage (%)</label>
        <input type="number" id="weightage" class="form-control" placeholder="e.g. 20" min="0" max="100" />
      </div>

      <button class="btn btn-success w-100" onclick="submitAssignment()">Submit Assignment</button>
    </div>

    <div id="assignment-output" class="mt-4"></div>
  </div>
`);

function submitAssignment() {
  const course = document.getElementById("course").value;
  const topic = document.getElementById("topic").value.trim();
  const submissionDate = document.getElementById("submissionDate").value;
  const deadline = document.getElementById("deadline").value;
  const files = document.getElementById("fileUpload").files;
  const markingScheme = document.getElementById("markingScheme").value.trim();
  const weightage = document.getElementById("weightage").value;

  if (
    !course ||
    !topic ||
    !submissionDate ||
    !deadline ||
    files.length === 0 ||
    !markingScheme ||
    !weightage
  ) {
    alert("Please fill all fields and attach your assignment.");
    return;
  }

  const fileNames = Array.from(files)
    .map((f) => f.name)
    .join(", ");

  document.getElementById("assignment-output").innerHTML = `
    <div class="alert alert-success">
      ✅ Assignment submitted successfully for <strong>${course}</strong><br/>
      <strong>Topic:</strong> ${topic}<br/>
      <strong>Submission Date:</strong> ${submissionDate}<br/>
      <strong>Deadline:</strong> ${deadline}<br/>
      <strong>Files:</strong> ${fileNames}<br/>
      <strong>Marking Scheme:</strong> ${markingScheme}<br/>
      <strong>Weightage:</strong> ${weightage}%
    </div>
  `;
}

function goBack() {
  window.location.reload();
}

function logout() {
  localStorage.clear();
  window.location.href = "collagedashboard.html";
}
