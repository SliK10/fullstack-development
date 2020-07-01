import './landing-page.scss'
import '../../components/header/header'
import '../../components/search-room/search-room'
import '../../components/toggler'

class SearchRoom {
  constructor () {
    this.searchRoom = document.querySelector('.search-room')
    this.arrivalDate = document.querySelector('.arrival')
    this.departureDate = document.querySelector('.departure')
  }

  init () {
    this.searchRoom.addEventListener('click', function(e) {
      let elem = e.target

      if (elem.dataset.action === 'apply') {
        return;
      }
      if (elem.dataset.action === 'clear') {

        this.arrivalDate.innerHTML = 'ДД.ММ.ГГГГ';
        this.departureDate.innerHTML = 'ДД.ММ.ГГГГ';
      }
      if (elem.dataset.role === 'search-room') {
        //- Сюда можно добавить функцию перехода на другую страницу
        return;
      }
    }.bind(this))
  }
}

let searchRoom = new SearchRoom();

searchRoom.init();
