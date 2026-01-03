import { sampleData } from "./config.js";
import { metricCard } from "./components.js";
import { applyTheme } from "./theme.js";

export function renderDashboard(config) {
  const container = document.getElementById("dashboard-container");
  applyTheme(config);

  container.innerHTML = `
    <div class="dashboard-wrapper">
      <header>
        <h1>${config.dashboard_title}</h1>
        <p>${config.welcome_message}, let's review your business metrics</p>
      </header>

      <section class="metrics">
        ${metricCard({
          label: config.revenue_label,
          value: `$${sampleData.revenue.toLocaleString()}`,
          change: sampleData.revenueChange
        })}
        ${metricCard({
          label: config.users_label,
          value: sampleData.users.toLocaleString(),
          change: sampleData.usersChange
        })}
        ${metricCard({
          label: config.orders_label,
          value: sampleData.orders.toLocaleString(),
          change: sampleData.ordersChange
        })}
        ${metricCard({
          label: config.conversion_label,
          value: `${sampleData.conversion}%`,
          change: sampleData.conversionChange
        })}
      </section>

      <section class="actions">
        <button class="dashboard-btn primary">Generate Report</button>
        <button class="dashboard-btn outline">Export Data</button>
        <button class="dashboard-btn outline">Settings</button>
      </section>
    </div>
  `;
}
