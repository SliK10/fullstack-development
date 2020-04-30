class DropdownGuests {
  constructor () {
    this.dropdownShowInfo = document.querySelector('.dropdown__show-info');
    this.choiceGuests = document.querySelector('.panel-of-choice');
    this.outputAmountOfAdults = document.querySelector('.buttons-of-choice__amount-of-adults')
    this.dropdownAreaOfPlaceholder = document.querySelector('.dropdown__area-of-placeholder')
    this.buttonRemoveAdults = document.querySelector('.button__remove-adults')

    this.amountOfAdults = 0;
    this.amountOfChildren = 0;
    this.amountOfBabyes = 0;
    this.handlerOnTheButtons = true;
  }
  dropdownInit() {
    this.dropdownShowInfo.addEventListener('click', this.showChoiceGuests.bind(this));
  }
  showChoiceGuests() {
    if(this.choiceGuests.classList.contains('hide')) {
      this.dropdownShowInfo.classList.remove('dropdown__show-info')
      this.dropdownShowInfo.classList.add('dropdown__show-info_active')
      this.choiceGuests.classList.remove('hide');
      this.choiceGuests.classList.add('show');

      if (this.handlerOnTheButtons) {
        this.choiceGuests.addEventListener('click', this.listenerOfButtons.bind(this))
        this.handlerOnTheButtons = false;
      }
    } else if (this.choiceGuests.classList.contains('show')) {
      this.dropdownShowInfo.classList.add('dropdown__show-info')
      this.dropdownShowInfo.classList.remove('dropdown__show-info_active')
      this.choiceGuests.classList.remove('show');
      this.choiceGuests.classList.add('hide');
    }
  }

  listenerOfButtons(event) {
    if (event.target.className == 'button__add-adults') {
      this.amountOfAdults += 1;
      this.outputAmountOfAdults.innerHTML = this.amountOfAdults;
      this.dropdownAreaOfPlaceholder.innerHTML = `${this.amountOfAdults} гостей`
      if (this.amountOfAdults > 0) {
        this.buttonRemoveAdults.removeAttribute('disabled');
      }
    } else if (event.target.className == 'button__remove-adults') {
      this.amountOfAdults -= 1;
      this.outputAmountOfAdults.innerHTML = this.amountOfAdults;
      this.dropdownAreaOfPlaceholder.innerHTML = `${this.amountOfAdults} гостей`
      if (this.amountOfAdults === 0) {
        this.buttonRemoveAdults.setAttribute('disabled', 'disabled');
      }
    }
  }
}

const dropdownGuests = new DropdownGuests();
dropdownGuests.dropdownInit();

export default dropdownGuests;
