class DropdownBedroom {
  constructor () {
    this.dropdownShowInfo = document.querySelector('.dropdown-bedroom__show-info');
    this.dropdownAreaOfPlaceholder = document.querySelector('.dropdown-bedroom__area-of-placeholder');
    this.choiceBedrooms = document.querySelector('.dropdown-bedroom__panel-of-choice');
    this.outputAmountOfBedrooms = document.querySelector('.buttons-of-choice__amount-of-bedrooms');
    this.outputAmountOfBeds = document.querySelector('.buttons-of-choice__amount-of-beds');
    this.outputAmountOfBathrooms = document.querySelector('.buttons-of-choice__amount-of-bathrooms');

    this.buttonRemoveBedrooms = document.querySelector('.button__remove-bedrooms');
    this.buttonAddBedrooms = document.querySelector('.button__add-bedrooms');
    this.buttonRemoveBeds = document.querySelector('.button__remove-beds');
    this.buttonAddBeds = document.querySelector('.button__add-beds');
    this.buttonRemoveBathrooms = document.querySelector('.button__remove-bathrooms');
    this.buttonAddBathrooms = document.querySelector('.button__add-bathrooms');

    this.amountOfBedrooms = 0;
    this.amountOfBeds = 0;
    this.amountOfBathrooms = 0;
    this.maxBedrooms = 10;
    this.maxBeds = 20;
    this.maxBathrooms = 5;
    this.handlerOnTheButtons = true;
  }
  dropdownInit() {
    this.dropdownShowInfo.addEventListener('click', this.showChoiceBedrooms.bind(this));
  }
  showChoiceBedrooms() {
    if(this.choiceBedrooms.classList.contains('hide')) {
      this.dropdownShowInfo.classList.remove('dropdown-bedroom__show-info')
      this.dropdownShowInfo.classList.add('dropdown-bedroom__show-info_active')
      this.choiceBedrooms.classList.remove('hide');
      this.choiceBedrooms.classList.add('show');

      if (this.handlerOnTheButtons) {
        this.choiceBedrooms.addEventListener('click', this.listenerOfButtons.bind(this))
        this.handlerOnTheButtons = false;
      }
    } else if (this.choiceBedrooms.classList.contains('show')) {
      this.dropdownShowInfo.classList.add('dropdown-bedroom__show-info')
      this.dropdownShowInfo.classList.remove('dropdown-bedroom__show-info_active')
      this.choiceBedrooms.classList.remove('show');
      this.choiceBedrooms.classList.add('hide');
    }
  }

  listenerOfButtons(event) {
    let target = event.target.className;
    if (target == 'button__add-bedrooms') {
      this.amountOfBedrooms += 1;
      this.outputAmountOfBedrooms.innerHTML = this.amountOfBedrooms;
      this.outputQuantityOfBedrooms();
      this.setAndRemoveDisabled(this.amountOfBedrooms, this.buttonRemoveBedrooms);
      this.setMaxAmount(this.amountOfBedrooms, this.buttonAddBedrooms, this.maxBedrooms);
    }
    if (target == 'button__remove-bedrooms') {
      this.amountOfBedrooms -= 1;
      this.outputAmountOfBedrooms.innerHTML = this.amountOfBedrooms;
      this.outputQuantityOfBedrooms();
      this.setAndRemoveDisabled(this.amountOfBedrooms, this.buttonRemoveBedrooms);
      this.setMaxAmount(this.amountOfBedrooms, this.buttonAddBedrooms, this.maxBedrooms);
    }
    if (target == 'button__add-beds') {
      this.amountOfBeds += 1;
      this.outputAmountOfBeds.innerHTML = this.amountOfBeds;
      this.outputQuantityOfBedrooms();
      this.setAndRemoveDisabled(this.amountOfBeds, this.buttonRemoveBeds);
      this.setMaxAmount(this.amountOfBeds, this.buttonAddBeds, this.maxBeds);
    }
    if (target == 'button__remove-beds') {
        this.amountOfBeds -= 1;
        this.outputAmountOfBeds.innerHTML = this.amountOfBeds;
        this.outputQuantityOfBedrooms();
        this.setAndRemoveDisabled(this.amountOfBeds, this.buttonRemoveBeds);
        this.setMaxAmount(this.amountOfBeds, this.buttonAddBeds, this.maxBeds);
    }
    if (target == 'button__add-bathrooms') {
      this.amountOfBathrooms += 1;
      this.outputAmountOfBathrooms.innerHTML = this.amountOfBathrooms;
      this.outputQuantityOfBedrooms();
      this.setAndRemoveDisabled(this.amountOfBathrooms, this.buttonRemoveBathrooms);
      this.setMaxAmount(this.amountOfBathrooms, this.buttonAddBathrooms, this.maxBathrooms);
    }
    if (target == 'button__remove-bathrooms') {
        this.amountOfBathrooms -= 1;
        this.outputAmountOfBathrooms.innerHTML = this.amountOfBathrooms;
        this.outputQuantityOfBedrooms();
        this.setAndRemoveDisabled(this.amountOfBathrooms, this.buttonRemoveBathrooms);
        this.setMaxAmount(this.amountOfBathrooms, this.buttonAddBathrooms, this.maxBathrooms);
    }
  }
  outputQuantityOfBedrooms() {
    let amountOfBedrooms = this.amountOfBedrooms;
    let amountOfBeds = this.amountOfBeds;
    let amountOfBathrooms = this.amountOfBathrooms;
    let messages = '';
    if(amountOfBedrooms) {
      messages = `${amountOfBedrooms} ` + this.checkBedrooms(amountOfBedrooms);
      if(amountOfBeds){
        messages += `, ${amountOfBeds} ` + this.checkBeds(amountOfBeds) + '...';
      } else if(amountOfBathrooms){
        messages += `, ${amountOfBathrooms} ` + this.checkBathrooms(amountOfBathrooms);
      }
    } else if(amountOfBeds) {
      messages = `${amountOfBeds} ` + this.checkBeds(amountOfBeds);
      if(amountOfBathrooms) {
        messages += `, ${amountOfBathrooms} ` + this.checkBathrooms(amountOfBathrooms);
      }
    } else if(amountOfBathrooms) {
      messages = `${amountOfBathrooms} ` + this.checkBathrooms(amountOfBathrooms);
    } else {
      messages = `Выбирите удобства`
    }
    this.dropdownAreaOfPlaceholder.innerHTML = messages;
  }
  checkBedrooms(amountOfBedrooms) {
    if(amountOfBedrooms === 1) {
      return 'спальня';
    }
    if(amountOfBedrooms > 1 && amountOfBedrooms < 5) {
      return 'спальни';
    }
    if(amountOfBedrooms > 4) {
      return 'спален';
    }
  }
  checkBeds(amountOfBeds) {
    if(amountOfBeds === 1) {
      return 'кровать';
    }
    if(amountOfBeds > 1 && amountOfBeds < 5) {
      return 'кровати';
    }
    if(amountOfBeds > 4) {
      return 'кроватей';
    }
  }
  checkBathrooms(amountOfBathrooms) {
    if(amountOfBathrooms === 1) {
      return 'ванная';
    }
    if(amountOfBathrooms > 1) {
      return 'ванных';
    }
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

const dropdownBedroom = new DropdownBedroom();
dropdownBedroom.dropdownInit();
