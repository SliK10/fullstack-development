class DropdownGuests {
  constructor () {
    this.dropdownShowInfo = document.querySelector('.dropdown__show-info');
    this.dropdownAreaOfPlaceholder = document.querySelector('.dropdown__area-of-placeholder');
    this.choiceGuests = document.querySelector('#choice-guests');
    this.outputAmountOfAdults = document.querySelector('.buttons-of-choice__amount-of-adults');
    this.outputAmountOfChildren = document.querySelector('.buttons-of-choice__amount-of-children');
    this.outputAmountOfBabyes = document.querySelector('.buttons-of-choice__amount-of-babyes');


    this.buttonRemoveAdults = document.querySelector('.button__remove-adults');
    this.buttonAddAdults = document.querySelector('.button__add-adults');
    this.buttonRemoveChildren = document.querySelector('.button__remove-children');
    this.buttonAddChildren = document.querySelector('.button__add-children');
    this.buttonRemoveBabyes = document.querySelector('.button__remove-babyes');
    this.buttonAddBabyes = document.querySelector('.button__add-babyes');
    this.buttonClear = document.querySelector('.button__clear');
    this.buttonApply = document.querySelector('.button__apply');

    this.amountOfAdults = 0;
    this.amountOfChildren = 0;
    this.amountOfBabyes = 0;
    this.maxAdults = 16;
    this.maxChildren = 16;
    this.maxBabyes = 5;
    this.handlerOnTheButtons = true;
  }
  dropdownInit() {
    document.addEventListener('click', this.showChoiceGuests.bind(this));
  }
  showChoiceGuests(e) {
    if (!this.choiceGuests.hidden) {
      this.dropdownShowInfo.classList.add('active');

      this.hideAndShowButtonClear();
      if (this.handlerOnTheButtons) {
        this.choiceGuests.addEventListener('click', this.listenerOfButtons.bind(this));
        this.handlerOnTheButtons = false;
      }
    } else if (this.choiceGuests.hidden) {

      this.dropdownShowInfo.classList.remove('active');
    }
  }

  listenerOfButtons(event) {
    let target = event.target.className;
    if (target == 'button__add-adults') {
      this.amountOfAdults += 1;
      this.outputAmountOfAdults.innerHTML = this.amountOfAdults;
      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfAdults, this.buttonRemoveAdults);
      this.setMaxAmount(this.amountOfAdults, this.buttonAddAdults, this.maxAdults);
    }
    if (target == 'button__remove-adults') {
      if ((this.amountOfAdults < 2 && (this.amountOfBabyes || this.amountOfChildren)) || this.amountOfAdults < 1) {
        return null;
      } else {
        this.amountOfAdults -= 1;
        this.outputAmountOfAdults.innerHTML = this.amountOfAdults;
        this.outputQuantityOfGuests();
        this.setAndRemoveDisabled(this.amountOfAdults, this.buttonRemoveAdults);
        this.setMaxAmount(this.amountOfAdults, this.buttonAddAdults, this.maxAdults);
      }
    }
    if (target == 'button__add-children') {
      if (this.amountOfAdults === 0) {
        this.amountOfAdults += 1;
        this.outputAmountOfAdults.innerHTML = this.amountOfAdults;
        this.outputQuantityOfGuests();
        this.setAndRemoveDisabled(this.amountOfAdults, this.buttonRemoveAdults);
      }
      this.amountOfChildren += 1;
      this.outputAmountOfChildren.innerHTML = this.amountOfChildren;
      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfChildren, this.buttonRemoveChildren);
      this.setMaxAmount(this.amountOfChildren, this.buttonAddChildren, this.maxChildren);
    }
    if (target == 'button__remove-children') {
      if (this.amountOfChildren < 1) {
        return null;
      } else {
        this.amountOfChildren -= 1;
        this.outputAmountOfChildren.innerHTML = this.amountOfChildren;
        this.outputQuantityOfGuests();
        this.setAndRemoveDisabled(this.amountOfChildren, this.buttonRemoveChildren);
        this.setMaxAmount(this.amountOfChildren, this.buttonAddChildren, this.maxChildren);
      }
    }
    if (target == 'button__add-babyes') {
      if (this.amountOfAdults === 0) {
        this.amountOfAdults += 1;
        this.outputAmountOfAdults.innerHTML = this.amountOfAdults;
        this.outputQuantityOfGuests();
        this.setAndRemoveDisabled(this.amountOfAdults, this.buttonRemoveAdults);
      }
      this.amountOfBabyes += 1;
      this.outputAmountOfBabyes.innerHTML = this.amountOfBabyes;
      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfBabyes, this.buttonRemoveBabyes);
      this.setMaxAmount(this.amountOfBabyes, this.buttonAddBabyes, this.maxBabyes);
    }
    if (target == 'button__remove-babyes') {
      if (this.amountOfBabyes < 1) {
        return null;
      } else {
        this.amountOfBabyes -= 1;
        this.outputAmountOfBabyes.innerHTML = this.amountOfBabyes;
        this.outputQuantityOfGuests();
        this.setAndRemoveDisabled(this.amountOfBabyes, this.buttonRemoveBabyes);
        this.setMaxAmount(this.amountOfBabyes, this.buttonAddBabyes, this.maxBabyes);
      }
    }
    if (target == 'button__clear') {
      this.amountOfAdults = 0;
      this.amountOfChildren = 0;
      this.amountOfBabyes = 0;

      this.outputAmountOfAdults.innerHTML = this.amountOfAdults;
      this.outputAmountOfChildren.innerHTML = this.amountOfChildren;
      this.outputAmountOfBabyes.innerHTML = this.amountOfBabyes;

      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfAdults, this.buttonRemoveAdults);
      this.setMaxAmount(this.amountOfAdults, this.buttonAddAdults, 16);

      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfChildren, this.buttonRemoveChildren);
      this.setMaxAmount(this.amountOfChildren, this.buttonAddChildren, 16);

      this.outputQuantityOfGuests();
      this.setAndRemoveDisabled(this.amountOfBabyes, this.buttonRemoveBabyes);
      this.setMaxAmount(this.amountOfBabyes, this.buttonAddBabyes, 5);
    }
    if (target == 'button__apply') {
      this.choiceGuests.hidden = true;

      this.dropdownShowInfo.classList.remove('active')
    }
    this.hideAndShowButtonClear();
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
  hideAndShowButtonClear() {
    let sumOfGuests = this.amountOfAdults + this.amountOfBabyes + this.amountOfChildren;
    if (sumOfGuests === 0) {
      this.buttonClear.classList.remove('button__clear')
      this.buttonClear.classList.add('button__clear_hidden')
    } else {
      this.buttonClear.classList.remove('button__clear_hidden')
      this.buttonClear.classList.add('button__clear')
    }
  }
}

const dropdownGuests = new DropdownGuests();
dropdownGuests.dropdownInit();
