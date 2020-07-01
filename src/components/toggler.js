//- Переключатель

class Toggler {

  constructor() {
    this.oldElem;
  }

  init() {
    document.addEventListener('mousedown', function(event) {
      let elemWithDataAttr = event.target.closest("div[data-toggle-id]");

      let coca = event.target.closest('div[id]')

      if (!elemWithDataAttr) {
        if (this.oldElem == coca) {
          return;
        } else if ((this.oldElem !== coca) && !elemWithDataAttr) {
          this.oldElem.hidden = true;
          return;
        }
      }

      let id = elemWithDataAttr.dataset.toggleId;

      if (!id) return;
      let elem = document.getElementById(id);

      elem.hidden = !elem.hidden;

      if (!this.oldElem) {
        this.oldElem = elem;
      } else if (this.oldElem.id === elem.id) {
        return;
      } else if (this.oldElem.id !== elem.id) {
        if(!this.oldElem.hidden) {
          this.oldElem.hidden = !this.oldElem.hidden;
        }
        this.oldElem = elem;
      }
    })
  }
}

let toggler = new Toggler();

toggler.init();
