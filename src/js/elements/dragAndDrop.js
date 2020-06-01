import { setCardsLS } from '../controlHelpers';

import { CARD_BLOCK_ID_PREF, CARD_ID_PREF } from '../../constants';

let draggedCard;

export const dragAndDropCard = card => {
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

export const dragAndDropOnColumn = (cardBlock, cardsData) => {
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
