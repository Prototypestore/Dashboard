// ---------------- METRIC FUNCTION ----------------
function metric(el, title, value, change) {
  el.innerHTML = `
    <h3>${title}</h3>
    <div class="value">${value}</div>
    <div class="change">${change}</div>
    <div class="sub">vs previous month</div>
  `;
}

// Get all metric elements
const income = document.getElementById("income");
const expenses = document.getElementById("expenses");
const receivable = document.getElementById("receivable");
const payable = document.getElementById("payable");
const net_profit = document.getElementById("net-profit");
const cash = document.getElementById("cash");
const quick_ratio = document.getElementById("quick-ratio");
const current_ratio = document.getElementById("current-ratio");

// Apply metric data
metric(income, "Total Income", "$4 719,00", "16.1%");
metric(expenses, "Total Expenses", "$3 270,00", "16.1%");
metric(receivable, "Accounts Receivable", "609,00", "-5.1%");
metric(payable, "Accounts Payable", "538,00", "-15.7%");
metric(net_profit, "Net Profit", "629,00", "-8.8%");
metric(cash, "Cash at end of month", "7 684,00", "4.9%");
metric(quick_ratio, "Quick Ratio", "1.02", "1 or higher");
metric(current_ratio, "Current Ratio", "3.02", "3 or higher");

// ---------------- DONUT FUNCTION ----------------
function donut(el, percent, label) {
  el.innerHTML = `
    <div class="donut-circle" style="--percent:${percent}%">
      <div class="donut-inner">
        <strong>${percent}%</strong>
        <span>${label}</span>
      </div>
    </div>
  `;
}

const profit_margin = document.getElementById("profit-margin");
const income_budget = document.getElementById("income-budget");
const expense_budget = document.getElementById("expense-budget");

donut(profit_margin, 13.3, "Net Profit Margin");
donut(income_budget, 94, "Income Budget");
donut(expense_budget, 93, "Expenses Budget");

// ---------------- BAR CHART ----------------
const chart = document.getElementById("income-expenses");
chart.innerHTML = `
  <h3>Income and Expenses</h3>
  <div class="chart-bars">
    ${[50,40,55,60,45,70,65,60,50,55,48,60]
      .map(v => `<div class="bar" style="height:${v * 3}px"></div>`)
      .join("")}
  </div>
`;
