// Income and Expenses Bar + Net Profit Line Chart using Chart.js
const ctx = document.getElementById('incomeExpensesChart').getContext('2d');

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
      data: [-3000, -2000, -4000, -5000, -3500, -3000, -3700, -3900, -3000, -2800, -3000, -2900],
      backgroundColor: '#2c84f9',
      borderRadius: 4,
      barPercentage: 0.5,
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
      pointRadius: 0,
    },
  ],
};

const options = {
  scales: {
    y: {
      position: 'left',
      beginAtZero: false,
      ticks: {
        callback: function(value) {
          return value.toLocaleString();
        }
      },
      grid: {
        drawTicks: false,
      }
    },
    y1: {
      position: 'right',
      beginAtZero: false,
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: false
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: { 
      display: true,     // turns the legend on
      position: 'bottom', // moves it to the bottom
    }
  },
  responsive: true,
  maintainAspectRatio: false,
};

new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options,
});
