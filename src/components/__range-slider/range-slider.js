let slider = $(".js-range-slider").ionRangeSlider({
  skin: "round",
  type: "double",
  min: 700,
  max: 15100,
  from: 5000,
  to: 10000,
  grid: false,
  step: 1,
  hide_min_max: true,
  hide_from_to: true,

  onChange: function(data) {
    $('.range-slider__from-to').text(`${data.from_pretty}₽ - ${data.to_pretty}₽`)
  }
});
