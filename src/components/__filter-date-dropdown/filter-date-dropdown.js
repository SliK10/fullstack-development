import './__air-datepicker/js/datepicker'

$('.filter-date-airdatepicker').datepicker({
  minDate: new Date,
  range: true,
  clearButton: true,
  applyButton: true,
  multipleDatesSeparator: ' - ',
  dateFormat: 'dd M',
  onSelect: function(formattedDate, date, inst) {
    if (formattedDate) {
      $('.filter-date-dropdown__area-of-placeholder').text(formattedDate)
    }
  }
}).data('datepicker')

let datepicker = document.getElementById('air-datepicker-filter-date')

datepicker.addEventListener('click', function(e) {
  if (e.target.dataset.action === 'apply') {
    datepicker.hidden = !datepicker.hidden
  }
})
