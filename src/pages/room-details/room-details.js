import './room-details.scss'
import '../../components/to-book/to-book'
import './apexchart/apexcharts.js'

var divChart = document.querySelector("#chart");
var options = {
  chart: {
    height: 120,
    type: 'bar'
  },
  series: [{
    name: 'sales',
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

var chart = new ApexCharts(divChart, options);

chart.render();
