class Dropdown {
  constructor () {
    this.dropdownShowInfo = document.querySelector('.dropdown__show-info');
    this.choiceGuests = document.querySelector('.choice-guests');
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
    } else if (this.choiceGuests.classList.contains('show')) {
      this.dropdownShowInfo.classList.add('dropdown__show-info')
      this.dropdownShowInfo.classList.remove('dropdown__show-info_active')
      this.choiceGuests.classList.remove('show');
      this.choiceGuests.classList.add('hide');
    }
  }
}

const dropdown = new Dropdown();
dropdown.dropdownInit();

export default dropdown;
