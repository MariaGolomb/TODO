import { CARD_CONTENT_ID_PREF, CARD_ID_PREF, DELETE_CARD_BUTTON_ID_PREF } from '../../constants';
import Button from '../elements/Button';

const drawCard = cardData => {
  const card = document.createElement('div');
  card.id = `${CARD_ID_PREF}${cardData.id}`;

  const deleteButton = new Button(`${DELETE_CARD_BUTTON_ID_PREF}${cardData.id}`, 'x').createButton();

  const textarea = document.createElement('textarea');
  textarea.classList.add('card');
  textarea.id = `${CARD_CONTENT_ID_PREF}${cardData.id}`;
  if (cardData.content) {
    textarea.value = cardData.content;
  } else {
    textarea.placeholder = 'Enter a title for this card...';
  }
  card.appendChild(textarea);
  card.appendChild(deleteButton);
  return card;
};

export default drawCard;
