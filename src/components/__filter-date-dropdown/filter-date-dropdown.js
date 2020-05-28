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
    } else {
      $('.filter-date-dropdown__area-of-placeholder').text('19 авг - 23 авг')
    }
  }
}).data('datepicker')
$('.filter-date-dropdown__show-info').click(function() {
  $('.filter-date-airdatepicker').toggle();
})
