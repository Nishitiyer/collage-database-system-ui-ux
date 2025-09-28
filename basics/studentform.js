console.log("studentform.js loaded");

renderModule(`
  <div class="container py-4">
    <h2>🧑‍🎓 Add Student Details</h2>
    <div class="card p-4 shadow-sm mb-4">
      <div class="row g-3">
        <div class="col-md-6"><input type="text" id="firstName" class="form-control" placeholder="First Name" /></div>
        <div class="col-md-6"><input type="text" id="lastName" class="form-control" placeholder="Last Name" /></div>
        <div class="col-md-4"><input type="number" id="age" class="form-control" placeholder="Age" /></div>
        <div class="col-md-4"><input type="date" id="dob" class="form-control" placeholder="Date of Birth" /></div>
        <div class="col-md-4"><input type="text" id="phone" class="form-control" placeholder="Phone Number" /></div>
        <div class="col-md-6"><input type="email" id="email" class="form-control" placeholder="Email ID" /></div>
        <div class="col-md-6">
          <select id="course" class="form-select">
            <option value="" disabled selected>Select Course</option>
            ${Object.keys(courseSubjects)
              .map((c) => `<option>${c}</option>`)
              .join("")}
          </select>
        </div>
        <div class="col-md-6"><input type="text" id="year" class="form-control" placeholder="Year of Study (e.g. 2nd Year)" /></div>
      </div>
      <button class="btn btn-success mt-4 w-100" onclick="saveStudent()">Save Student</button>
    </div>
    <div id="save-output"></div>
  </div>
`);

function saveStudent() {
  const student = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    age: document.getElementById("age").value,
    dob: document.getElementById("dob").value,
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    course: document.getElementById("course").value,
    year: document.getElementById("year").value.trim(),
  };

  if (Object.values(student).some((v) => !v)) {
    alert("Please fill all fields.");
    return;
  }

  const students = JSON.parse(localStorage.getItem("studentDatabase") || "[]");
  students.push(student);
  localStorage.setItem("studentDatabase", JSON.stringify(students));

  document.getElementById("save-output").innerHTML = `
    <div class="alert alert-success">✅ Student ${student.firstName} ${student.lastName} saved successfully.</div>
  `;
}
