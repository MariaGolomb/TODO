import { CARD_CONTENT_ID_PREF, CARD_ID_PREF, DELETE_CARD_BUTTON_ID_PREF } from '../../constants';
import Button from '../elements/Button';

class CardDisplay {
  constructor(card) {
    this.card = card;
  }

  drawCard() {
    const card = document.createElement('div');
    card.id = `${CARD_ID_PREF}${this.card.id}`;

    const deleteButton = new Button(`${DELETE_CARD_BUTTON_ID_PREF}${this.card.id}`, 'x').createButton();

    const textarea = document.createElement('textarea');
    textarea.classList.add('card');
    textarea.id = `${CARD_CONTENT_ID_PREF}${this.card.id}`;
    if (this.card.content) {
      textarea.value = this.card.content;
    } else {
      textarea.placeholder = 'Enter a title for this card...';
    }
    card.appendChild(textarea);
    card.appendChild(deleteButton);
    return card;
  }
}

export default CardDisplay;
