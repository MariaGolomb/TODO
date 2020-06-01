class DragAndDrop {
  constructor() {
    this.cards = document.querySelectorAll('.card');
    this.columns = document.querySelectorAll('.column--cards');
    this.draggedCard = null;
    this.addEventListener();
  }

  addEventListener() {
    this.columns.forEach(cardBlock => {
      cardBlock.addEventListener('dragover', this.dragOver);
      cardBlock.addEventListener('dragenter', this.dragEnter);
      cardBlock.addEventListener('dragleave', this.dragLeave);
      cardBlock.addEventListener('drop', this.dragDrop);
    });

    this.cards.forEach(card => {
      card.addEventListener('dragstart', this.dragStart);
      card.addEventListener('dragend', this.dragEnd);
    });
  }

  dragStart(event) {
    this.draggedCard = event.target;
    console.log(this.draggedCard);

    this.classList.add('hold');
  }

  dragEnd() {
    this.classList.remove('hold');
  }

  dragOver(event) {
    event.preventDefault();
  }

  dragEnter(event) {
    event.preventDefault();
    this.classList.add('active');
  }

  dragLeave() {
    this.classList.remove('active');
  }

  drop() {
    //  const container = document.querySelector('.box__dragabble');
    this.classList.remove('active');
    this.append(this.draggedCard);
  }

  static init() {
    return new this();
  }
}
export default DragAndDrop;

/*
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
*/
