import Button from '../elements/Button';
import { ADD_COLUMN_BUTTON_LABEL, ADD_COLUMN_BUTTON_ID } from '../../constants';
import drawColumn from './drawColumn';

const drawTodoList = (todoList, cardList) => {
  const fragment = document.createDocumentFragment();

  if (todoList) {
    todoList.columns.forEach(column => {
      const columnDisplay = drawColumn(column, cardList);
      fragment.appendChild(columnDisplay);
    });
  }

  const addColumnButton = new Button(ADD_COLUMN_BUTTON_ID, ADD_COLUMN_BUTTON_LABEL).createButton();
  fragment.appendChild(addColumnButton);
  return fragment;
};

export default drawTodoList;
