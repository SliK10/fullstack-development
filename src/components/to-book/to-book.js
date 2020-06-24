import './__buttons/buttons'
import './__date-dropdown/date-dropdown'
import './__dropdown/dropdown'
import moment from './momentjs/moment'

class Calculator {
  constructor() {
    this.arrival = document.querySelector('.arrival')
    this.departure = document.querySelector('.departure')
    this.rangeFrom = document.querySelector("-range-from-")
  }
  init() {
    this.arrival.addEventListener('click', this.date)
  }
  date(e) {
    console.log(e.target.innerHTML)
    let a = moment(e.target.innerHTML, "DD.MM.YYYY");
    console.log(a)
  }
  calculate(arrival, departure) {

  }
}
let calculator = new Calculator;
calculator.init();
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
