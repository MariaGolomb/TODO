import Button from '../elements/Button';
import {
  COLUMN_ID_PREF,
  ADD_CARD_BUTTON_LABEL,
  ADD_CARD_BUTTON_ID_PREF,
  CARD_BLOCK_ID_PREF,
  COLUMN_TITLE_ID_PREF,
  DELETE_COLUMN_BUTTON_ID_PREF,
} from '../../constants';

class ColumnDisplay {
  constructor(column) {
    this.column = column;
  }

  drawColumn() {
    const column = document.createElement('div');
    column.classList.add('column');
    column.id = `${COLUMN_ID_PREF}${this.column.id}`;
    const columnHeader = document.createElement('div');
    columnHeader.classList.add('column__header');

    const columnBottom = document.createElement('div');
    columnBottom.classList.add('column__bottom');

    const cardBlock = document.createElement('div');
    cardBlock.id = `${CARD_BLOCK_ID_PREF}${this.column.id}`;

    const addButton = new Button(`${ADD_CARD_BUTTON_ID_PREF}${this.column.id}`, ADD_CARD_BUTTON_LABEL).createButton();
    /*
    const deleteButton = document.createElement('div');
    deleteButton.innerText = 'X';
    deleteButton.id = `${DELETE_COLUMN_BUTTON_ID_PREF}${this.column.id}`;
*/
    const deleteButton = new Button(`${DELETE_COLUMN_BUTTON_ID_PREF}${this.column.id}`, 'X').createButton();

    const titleInput = document.createElement('input');
    titleInput.value = this.column.title;
    titleInput.id = `${COLUMN_TITLE_ID_PREF}${this.column.id}`;
    columnHeader.appendChild(titleInput);
    columnHeader.appendChild(deleteButton);
    columnBottom.appendChild(addButton);
    column.appendChild(columnHeader);
    column.appendChild(cardBlock);
    column.appendChild(columnBottom);
    this.cardBlock = cardBlock;
    return column;
  }
}

export default ColumnDisplay;
