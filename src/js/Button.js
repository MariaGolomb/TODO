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
    button.addEventListener('click', () => {
      this.onClickFunction.map(func => func());
    });
    return button;
  }
}

export default Button;
