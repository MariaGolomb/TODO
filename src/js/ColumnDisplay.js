import Button from './Button';
import CardDisplay from './CardDisplay';

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

    const addButton = new Button('Add list', this.addCard).createButton();
    const titleInput = document.createElement('input');
    titleInput.value = this.column.title;

    columnHeader.appendChild(titleInput);
    columnBottom.appendChild(addButton);

    column.appendChild(columnHeader);
    column.appendChild(cardBlock);
    column.appendChild(columnBottom);
    this.cardBlock = cardBlock;
    return column;
  }

  addCard() {
    const card = new CardDisplay().drawCard();
    document.body.appendChild(card);

    // this.cardBlock.appendChild(card);
  }
}

export default ColumnDisplay;
