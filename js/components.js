export function metricCard({ label, value, change }) {
  const positive = change >= 0;

  return `
    <div class="metric-card">
      <p class="text-sm text-gray-500">${label}</p>
      <p class="text-3xl font-bold">${value}</p>
      <p class="text-sm ${positive ? "text-green-500" : "text-red-500"}">
        ${positive ? "↑" : "↓"} ${Math.abs(change)}%
        <span class="text-gray-400">vs last period</span>
      </p>
    </div>
  `;
}
