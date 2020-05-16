import Button from '../elements/Button';
import { ADD_COLUMN_BUTTON_LABEL, ADD_COLUMN_BUTTON_ID, CARD_BLOCK_ID_PREF } from '../../constants';
import drawColumn from './drawColumn';
import drawCard from './drawCard';

const drawTodoList = (todoList, cardList) => {
  const fragment = document.createDocumentFragment();

  if (todoList) {
    todoList.columns.forEach(column => {
      const columnDisplay = drawColumn(column, cardList);
      fragment.appendChild(columnDisplay);
    });
  }

  // columnId
  /*
  if (cardList) {
    const arrOfCards = cardList.cards;
    arrOfCards.sort((a, b) => (a.columnId > b.columnId ? 1 : -1));
    console.log('arrOfCards');
    console.log(arrOfCards);

    arrOfCards.reduce((prevCard, currCurd) => {
      let cardsFragment = document.createDocumentFragment();
      if (prevCard.columnId === currCurd.columnId) {
        cardsFragment.appendChild(prevCard);
      } else {
        document.getElementById(`${CARD_BLOCK_ID_PREF}${prevCard.columnId}`).appendChild(cardsFragment);
        cardsFragment = [];
      }
      return 1;
    });

    // cardList.cards.
  }
*/
  const addColumnButton = new Button(ADD_COLUMN_BUTTON_ID, ADD_COLUMN_BUTTON_LABEL).createButton();
  fragment.appendChild(addColumnButton);
  return fragment;
};

export default drawTodoList;
