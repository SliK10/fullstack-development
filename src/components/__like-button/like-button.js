class Like {
  constructor() {
    this.toggle = document.querySelector('.like-button__toggle')
    this.amount = document.querySelector('.like-button__amount')
  }
  init() {
    this.toggle.addEventListener('click', this.liked.bind(this))
  }
  liked(e) {
    e.preventDefault();
    if (this.toggle.classList.contains('like-active')) {
      this.toggle.classList.remove('like-active')
      let reduceAmount = +this.amount.innerHTML - 1;
      this.amount.innerHTML = reduceAmount;
    } else {
      this.toggle.classList.add('like-active');
      let increaseAmount = +this.amount.innerHTML + 1;
      this.amount.innerHTML = increaseAmount;
    }
  }
}

let like = new Like();
like.init();
