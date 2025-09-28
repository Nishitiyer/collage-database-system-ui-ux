console.log("studentlist.js loaded");

const students = JSON.parse(localStorage.getItem("studentDatabase") || "[]");

renderModule(`
  <div class="container py-4">
    <h2>📋 Student List</h2>
    ${
      students.length === 0
        ? `
      <div class="alert alert-warning">No student records found.</div>
    `
        : `
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>DOB</th><th>Phone</th><th>Email</th><th>Course</th><th>Year</th>
          </tr>
        </thead>
        <tbody>
          ${students
            .map(
              (s) => `
            <tr>
              <td>${s.firstName} ${s.lastName}</td>
              <td>${s.age}</td>
              <td>${s.dob}</td>
              <td>${s.phone}</td>
              <td>${s.email}</td>
              <td>${s.course}</td>
              <td>${s.year}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `
    }
  </div>
`);
