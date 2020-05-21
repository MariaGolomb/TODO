import Button from '../elements/Button';
import drawCard from './drawCard';
import { setCardsLS } from '../controlHelpers';

import {
  COLUMN_ID_PREF,
  ADD_CARD_BUTTON_LABEL,
  ADD_CARD_BUTTON_ID_PREF,
  CARD_BLOCK_ID_PREF,
  COLUMN_TITLE_ID_PREF,
  DELETE_COLUMN_BUTTON_ID_PREF,
  CARD_ID_PREF,
} from '../../constants';

let draggedCard;

const dragAndDropCard = card => {
  function dragStart() {
    draggedCard = card;
    this.classList.add('hold');
  }

  function dragEnd() {
    this.classList.remove('hold');
  }

  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
};

const dragAndDropOnColumn = (cardBlock, cardsData) => {
  function dragOver(event) {
    event.preventDefault();
  }

  function dragEnter(event) {
    event.preventDefault();
    this.classList.add('active');
  }

  function dragLeave() {
    this.classList.remove('active');
  }

  function updateCards(draggedCurdId, columnId) {
    const arrOfCards = cardsData.cards;
    arrOfCards.find(card => card.id === draggedCurdId).columnId = columnId;
    setCardsLS(cardsData);
  }

  function dragDrop() {
    this.appendChild(draggedCard);
    this.classList.remove('active');
    const draggedCurdId = draggedCard.id.slice(CARD_ID_PREF.length);
    const columnId = this.id.slice(CARD_BLOCK_ID_PREF.length);
    updateCards(draggedCurdId, columnId);
  }

  cardBlock.addEventListener('dragover', dragOver);
  cardBlock.addEventListener('dragenter', dragEnter);
  cardBlock.addEventListener('dragleave', dragLeave);
  cardBlock.addEventListener('drop', dragDrop);
};

const drawColumn = (columnData, cardsData) => {
  const column = document.createElement('div');
  column.classList.add('column');
  column.id = `${COLUMN_ID_PREF}${columnData.id}`;
  const columnHeader = document.createElement('div');
  columnHeader.classList.add('column--header');

  const columnBottom = document.createElement('div');
  columnBottom.classList.add('column--bottom');

  const cardBlock = document.createElement('div');
  cardBlock.id = `${CARD_BLOCK_ID_PREF}${columnData.id}`;
  cardBlock.classList.add('column--cards');
  dragAndDropOnColumn(cardBlock, cardsData);

  const addButton = new Button(`${ADD_CARD_BUTTON_ID_PREF}${columnData.id}`, ADD_CARD_BUTTON_LABEL).createButton();
  const deleteButton = new Button(`${DELETE_COLUMN_BUTTON_ID_PREF}${columnData.id}`, 'X').createButton();

  const titleInput = document.createElement('input');
  titleInput.value = columnData.title;
  titleInput.id = `${COLUMN_TITLE_ID_PREF}${columnData.id}`;

  if (cardsData) {
    cardsData.cards.forEach(card => {
      if (card.columnId === columnData.id) {
        const cardDisplay = drawCard(card);
        dragAndDropCard(cardDisplay);
        cardBlock.appendChild(cardDisplay);
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
