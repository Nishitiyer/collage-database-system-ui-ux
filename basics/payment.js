console.log("payment.js loaded");

renderModule(`
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>💳 College Payment Portal</h2>
      <div>
        <button class="btn btn-secondary me-2" onclick="goBack()">← Go Back</button>
        <button class="btn btn-danger" onclick="logout()">Logout</button>
      </div>
    </div>

    <div class="card p-4 shadow-sm mb-4">
      <div class="mb-3">
        <label for="paymentType" class="form-label">Select Payment Method</label>
        <select id="paymentType" class="form-select" onchange="showPaymentFields()">
          <option value="" disabled selected>Select method</option>
          <option value="UPI">UPI</option>
          <option value="Card">Credit/Debit Card</option>
          <option value="NetBanking">Net Banking</option>
        </select>
      </div>

      <div id="paymentFields"></div>

      <div class="mb-3">
        <label for="amount" class="form-label">Amount (₹)</label>
        <input type="number" id="amount" class="form-control" placeholder="e.g. 50000" min="1" />
      </div>

      <button class="btn btn-success w-100" onclick="submitPayment()">Submit Payment</button>
    </div>

    <div id="payment-output" class="mt-4"></div>
  </div>
`);

function showPaymentFields() {
  const method = document.getElementById("paymentType").value;
  let html = "";

  if (method === "UPI") {
    html = `
      <div class="mb-3">
        <label for="upiId" class="form-label">UPI ID</label>
        <input type="text" id="upiId" class="form-control" placeholder="e.g. name@bank" />
      </div>
    `;
  } else if (method === "Card") {
    html = `
      <div class="mb-3">
        <label for="cardNumber" class="form-label">Card Number</label>
        <input type="text" id="cardNumber" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" />
      </div>
      <div class="mb-3">
        <label for="cardHolder" class="form-label">Cardholder Name</label>
        <input type="text" id="cardHolder" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="expiry" class="form-label">Expiry Date</label>
        <input type="month" id="expiry" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="cvv" class="form-label">CVV</label>
        <input type="password" id="cvv" class="form-control" maxlength="3" />
      </div>
    `;
  } else if (method === "NetBanking") {
    html = `
      <div class="mb-3">
        <label for="bankName" class="form-label">Bank Name</label>
        <input type="text" id="bankName" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="accountNumber" class="form-label">Account Number</label>
        <input type="text" id="accountNumber" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="ifsc" class="form-label">IFSC Code</label>
        <input type="text" id="ifsc" class="form-control" />
      </div>
    `;
  }

  document.getElementById("paymentFields").innerHTML = html;
}

function submitPayment() {
  const method = document.getElementById("paymentType").value;
  const amount = document.getElementById("amount").value;

  if (!method || !amount || amount <= 0) {
    alert("Please select a payment method and enter a valid amount.");
    return;
  }

  let details = { method, amount };

  if (method === "UPI") {
    const upiId = document.getElementById("upiId").value.trim();
    if (!upiId) return alert("Please enter your UPI ID.");
    details.upiId = upiId;
  } else if (method === "Card") {
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cardHolder = document.getElementById("cardHolder").value.trim();
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value.trim();
    if (!cardNumber || !cardHolder || !expiry || !cvv)
      return alert("Please fill all card details.");
    details = { ...details, cardNumber, cardHolder, expiry, cvv };
  } else if (method === "NetBanking") {
    const bankName = document.getElementById("bankName").value.trim();
    const accountNumber = document.getElementById("accountNumber").value.trim();
    const ifsc = document.getElementById("ifsc").value.trim();
    if (!bankName || !accountNumber || !ifsc)
      return alert("Please fill all net banking details.");
    details = { ...details, bankName, accountNumber, ifsc };
  }

  details.timestamp = new Date().toLocaleString();
  localStorage.setItem("paymentDetails", JSON.stringify(details));
  displayPayment();
}

function displayPayment() {
  const payment = JSON.parse(localStorage.getItem("paymentDetails"));
  if (!payment) return;

  let summary = `
    <div class="card p-4 shadow-sm">
      <h5>✅ Payment Submitted</h5>
      <p><strong>Method:</strong> ${payment.method}</p>
      <p><strong>Amount:</strong> ₹${payment.amount}</p>
  `;

  if (payment.method === "UPI") {
    summary += `<p><strong>UPI ID:</strong> ${payment.upiId}</p>`;
  } else if (payment.method === "Card") {
    summary += `
      <p><strong>Cardholder:</strong> ${payment.cardHolder}</p>
      <p><strong>Card Number:</strong> ${payment.cardNumber}</p>
      <p><strong>Expiry:</strong> ${payment.expiry}</p>
    `;
  } else if (payment.method === "NetBanking") {
    summary += `
      <p><strong>Bank:</strong> ${payment.bankName}</p>
      <p><strong>Account No:</strong> ${payment.accountNumber}</p>
      <p><strong>IFSC:</strong> ${payment.ifsc}</p>
    `;
  }

  summary += `
      <p><small><strong>Submitted on:</strong> ${payment.timestamp}</small></p>
      <button class="btn btn-outline-danger mt-3" onclick="deletePayment()">Delete Payment</button>
    </div>
  `;

  document.getElementById("payment-output").innerHTML = summary;
}

function deletePayment() {
  localStorage.removeItem("paymentDetails");
  document.getElementById("payment-output").innerHTML = "";
}

function goBack() {
  window.location.reload();
}

function logout() {
  localStorage.clear();
  window.location.href = "collagedashboard.html";
}

// Auto-display if payment exists
displayPayment();
