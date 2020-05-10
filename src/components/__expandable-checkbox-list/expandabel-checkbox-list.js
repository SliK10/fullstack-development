class ExpandableCheckboxList {
  constructor() {
    this.select = document.querySelector('.expandable-checkbox-list__select')
    this.checkboxList = document.querySelector('.checkbox-list')
  }
  init(){
    this.select.addEventListener('click', this.showAndHideList.bind(this))
  }
  showAndHideList() {
    if (this.checkboxList.classList.contains('hide')) {
      this.checkboxList.classList.remove('hide')
      this.select.classList.add('expandable-checkbox-list__select_active')
      this.select.classList.remove('expandable-checkbox-list__select')
    } else {
      this.checkboxList.classList.add('hide')
      this.select.classList.add('expandable-checkbox-list__select')
      this.select.classList.remove('expandable-checkbox-list__select_active')
    }
  }
}

const expandableCheckboxList = new ExpandableCheckboxList();

expandableCheckboxList.init();
