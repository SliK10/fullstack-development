import './__buttons/buttons'
import './__date-dropdown/date-dropdown'
import './__dropdown/dropdown'
import moment from './momentjs/moment'

class Calculator {
  constructor() {
    this.toBook = document.querySelector('.to-book')
    this.costs = this.toBook.querySelector('.price__number')
    this.costsDescription = this.toBook.querySelector(".information__description")
    this.informPrice = this.toBook.querySelector('.information__price')
    this.totalPrice = this.toBook.querySelector('.total__price')
    this.descriptionPrice = this.toBook.querySelector('.information__description-price')
    this.serviceCharge = this.toBook.querySelector('.information__price-service')
  }
  init() {
    this.toBook.addEventListener('click', this.date.bind(this))
  }
  date(e) {
    if (e.target.classList.contains('material-icons') ) {
      let computedStyle = getComputedStyle(document.querySelector('.date-airdatepicker'))
      if (computedStyle.display === 'none') {
        let dateArrival = document.querySelector('.arrival');
        let dateDeparture = document.querySelector('.departure');

        dateArrival = dateArrival.innerHTML.split('.');
        dateDeparture = dateDeparture.innerHTML.split('.');

        dateArrival.reverse();
        dateDeparture.reverse();

        let a = moment(dateArrival);
        let b = moment(dateDeparture);

        let total = b.diff(a, 'days');

        this.informPrice.innerHTML = `${this.calculateTotalCosts(total)}₽`
        this.totalPrice.innerHTML = `${this.calculateTotalCosts(total) - this.transformToNumber(this.descriptionPrice.innerHTML) + this.transformToNumber(this.serviceCharge.innerHTML)}₽`
      }
    }
  }
  calculateTotalCosts(total) {
    let price = this.costs.innerHTML;
    let priceNumber;

    priceNumber = this.transformToNumber(price);

    return priceNumber * total;
  }
  transformToNumber(string) {
    let stringWithoutSpace = '';

    for (let char of string) {
      if (char !== ' ') {
        stringWithoutSpace += char;
      }
    }
    stringWithoutSpace = parseInt(stringWithoutSpace);

    return stringWithoutSpace;
  }
}
let calculator = new Calculator;
calculator.init();
