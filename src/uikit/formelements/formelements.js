import './formelements.scss'
import '../../components/__dropdown/dropdown.js';
import '../../components/__air-datepicker/js/datepicker.js';
import '../../components/__date-dropdown/date-dropdown';
import '../../components/__filter-date-dropdown/filter-date-dropdown';
import '../../components/__dropdown-bedroom/dropdown-bedroom';
import '../../components/__expandable-checkbox-list/expandabel-checkbox-list'
// import '../../components/__like-button/like-button'
import '../../components/__range-slider/ion-rangeslider/ion.rangeSlider'
import '../../components/__range-slider/range-slider'
import '../../components/__review/review'



//- Переключатель

let oldElem = '';

document.addEventListener('click', function(event) {
  let elemWithDataAttr = event.target.closest("div[data-toggle-id]");

  if (!elemWithDataAttr) return;

  let id = elemWithDataAttr.dataset.toggleId;

  if (!id) return;
  let elem = document.getElementById(id);

  elem.hidden = !elem.hidden;

  if (oldElem === '') {
    oldElem = elem;
  }
  else if (oldElem.id === elem.id) return;

  else if (oldElem.id !== elem.id) {
    if(!oldElem.hidden) {
      oldElem.hidden = !oldElem.hidden;
    }
    oldElem = elem;
  }
})
