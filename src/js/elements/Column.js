import ColumnData from './elementsData/ColumnData';
import Button from './Button';
import Card from './Card';

import {
  COLUMN_ID_PREF,
  ADD_CARD_BUTTON_LABEL,
  ADD_CARD_BUTTON_ID_PREF,
  CARD_BLOCK_ID_PREF,
  COLUMN_TITLE_ID_PREF,
  DELETE_COLUMN_BUTTON_ID_PREF,
} from '../../constants';

import { dragAndDropOnColumn } from './dragAndDrop';

class Column extends ColumnData {
  drawColumn(cardsData) {
    const column = document.createElement('div');
    column.classList.add('column');
    // column.classList.add('show');
    column.id = `${COLUMN_ID_PREF}${this.id}`;
    const columnHeader = document.createElement('div');
    columnHeader.classList.add('column--header');

    const columnBottom = document.createElement('div');
    columnBottom.classList.add('column--bottom');

    const cardBlock = document.createElement('div');
    cardBlock.id = `${CARD_BLOCK_ID_PREF}${this.id}`;
    cardBlock.classList.add('column--cards');
    dragAndDropOnColumn(cardBlock, cardsData); // /

    const addButton = new Button(`${ADD_CARD_BUTTON_ID_PREF}${this.id}`, ADD_CARD_BUTTON_LABEL).createButton();
    const deleteButton = new Button(`${DELETE_COLUMN_BUTTON_ID_PREF}${this.id}`, 'X').createButton();

    const titleInput = document.createElement('input');
    titleInput.value = this.title;
    titleInput.id = `${COLUMN_TITLE_ID_PREF}${this.id}`;

    if (cardsData) {
      cardsData.cards.forEach(card => {
        if (card.columnId === this.id) {
          const cardDisplay = new Card().createCardByData(card).drawCard();
          // dragAndDropCard(cardDisplay);
          cardBlock.appendChild(cardDisplay);
        }
      });
    }

    // this.cardBlock = cardBlock;

    columnHeader.appendChild(titleInput);
    columnHeader.appendChild(deleteButton);
    columnBottom.appendChild(addButton);
    column.appendChild(columnHeader);
    column.appendChild(cardBlock);
    column.appendChild(columnBottom);
    return column;
  }
}

export default Column;
