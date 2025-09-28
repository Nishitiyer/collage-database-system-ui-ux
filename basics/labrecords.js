console.log("labrecords.js loaded");

const labEligibleCourses = {
  "💻 B.Tech in Computer Science": [
    "AI Lab",
    "Cybersecurity Lab",
    "Web Dev Lab",
  ],
  "🧪 B.Sc in Biotechnology": [
    "Genetics Lab",
    "Microbiology Lab",
    "Bioinformatics Lab",
  ],
  "⚙️ Diploma in Mechanical Engineering": [
    "CAD Lab",
    "Thermodynamics Lab",
    "Robotics Lab",
  ],
  "🌐 B.Sc in Data Analytics": [
    "Python Lab",
    "Machine Learning Lab",
    "Statistics Lab",
  ],
  "🧑‍🍳 Diploma in Culinary Arts": ["Baking Lab", "Kitchen Operations Lab"],
  "🖥️ Certificate in UI/UX Design": ["Prototyping Lab", "User Testing Lab"],
  "🧬 B.Sc in Genetics": ["Molecular Biology Lab", "Genome Analysis Lab"],
  "📐 B.Arch": ["Design Studio Lab", "Structural Systems Lab"],
  "🧑‍⚕️ B.Sc in Nursing": ["Anatomy Lab", "Clinical Practice Lab"],
  "🛰️ B.Tech in Aerospace Engineering": [
    "Flight Mechanics Lab",
    "Avionics Lab",
  ],
  "🧑‍🔬 M.Sc in Environmental Science": ["Ecology Lab", "Climate Studies Lab"],
};

function getRandomLab(subjects) {
  return subjects[Math.floor(Math.random() * subjects.length)];
}

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>🔬 Lab Records & Allotments</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>

    <div class="row g-4">
      ${Object.entries(labEligibleCourses)
        .map(([course, labs]) => renderLabCard(course, labs))
        .join("")}
    </div>
  </div>
`);

function renderLabCard(course, labs) {
  const assignedLab = getRandomLab(labs);
  return `
    <div class="col-md-6">
      <div class="card p-4 shadow-sm">
        <h5>${course}</h5>
        <p><strong>Assigned Lab:</strong> ${assignedLab}</p>
        <p><strong>Lab Type:</strong> Practical / Hands-on</p>
        <p><strong>Status:</strong> Active</p>
      </div>
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
