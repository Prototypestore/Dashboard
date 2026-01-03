/* ---------- METRICS FUNCTION ---------- */
function metric(el, title, value, change) {
  el.innerHTML = `
    <h3>${title}</h3>
    <div class="value">${value}</div>
    <div class="change">${change}</div>
    <div class="sub">vs previous month</div>
  `;
}

/* ---------- APPLY METRICS ---------- */
metric(document.getElementById("income"), "Total Income", "$4 719,00", "16.1%");
metric(document.getElementById("expenses"), "Total Expenses", "$3 270,00", "16.1%");
metric(document.getElementById("receivable"), "Accounts Receivable", "609,00", "-5.1%");
metric(document.getElementById("payable"), "Accounts Payable", "538,00", "-15.7%");
metric(document.getElementById("net-profit"), "Net Profit", "629,00", "-8.8%");
metric(document.getElementById("cash"), "Cash at end of month", "7 684,00", "4.9%");
metric(document.getElementById("quick-ratio"), "Quick Ratio", "1.02", "1 or higher");
metric(document.getElementById("current-ratio"), "Current Ratio", "3.02", "3 or higher");

/* ---------- DONUT FUNCTION ---------- */
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

/* ---------- APPLY DONUTS ---------- */
donut(document.getElementById("profit-margin"), 13.3, "Net Profit Margin");
donut(document.getElementById("income-budget"), 94, "Income Budget");
donut(document.getElementById("expense-budget"), 93, "Expenses Budget");

/* ---------- BAR CHART FUNCTION ---------- */
function barChart(el, data) {
  el.innerHTML = `
    <h3>Income and Expenses</h3>
    <div class="chart-bars">
      ${data.map(v => `<div class="bar" style="height:${v * 3}px"></div>`).join("")}
    </div>
  `;
}

/* ---------- APPLY BAR CHART ---------- */
barChart(document.getElementById("income-expenses"), [50, 40, 55, 60, 45, 70, 65, 60, 50, 55, 48, 60]);
