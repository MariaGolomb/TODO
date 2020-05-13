import Button from './Button';
import { ADD_CARD_BUTTON_LABEL, ADD_CARD_BUTTON_ID_PREF } from '../constants';

class ColumnDisplay {
  constructor(column) {
    this.column = column;
  }

  drawColumn() {
    const column = document.createElement('div');
    column.classList.add('column');
    const columnHeader = document.createElement('div');
    columnHeader.classList.add('column__header');

    const columnBottom = document.createElement('div');
    columnBottom.classList.add('column__bottom');

    const cardBlock = document.createElement('div');

    const addButton = new Button(`${ADD_CARD_BUTTON_ID_PREF}${this.column.id}`, ADD_CARD_BUTTON_LABEL).createButton();

    const titleInput = document.createElement('input');
    titleInput.value = this.column.title;
    titleInput.addEventListener('change', event => {
      this.column.title = event.target.value;
    });

    columnHeader.appendChild(titleInput);
    columnBottom.appendChild(addButton);

    column.appendChild(columnHeader);
    column.appendChild(cardBlock);
    column.appendChild(columnBottom);
    this.cardBlock = cardBlock;
    return column;
  }
}

export default ColumnDisplay;
