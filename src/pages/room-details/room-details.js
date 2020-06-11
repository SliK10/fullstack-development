import './room-details.scss'
import '../../components/to-book/to-book'
// import './chart.js/Chart'

// var ctx = document.getElementById('myChart').getContext('2d');

// var darkGradient = ctx.createLinearGradient(0, 0, 0, 100);
// darkGradient.addColorStop(0, '#919191')
// darkGradient.addColorStop(1, '#3D4975')

// var violetGradient = ctx.createLinearGradient(0, 0, 0, 100);
// violetGradient.addColorStop(0, '#BC9CFF');
// violetGradient.addColorStop(1, '#8BA4F9');

// var greenGradient = ctx.createLinearGradient(0, 100, 0, 0);
// greenGradient.addColorStop(0, '#6FCF97');
// greenGradient.addColorStop(1, '#66D2EA');

// var orangeGradient = ctx.createLinearGradient(0, 0, 0, 100);
// orangeGradient.addColorStop(0, '#FFE39C');
// orangeGradient.addColorStop(1, '#FFBA9C');

// var chart = new Chart(ctx, {
//     type: 'doughnut',

//     // The data for our dataset
//     data: {
//         labels: ['Разочарован', 'Хорошо', 'Удовлетворительно', 'Великолепно'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: [ darkGradient, violetGradient, greenGradient, orangeGradient],
//             borderColor: '#fff',
//             borderWidth: 2,
//             data: [0, 25, 25, 50]
//         }]
//     },

//     // Configuration options go here
//     options: {
//       cutoutPercentage: 90,
//       legend: {
//         position: 'right'
//       },
//       elements: {
//         center: {
//           text: '260',
//           color: '#FF6384', // Default is #000000
//           fontStyle: 'Arial', // Default is Arial
//           sidePadding: 20, // Default is 20 (as a percentage)
//           minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
//           lineHeight: 25 // Default is 25 (in px), used for when text wraps
//         }
//       }
//     }
// });