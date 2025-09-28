console.log("facultylist.js loaded");

const facultyData = [
  {
    name: "Dr. Meera Iyer",
    subject: "Data Structures & Algorithms",
    email: "meera.iyer@nexuscollege.edu.in",
    phone: "+91 98765 43210",
  },
  {
    name: "Prof. Arvind Menon",
    subject: "Marketing Management",
    email: "arvind.menon@nexuscollege.edu.in",
    phone: "+91 99887 76543",
  },
  {
    name: "Dr. Kavita Sharma",
    subject: "Genetics & Molecular Biology",
    email: "kavita.sharma@nexuscollege.edu.in",
    phone: "+91 91234 56789",
  },
  {
    name: "Prof. Rohan Deshmukh",
    subject: "Design Thinking",
    email: "rohan.deshmukh@nexuscollege.edu.in",
    phone: "+91 93456 78123",
  },
  {
    name: "Dr. Neha Joshi",
    subject: "Thermodynamics",
    email: "neha.joshi@nexuscollege.edu.in",
    phone: "+91 97654 32109",
  },
  {
    name: "Prof. Sanjay Pillai",
    subject: "Python & Machine Learning",
    email: "sanjay.pillai@nexuscollege.edu.in",
    phone: "+91 98876 54321",
  },
  {
    name: "Dr. Anjali Rao",
    subject: "Journalism & Media Ethics",
    email: "anjali.rao@nexuscollege.edu.in",
    phone: "+91 90123 45678",
  },
  {
    name: "Prof. Vikram Patel",
    subject: "Accounting & Taxation",
    email: "vikram.patel@nexuscollege.edu.in",
    phone: "+91 93210 87654",
  },
  {
    name: "Chef Priya Nair",
    subject: "Culinary Arts",
    email: "priya.nair@nexuscollege.edu.in",
    phone: "+91 94567 89012",
  },
  {
    name: "Prof. Aditya Verma",
    subject: "UI/UX Design",
    email: "aditya.verma@nexuscollege.edu.in",
    phone: "+91 95678 12345",
  },
];

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>🧑‍🏫 Faculty Directory</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>

    <div class="row g-4">
      ${facultyData
        .map(
          (faculty) => `
        <div class="col-md-6">
          <div class="card p-4 shadow-sm">
            <h5>${faculty.name}</h5>
            <p><strong>Subject:</strong> ${faculty.subject}</p>
            <p><strong>Email:</strong> <a href="mailto:${faculty.email}">${faculty.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${faculty.phone}">${faculty.phone}</a></p>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  </div>
`);

function goBack() {
  window.location.reload();
}

function logout() {
  localStorage.clear();
  window.location.href = "collagedashboard.html";
}
