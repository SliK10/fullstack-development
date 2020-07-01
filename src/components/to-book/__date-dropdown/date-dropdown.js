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
    outputDate[0] ? $('.arrival').text(outputDate[0]) : $('.arrival').text('ДД.ММ.ГГГГ');
    outputDate[1] ? $('.departure').text(outputDate[1]) : $('.departure').text('ДД.ММ.ГГГГ');
  }
}).data('datepicker')

$('.date-dropdown__show-info').click(function() {
  $('.datepicker-here').toggle();
});
