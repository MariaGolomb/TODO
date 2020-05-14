class Button {
  constructor(id, title, ...onClickFunction) {
    this.id = id;
    this.title = title;
    this.onClickFunction = onClickFunction;
  }

  createButton() {
    const button = document.createElement('button');
    button.classList.add('button');
    button.id = this.id;
    button.innerText = this.title;
    if (this.onClickFunction.length > 0) {
      button.addEventListener('click', () => {
        this.onClickFunction.map(func => func());
      });
    }

    return button;
  }
}

export default Button;
