const allCourses = [
  {
    title: "💻 B.Tech in Computer Science",
    desc: "AI, cybersecurity, full-stack development",
  },
  { title: "📈 BBA", desc: "Marketing, finance, HR, entrepreneurship" },
  {
    title: "🧪 B.Sc in Biotechnology",
    desc: "Genetics, microbiology, bioinformatics",
  },
  {
    title: "🎨 BA in Psychology & Design Thinking",
    desc: "Behavioral science meets creativity",
  },
  {
    title: "⚙️ Diploma in Mechanical Engineering",
    desc: "CAD, thermodynamics, robotics",
  },
  {
    title: "🌐 B.Sc in Data Analytics",
    desc: "Statistics, Python, machine learning",
  },
  {
    title: "🎭 BA in Media & Communication",
    desc: "Journalism, PR, digital media",
  },
  {
    title: "🧮 B.Com in Accounting & Finance",
    desc: "Taxation, auditing, financial reporting",
  },
  {
    title: "🧑‍🍳 Diploma in Culinary Arts",
    desc: "Professional cooking and kitchen ops",
  },
  {
    title: "🖥️ Certificate in UI/UX Design",
    desc: "Wireframing, prototyping, user testing",
  },
  {
    title: "🧬 B.Sc in Genetics",
    desc: "Molecular biology, heredity, genome analysis",
  },
  {
    title: "🏛️ BA in Political Science",
    desc: "Governance, policy, international relations",
  },
  { title: "📐 B.Arch", desc: "Architecture, urban planning, design studios" },
  {
    title: "🎼 BA in Music Production",
    desc: "Sound engineering, composition, mixing",
  },
  {
    title: "🧘 Diploma in Yoga & Wellness",
    desc: "Asanas, meditation, holistic health",
  },
  {
    title: "🧑‍⚕️ B.Sc in Nursing",
    desc: "Clinical practice, anatomy, patient care",
  },
  {
    title: "🛰️ B.Tech in Aerospace Engineering",
    desc: "Flight mechanics, propulsion, avionics",
  },
  {
    title: "🧑‍🎨 BA in Fine Arts",
    desc: "Painting, sculpture, visual storytelling",
  },
  {
    title: "📚 MA in English Literature",
    desc: "Poetry, prose, literary criticism",
  },
  {
    title: "🧑‍🔬 M.Sc in Environmental Science",
    desc: "Ecology, sustainability, climate studies",
  },
];

// Randomly select 4–6 courses as allotted
const allottedCourses = allCourses
  .sort(() => Math.random() - 0.5)
  .slice(0, Math.floor(Math.random() * 3) + 4); // 4 to 6 courses

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>📚 Courses Offered at Nexus Point College</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>
    <div class="row g-4">
      ${allCourses
        .map((course) =>
          renderCourseCard(course.title, course.desc, isAllotted(course.title))
        )
        .join("")}
    </div>
  </div>
`);

function isAllotted(title) {
  return allottedCourses.some((c) => c.title === title);
}

function renderCourseCard(title, desc, allotted) {
  return `
    <div class="col-md-6">
      <div class="card p-4 shadow-sm">
        <h5>${title} ${allotted ? "✅" : ""}</h5>
        <p>${desc}</p>
        ${
          allotted
            ? `<span class="badge bg-success">Allotted to You</span>`
            : ""
        }
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
