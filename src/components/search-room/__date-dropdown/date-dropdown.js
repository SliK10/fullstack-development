import './__air-datepicker/js/datepicker'

let airdatepicker = $('.datepicker-here').datepicker({
  minDate: new Date(),
  dateFormat: "dd.mm.yyyy",
  showEvent: 'focus',
  range: true,
  clearButton: true,
  applyButton: true,
  onSelect: function(formattedDate, date, inst) {
    let outputDate = formattedDate.split(',');
    if (outputDate[0]) {
      $('.arrival').text(outputDate[0])
    }
    if (outputDate[1]) {
      $('.departure').text(outputDate[1])
    }
  }
}).data('datepicker')

let dateDropdownDatepicker = document.getElementById('air-datepicker')

dateDropdownDatepicker.addEventListener('click', function(e) {
  if (e.target.dataset.action === 'apply' && e.target.closest('#air-datepicker')) {
    dateDropdownDatepicker.hidden = !dateDropdownDatepicker.hidden
  }
})
