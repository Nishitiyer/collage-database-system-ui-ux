console.log("resources.js loaded");

const courseBooks = {
  "B.Tech in Computer Science": [
    {
      title: "Introduction to Algorithms",
      link: "https://mitpress.mit.edu/books/introduction-algorithms",
    },
    { title: "Operating System Concepts", link: "https://os-book.com/" },
    {
      title: "Artificial Intelligence: A Modern Approach",
      link: "https://aima.cs.berkeley.edu/",
    },
  ],
  BBA: [
    {
      title: "Principles of Marketing",
      link: "https://openlibrary.org/works/OL45804W/Principles_of_Marketing",
    },
    {
      title: "Financial Accounting",
      link: "https://openlibrary.org/works/OL45803W/Financial_Accounting",
    },
  ],
  "B.Sc in Biotechnology": [
    {
      title: "Molecular Biology of the Cell",
      link: "https://www.ncbi.nlm.nih.gov/books/NBK21054/",
    },
    {
      title: "Lehninger Principles of Biochemistry",
      link: "https://openlibrary.org/works/OL45802W/Lehninger_Principles_of_Biochemistry",
    },
  ],
  "BA in Psychology & Design Thinking": [
    {
      title: "Thinking, Fast and Slow",
      link: "https://openlibrary.org/works/OL15272869W/Thinking_Fast_and_Slow",
    },
    {
      title: "The Design of Everyday Things",
      link: "https://www.nngroup.com/books/design-everyday-things/",
    },
  ],
  "Diploma in Mechanical Engineering": [
    {
      title: "Engineering Thermodynamics",
      link: "https://openlibrary.org/works/OL45801W/Engineering_Thermodynamics",
    },
    {
      title: "CAD Fundamentals",
      link: "https://www.autodesk.com/solutions/cad-software",
    },
  ],
  "B.Sc in Data Analytics": [
    {
      title: "Python for Data Analysis",
      link: "https://wesmckinney.com/book/",
    },
    {
      title: "An Introduction to Statistical Learning",
      link: "https://www.statlearning.com/",
    },
  ],
  "BA in Media & Communication": [
    {
      title: "Media and Society",
      link: "https://openlibrary.org/works/OL45800W/Media_and_Society",
    },
    {
      title: "Digital Media Ethics",
      link: "https://openlibrary.org/works/OL45799W/Digital_Media_Ethics",
    },
  ],
  "B.Com in Accounting & Finance": [
    {
      title: "Accounting Principles",
      link: "https://openlibrary.org/works/OL45798W/Accounting_Principles",
    },
    {
      title: "Corporate Finance",
      link: "https://openlibrary.org/works/OL45797W/Corporate_Finance",
    },
  ],
  "Diploma in Culinary Arts": [
    {
      title: "Professional Cooking",
      link: "https://openlibrary.org/works/OL45796W/Professional_Cooking",
    },
    {
      title: "The Science of Cooking",
      link: "https://www.nature.com/articles/nature11671",
    },
  ],
  "Certificate in UI/UX Design": [
    {
      title: "Don't Make Me Think",
      link: "https://openlibrary.org/works/OL45795W/Don't_Make_Me_Think",
    },
    {
      title: "Designing Interfaces",
      link: "https://www.oreilly.com/library/view/designing-interfaces-3rd/9781492051963/",
    },
  ],
};

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>📚 Digital Library Resources</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>

    ${Object.entries(courseBooks)
      .map(([course, books]) => renderCourseSection(course, books))
      .join("")}
  </div>
`);

function renderCourseSection(course, books) {
  return `
    <div class="card mb-4 shadow-sm">
      <div class="card-header bg-light">
        <h5 class="mb-0">${course}</h5>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          ${books
            .map(
              (book) => `
            <li class="list-group-item d-flex justify-content-between align-items-center">
              ${book.title}
              <a href="${book.link}" target="_blank" class="btn btn-sm btn-outline-primary">View</a>
            </li>
          `
            )
            .join("")}
        </ul>
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
