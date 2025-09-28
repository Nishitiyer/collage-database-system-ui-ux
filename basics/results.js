console.log("results.js loaded");

renderModule(`
  <div class="container py-4">
    <h2>📊 View Your Result</h2>

    <div class="mb-3">
      <label for="course" class="form-label">Select Course</label>
      <select id="course" class="form-select">
        <option value="" disabled selected>Select your course</option>
        <option>B.Tech in Computer Science</option>
        <option>BBA</option>
        <option>B.Sc in Biotechnology</option>
        <option>BA in Psychology & Design Thinking</option>
        <option>Diploma in Mechanical Engineering</option>
        <option>B.Sc in Data Analytics</option>
        <option>BA in Media & Communication</option>
        <option>B.Com in Accounting & Finance</option>
        <option>Diploma in Culinary Arts</option>
        <option>Certificate in UI/UX Design</option>
        <option>B.Sc in Genetics</option>
        <option>BA in Political Science</option>
        <option>B.Arch</option>
        <option>BA in Music Production</option>
        <option>Diploma in Yoga & Wellness</option>
        <option>B.Sc in Nursing</option>
        <option>B.Tech in Aerospace Engineering</option>
        <option>BA in Fine Arts</option>
        <option>MA in English Literature</option>
        <option>M.Sc in Environmental Science</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="year" class="form-label">Enter Year</label>
      <input type="text" id="year" class="form-control" placeholder="e.g. 2nd Year" />
    </div>

    <div class="mb-3">
      <label for="rollno" class="form-label">Enter Roll Number</label>
      <input type="text" id="rollno" class="form-control" placeholder="e.g. 23CS045" />
    </div>

    <button class="btn btn-warning w-100" onclick="generateResult()">Get Result</button>

    <div id="result-output" class="mt-4"></div>

    <div class="mt-4 d-flex justify-content-between">
      <button class="btn btn-secondary" onclick="goBack()">← Go Back</button>
      <button class="btn btn-danger" onclick="logout()">Logout</button>
    </div>
  </div>
`);

function generateResult() {
  const course = document.getElementById("course").value;
  const year = document.getElementById("year").value.trim();
  const rollno = document.getElementById("rollno").value.trim();

  if (!course || !year || !rollno) {
    alert("Please fill all fields.");
    return;
  }

  const subjects = ["Subject 1", "Subject 2", "Subject 3", "Subject 4"];
  const grades = ["A", "B+", "A-", "B"];

  const table = `
    <h4 class="mb-3">📋 Result for ${course} - ${year}, Roll No: ${rollno}</h4>
    <table class="table table-bordered">
      <thead><tr><th>Subject</th><th>Grade</th></tr></thead>
      <tbody>
        ${subjects
          .map(
            (subj, i) => `
          <tr><td>${subj}</td><td>${grades[i % grades.length]}</td></tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;

  document.getElementById("result-output").innerHTML = table;
}

function goBack() {
  window.location.reload();
}

function logout() {
  localStorage.clear();
  window.location.href = "collagedashboard.html";
}
