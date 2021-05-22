const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 40, 2, 20, 30, 45],
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [0, 15, 50, 7, 15, 35, 60],
    }    
]
  };
const config = {
    type: 'line',
    data,
    options: {}
  };
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);