import Button from './Button';

class CardDisplay {
  constructor(title = 'New Card') {
    this.id = 1; // fix
    this.title = title;
  }

  drawCard() {
    const card = document.createElement('div');
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter a title for this card...';
    card.appendChild(textarea);
    return card;
  }
}

export default CardDisplay;
