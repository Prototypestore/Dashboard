import { sampleData } from "./config.js";
import { metricCard } from "./components.js";
import { applyTheme } from "./theme.js";

export function renderDashboard(config) {
  const container = document.getElementById("dashboard-container");

  applyTheme(config);

  container.style.backgroundColor = config.background_color;
  container.style.color = config.text_color;
  container.style.fontFamily = `${config.font_family}, system-ui`;
  container.style.fontSize = `${config.font_size}px`;

  container.innerHTML = `
    <div class="max-w-7xl mx-auto p-6">
      <header class="mb-8">
        <h1 class="text-3xl font-bold">${config.dashboard_title}</h1>
        <p class="text-gray-500">${config.welcome_message}, let's review your business metrics</p>
      </header>

      <section class="grid grid-cols-1 md:grid-cols-4 gap-6">
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
    </div>
  `;
}
