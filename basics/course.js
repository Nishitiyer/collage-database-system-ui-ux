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
      ${renderCourseCard(
        "💻 B.Tech in Computer Science",
        "AI, cybersecurity, full-stack development"
      )}
      ${renderCourseCard("📈 BBA", "Marketing, finance, HR, entrepreneurship")}
      ${renderCourseCard(
        "🧪 B.Sc in Biotechnology",
        "Genetics, microbiology, bioinformatics"
      )}
      ${renderCourseCard(
        "🎨 BA in Psychology & Design Thinking",
        "Behavioral science meets creativity"
      )}
      ${renderCourseCard(
        "⚙️ Diploma in Mechanical Engineering",
        "CAD, thermodynamics, robotics"
      )}
      ${renderCourseCard(
        "🌐 B.Sc in Data Analytics",
        "Statistics, Python, machine learning"
      )}
      ${renderCourseCard(
        "🎭 BA in Media & Communication",
        "Journalism, PR, digital media"
      )}
      ${renderCourseCard(
        "🧮 B.Com in Accounting & Finance",
        "Taxation, auditing, financial reporting"
      )}
      ${renderCourseCard(
        "🧑‍🍳 Diploma in Culinary Arts",
        "Professional cooking and kitchen ops"
      )}
      ${renderCourseCard(
        "🖥️ Certificate in UI/UX Design",
        "Wireframing, prototyping, user testing"
      )}
      ${renderCourseCard(
        "🧬 B.Sc in Genetics",
        "Molecular biology, heredity, genome analysis"
      )}
      ${renderCourseCard(
        "🏛️ BA in Political Science",
        "Governance, policy, international relations"
      )}
      ${renderCourseCard(
        "📐 B.Arch",
        "Architecture, urban planning, design studios"
      )}
      ${renderCourseCard(
        "🎼 BA in Music Production",
        "Sound engineering, composition, mixing"
      )}
      ${renderCourseCard(
        "🧘 Diploma in Yoga & Wellness",
        "Asanas, meditation, holistic health"
      )}
      ${renderCourseCard(
        "🧑‍⚕️ B.Sc in Nursing",
        "Clinical practice, anatomy, patient care"
      )}
      ${renderCourseCard(
        "🛰️ B.Tech in Aerospace Engineering",
        "Flight mechanics, propulsion, avionics"
      )}
      ${renderCourseCard(
        "🧑‍🎨 BA in Fine Arts",
        "Painting, sculpture, visual storytelling"
      )}
      ${renderCourseCard(
        "📚 MA in English Literature",
        "Poetry, prose, literary criticism"
      )}
      ${renderCourseCard(
        "🧑‍🔬 M.Sc in Environmental Science",
        "Ecology, sustainability, climate studies"
      )}
    </div>
  </div>
`);

function renderCourseCard(title, desc) {
  return `
    <div class="col-md-6">
      <div class="card p-4 shadow-sm">
        <h5>${title}</h5>
        <p>${desc}</p>
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
