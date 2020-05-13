import './scss/style.scss';

import TodoListDisplay from './js/TodoListDisplay';
import Card from './js/Card';
import Column from './js/Column';
import TodoList from './js/TodoList';

window.addEventListener('load', () => {
  //
  const todoList = new TodoList();
  const addColumnButton = new TodoListDisplay(todoList).createButton();

  /*
  const arrOfColumns = [];
  const column = new Column();
  arrOfColumns.push(column);
  const column1 = new Column();
  arrOfColumns.push(column1);
  const column2 = new Column();
  arrOfColumns.push(column2);

  const card = new Card('tratata', column.id);
  const card1 = new Card('tra', column.id);
  const card2 = new Card('taata', column1.id);

  console.log(card);
  console.log(card1);
  console.log(card2);

  console.log('================');
  const todoList = new TodoList(arrOfColumns);
  console.log(todoList);
*/
  //
});
