const courseSubjects = {
  "B.Tech in Computer Science": ["DSA", "Operating Systems", "Web Dev", "AI"],
  BBA: ["Marketing", "Finance", "HRM", "Business Law"],
  "B.Sc in Biotechnology": [
    "Genetics",
    "Microbiology",
    "Biochemistry",
    "Bioinformatics",
  ],
  "BA in Psychology & Design Thinking": [
    "Cognitive Psych",
    "Design Thinking",
    "Behavioral Science",
    "Ethics",
  ],
  "Diploma in Mechanical Engineering": [
    "Thermodynamics",
    "CAD",
    "Fluid Mechanics",
    "Robotics",
  ],
  "B.Sc in Data Analytics": ["Statistics", "Python", "SQL", "Machine Learning"],
  "BA in Media & Communication": [
    "Journalism",
    "PR",
    "Digital Media",
    "Film Studies",
  ],
  "B.Com in Accounting & Finance": [
    "Accounting",
    "Taxation",
    "Auditing",
    "Economics",
  ],
  "Diploma in Culinary Arts": [
    "Food Science",
    "Baking",
    "Plating",
    "Kitchen Ops",
  ],
  "Certificate in UI/UX Design": [
    "Figma",
    "Wireframing",
    "User Testing",
    "Design Systems",
  ],
  "B.Sc in Genetics": [
    "Molecular Biology",
    "Genomics",
    "Evolution",
    "Lab Techniques",
  ],
  "BA in Political Science": [
    "Political Theory",
    "Public Policy",
    "International Relations",
    "Constitutional Law",
  ],
  "B.Arch": [
    "Design Studio",
    "Building Materials",
    "Urban Planning",
    "Structural Systems",
  ],
  "BA in Music Production": [
    "Composition",
    "Sound Engineering",
    "Mixing",
    "Music Theory",
  ],
  "Diploma in Yoga & Wellness": [
    "Asanas",
    "Meditation",
    "Nutrition",
    "Holistic Health",
  ],
  "B.Sc in Nursing": [
    "Anatomy",
    "Clinical Practice",
    "Pharmacology",
    "Patient Care",
  ],
  "B.Tech in Aerospace Engineering": [
    "Flight Mechanics",
    "Propulsion",
    "Avionics",
    "Aerodynamics",
  ],
  "BA in Fine Arts": [
    "Painting",
    "Sculpture",
    "Art History",
    "Visual Storytelling",
  ],
  "MA in English Literature": ["Poetry", "Prose", "Criticism", "Drama"],
  "M.Sc in Environmental Science": [
    "Ecology",
    "Climate Studies",
    "Sustainability",
    "Field Work",
  ],
};

const sectionTimings = {
  A: ["9:00–10:00", "10:15–11:15", "11:30–12:30", "1:30–2:30"],
  B: ["10:00–11:00", "11:15–12:15", "12:30–1:30", "2:30–3:30"],
  C: ["8:30–9:30", "9:45–10:45", "11:00–12:00", "12:15–1:15"],
};

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>📅 Get Your Timetable</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>

    <div class="card p-4 shadow-sm mb-4">
      <div class="mb-3">
        <label for="course" class="form-label">Select Course</label>
        <select id="course" class="form-select">
          <option value="" disabled selected>Choose your course</option>
          ${Object.keys(courseSubjects)
            .map((course) => `<option>${course}</option>`)
            .join("")}
        </select>
      </div>

      <div class="mb-3">
        <label for="classYear" class="form-label">Enter Class (e.g. 1st Year)</label>
        <input type="text" id="classYear" class="form-control" placeholder="e.g. 2nd Year" />
      </div>

      <div class="mb-3">
        <label for="section" class="form-label">Select Section</label>
        <select id="section" class="form-select">
          <option value="" disabled selected>Choose section</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>

      <button class="btn btn-success w-100" onclick="generateTimetable()">Show Timetable</button>
    </div>

    <div id="timetable-output"></div>
  </div>
`);

function generateTimetable() {
  const course = document.getElementById("course").value;
  const classYear = document.getElementById("classYear").value.trim();
  const section = document.getElementById("section").value;

  if (!course || !classYear || !section) {
    alert("Please fill all fields to view your timetable.");
    return;
  }

  const subjects = courseSubjects[course];
  const timings = sectionTimings[section];

  const table = `
    <h4 class="mb-3">🗓️ Timetable for ${course} - ${classYear}, Section ${section}</h4>
    <table class="table table-bordered">
      <thead><tr><th>Time</th><th>Subject</th></tr></thead>
      <tbody>
        ${subjects
          .map(
            (subject, i) => `
          <tr>
            <td>${timings[i]}</td>
            <td>${subject}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;

  document.getElementById("timetable-output").innerHTML = table;
}

function goBack() {
  window.location.reload();
}

function logout() {
  localStorage.clear();
  window.location.href = "collagedashboard.html";
}
