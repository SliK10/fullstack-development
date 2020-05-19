class Like {
  constructor() {
    this.button;
    document.addEventListener('click', this.liked.bind(this))
  }
  liked(e) {
    if (e.target.parentElement.classList.contains('like-active')) {
      this.button = e.target.parentElement;
      this.button.classList.remove('like-active')
      let reduceAmount = +this.button.lastChild.innerHTML - 1;
      this.button.lastChild.innerHTML = reduceAmount;
    } else if (e.target.parentElement.classList.contains('like-button__toggle')) {
      this.button = e.target.parentElement;
      this.button.classList.add('like-active');
      let increaseAmount = +this.button.lastChild.innerHTML + 1;
      this.button.lastChild.innerHTML = increaseAmount;
    }
  }
}

let like = new Like();
