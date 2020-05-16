import Button from '../elements/Button';
import drawCard from './drawCard';

import {
  COLUMN_ID_PREF,
  ADD_CARD_BUTTON_LABEL,
  ADD_CARD_BUTTON_ID_PREF,
  CARD_BLOCK_ID_PREF,
  COLUMN_TITLE_ID_PREF,
  DELETE_COLUMN_BUTTON_ID_PREF,
} from '../../constants';

const drawColumn = (columnData, cardsData) => {
  const column = document.createElement('div');
  column.classList.add('column');
  column.id = `${COLUMN_ID_PREF}${columnData.id}`;
  const columnHeader = document.createElement('div');
  columnHeader.classList.add('column__header');

  const columnBottom = document.createElement('div');
  columnBottom.classList.add('column__bottom');

  const cardBlock = document.createElement('div');
  cardBlock.id = `${CARD_BLOCK_ID_PREF}${columnData.id}`;

  const addButton = new Button(`${ADD_CARD_BUTTON_ID_PREF}${columnData.id}`, ADD_CARD_BUTTON_LABEL).createButton();
  const deleteButton = new Button(`${DELETE_COLUMN_BUTTON_ID_PREF}${columnData.id}`, 'X').createButton();

  const titleInput = document.createElement('input');
  titleInput.value = columnData.title;
  titleInput.id = `${COLUMN_TITLE_ID_PREF}${columnData.id}`;

  if (cardsData) {
    cardsData.cards.forEach(card => {
      if (card.columnId === columnData.id) {
        cardBlock.appendChild(drawCard(card));
        // const cardDisplay = drawCard(card);
      }
    });
  }

  columnHeader.appendChild(titleInput);
  columnHeader.appendChild(deleteButton);
  columnBottom.appendChild(addButton);
  column.appendChild(columnHeader);
  column.appendChild(cardBlock);
  column.appendChild(columnBottom);
  return column;
};

export default drawColumn;
