import Button from './Button';
import CardDisplay from './CardDisplay';

class ColumnDisplay {
  constructor(column) {
    this.column = column;
  }

  drawColumn() {
    const column = document.createElement('div');
    const cardBlock = document.createElement('div');
    const addButton = new Button('Add list', this.addCard).createButton();
    const titleInput = document.createElement('input');
    titleInput.value = this.column.title;
    column.appendChild(titleInput);
    column.appendChild(cardBlock);
    column.appendChild(addButton);
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
