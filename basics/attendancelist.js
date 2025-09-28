console.log("attendancelist.js loaded");

fetch("http://localhost/getattendance.php")
  .then((res) => res.json())
  .then((records) => {
    renderModule(`
      <div class="container py-4">
        <h2>📋 Attendance Records</h2>
        ${
          records.length === 0
            ? `
          <div class="alert alert-warning">No attendance data found.</div>
        `
            : `
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th><th>Student</th><th>Course</th><th>Subject</th><th>Date</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${records
                .map(
                  (r, i) => `
                <tr>
                  <td>${i + 1}</td>
                  <td>${r.student_name}</td>
                  <td>${r.course}</td>
                  <td>${r.subject}</td>
                  <td>${r.date}</td>
                  <td>${r.status}</td>
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
  })
  .catch((err) => {
    console.error("Error loading attendance:", err);
    renderModule(
      `<div class="alert alert-danger">❌ Failed to load attendance records.</div>`
    );
  });
