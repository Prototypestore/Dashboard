// Get canvas context
const ctx = document.getElementById('incomeExpensesChart').getContext('2d');

// Chart data
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Total Income',
      data: [4500, 4000, 4800, 3500, 4000, 5000, 4500, 4200, 3800, 4000, 4200, 4300],
      backgroundColor: '#043862',
      borderRadius: 4,
      barPercentage: 0.5,
    },
    {
      label: 'Total Expenses',
      data: [3000, 2000, 4000, 5000, 3500, 3000, 3700, 3900, 3000, 2800, 3000, 2900],
      backgroundColor: '#2c84f9',
      borderRadius: 4,
      barPercentage: 0.5,
      // Make these bars negative so they appear below zero
      datalabels: {
        align: 'end'
      }
    },
    {
      label: 'Net Profit',
      data: [1500, 2000, 800, -1500, 500, 2000, 800, 300, 800, 1200, 1200, 1400],
      type: 'line',
      borderColor: '#a5c9ff',
      borderWidth: 2,
      fill: false,
      tension: 0.3,
      yAxisID: 'y1',
      pointRadius: 3,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: { drawTicks: false },
      ticks: {
        callback: function(value) {
          return value.toLocaleString();
        }
      }
    },
    y1: {
      position: 'right',
      grid: { drawOnChartArea: false, drawTicks: false },
      ticks: { display: false }
    },
    x: {
      grid: { display: false }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
  },
};

// Create chart
new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options,
});
