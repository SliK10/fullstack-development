let datepicker = $('.date-dropdown__area-of-placeholder').datepicker({
  minDate: new Date(),
  dateFormat: "dd.mm.yyyy"
})
let button = document.querySelector('.date-dropdown__show-info')
button.addEventListener('click', datepicker.hide)
