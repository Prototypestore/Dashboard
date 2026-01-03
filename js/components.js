export function metricCard({ label, value, change }) {
  const positive = change >= 0;

  return `
    <div class="metric-card">
      <p class="label">${label}</p>
      <p class="value">${value}</p>
      <p class="change ${positive ? "up" : "down"}">
        ${positive ? "↑" : "↓"} ${Math.abs(change)}%
        <span>vs last period</span>
      </p>
    </div>
  `;
}
