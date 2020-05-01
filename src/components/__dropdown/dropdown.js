class DropdownGuests {
  constructor () {
    this.dropdownShowInfo = document.querySelector('.dropdown__show-info');
    this.choiceGuests = document.querySelector('.panel-of-choice');
    this.outputAmountOfAdults = document.querySelector('.buttons-of-choice__amount-of-adults')
    this.outputAmountOfChildren = document.querySelector('.buttons-of-choice__amount-of-children')
    this.outputAmountOfBabyes = document.querySelector('.buttons-of-choice__amount-of-babyes')
    this.dropdownAreaOfPlaceholder = document.querySelector('.dropdown__area-of-placeholder')

    this.buttonRemoveAdults = document.querySelector('.button__remove-adults')
    this.buttonAddAdults = document.querySelector('.button__add-adults')
    this.buttonRemoveChildren = document.querySelector('.button__remove-children')
    this.buttonAddChildren = document.querySelector('.button__add-children')
    this.buttonRemoveBabyes = document.querySelector('.button__remove-babyes')
    this.buttonAddBabyes = document.querySelector('.button__add-babyes')

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
    let target = event.target.className;
    if (target == 'button__add-adults') {
      this.amountOfAdults += 1;
      this.outputAmountOfAdults.innerHTML = this.amountOfAdults;
      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfAdults, this.buttonRemoveAdults);
      this.setMaxAmount(this.amountOfAdults, this.buttonAddAdults, 16);
    }
    if (target == 'button__remove-adults') {
      this.amountOfAdults -= 1;
      this.outputAmountOfAdults.innerHTML = this.amountOfAdults;
      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfAdults, this.buttonRemoveAdults);
      this.setMaxAmount(this.amountOfAdults, this.buttonAddAdults, 16);
    }
    if (target == 'button__add-children') {
      this.amountOfChildren += 1;
      this.outputAmountOfChildren.innerHTML = this.amountOfChildren;
      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfChildren, this.buttonRemoveChildren);
      this.setMaxAmount(this.amountOfChildren, this.buttonAddChildren, 16);
    }
    if (target == 'button__remove-children') {
      this.amountOfChildren -= 1;
      this.outputAmountOfChildren.innerHTML = this.amountOfChildren;
      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfChildren, this.buttonRemoveChildren);
      this.setMaxAmount(this.amountOfChildren, this.buttonAddChildren, 16);
    }
    if (target == 'button__add-babyes') {
      this.amountOfBabyes += 1;
      this.outputAmountOfBabyes.innerHTML = this.amountOfBabyes;
      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfBabyes, this.buttonRemoveBabyes);
      this.setMaxAmount(this.amountOfBabyes, this.buttonAddBabyes, 5);
    }
    if (target == 'button__remove-babyes') {
      this.amountOfBabyes -= 1;
      this.outputAmountOfBabyes.innerHTML = this.amountOfBabyes;
      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfBabyes, this.buttonRemoveBabyes);
      this.setMaxAmount(this.amountOfBabyes, this.buttonAddBabyes, 5);
    }
  }
  outputQuantityOfGuests() {
    let sumOfGuests = this.amountOfAdults + this.amountOfChildren;
    let babyes = this.amountOfBabyes;
    let messages = '';
    if ((sumOfGuests > 0 && sumOfGuests < 2) || (sumOfGuests === 21) || (sumOfGuests === 31)) {
      messages = `${sumOfGuests} гость`
      messages = this.checkBabyes(messages, babyes)
      this.checkBabyes(messages, babyes)
    } else if ((sumOfGuests > 1 && sumOfGuests < 5) || (sumOfGuests > 21 && sumOfGuests <25) || (sumOfGuests > 31)) {
        messages = `${sumOfGuests} гостя`
        messages = this.checkBabyes(messages, babyes)
    } else if (sumOfGuests >= 5) {
        messages = `${sumOfGuests} гостей`
        messages = this.checkBabyes(messages, babyes)
    } else if (sumOfGuests === 0) {
        messages = `Сколько гостей`
    }
    this.dropdownAreaOfPlaceholder.innerHTML = messages;
  }
  checkBabyes(messages, babyes) {
    let output = messages;
    if (babyes === 1) {
      output += `, ${babyes} младенец`;
    } else if (babyes > 1 && babyes < 5) {
      output += `, ${babyes} младенца`;
    } else if (babyes > 4) {
      output += `, ${babyes} младенцев`;
    }
    return output;
  }
  setAndRemoveDisabled(amount, elem) {
    if (amount > 0) {
      elem.removeAttribute('disabled');
    }
    if (amount === 0) {
      elem.setAttribute('disabled', 'disabled');
    }
  }
  setMaxAmount(amount, elem, maxAmount) {
    if (amount === maxAmount) {
      elem.setAttribute('disabled', 'disabled');
    } else if (amount < maxAmount) {
      elem.removeAttribute('disabled')
    }
  }
}

const dropdownGuests = new DropdownGuests();
dropdownGuests.dropdownInit();

export default dropdownGuests;
