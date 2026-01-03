// ---------- METRICS ----------
function metric(el, title, value, change) {
  el.innerHTML = `
    <h3>${title}</h3>
    <div class="value">${value}</div>
    <div class="change">${change}</div>
    <div class="sub">vs previous month</div>
  `;
}

// Populate all metric cards
metric(document.getElementById("income"), "Total Income", "$4 719,00", "16.1%");
metric(document.getElementById("expenses"), "Total Expenses", "$3 270,00", "16.1%");
metric(document.getElementById("receivable"), "Accounts Receivable", "609,00", "-5,1%");
metric(document.getElementById("payable"), "Accounts Payable", "538,00", "-15.7%");
metric(document.getElementById("net-profit"), "Net Profit", "629,00", "-8.8%");
metric(document.getElementById("cash"), "Cash at end of month", "7 684,00", "4.9%");
metric(document.getElementById("quick-ratio"), "Quick Ratio", "1,02", "1 or higher");
metric(document.getElementById("current-ratio"), "Current Ratio", "3,02", "3 or higher");

// ---------- DONUTS ----------
function donut(el, percent, label, target = "") {
  el.innerHTML = `
    <div class="donut-circle" style="--percent:${percent}%">
      <div class="donut-inner">
        <strong>${percent}%</strong>
        <span>${label}</span>
        ${target ? `<small>${target}</small>` : ""}
      </div>
    </div>
  `;
}

// Top donut
donut(document.getElementById("profit-margin"), 13.3, "Net Profit Margin", "Target 12%");
// Bottom donuts
donut(document.getElementById("income-budget"), 94, "% of Income Budget");
donut(document.getElementById("expense-budget"), 93, "% of Expenses Budget");

// ---------- BAR CHART ----------
const chartData = {
  income: [5000, 5200, 4800, 6000, 5500, 6200, 6100, 5900, 5800, 6000, 6100, 6300],
  expenses: [4000, 3800, 4200, 4500, 4300, 4700, 4600, 4500, 4400, 4300, 4200, 4100],
};

const chart = document.getElementById("income-expenses");
chart.innerHTML = `
  <h3>Income and Expenses</h3>
  <div class="chart-bars">
    ${chartData.income.map((v, i) => `
      <div class="bar income" style="height:${v / 30}px"></div>
    `).join('')}
    ${chartData.expenses.map((v, i) => `
      <div class="bar expenses" style="height:${v / 30}px"></div>
    `).join('')}
  </div>
`;
