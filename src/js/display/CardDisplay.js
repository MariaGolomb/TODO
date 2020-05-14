// import Button from '../elements/Button';

class CardDisplay {
  constructor(card) {
    this.card = card;
  }

  drawCard() {
    const card = document.createElement('div');
    const textarea = document.createElement('textarea');
    textarea.classList.add('card');
    if (this.card.content) {
      textarea.value = this.card.content;
    } else {
      textarea.placeholder = 'Enter a title for this card...';
    }
    card.appendChild(textarea);
    return card;
  }
}

export default CardDisplay;
