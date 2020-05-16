import { TODO_LIST_LOCAL_STORAGE, CARD_LIST_LOCAL_STORAGE } from '../constants';
import TodoList from './elements/TodoList';
import DataTodoList from './elements/DataTodoList';
import CardList from './elements/CardList';
import DataCardList from './elements/DataCardList';

export const setTodoListLS = todoList => {
  localStorage.setItem(TODO_LIST_LOCAL_STORAGE, JSON.stringify(todoList));
};

export const setCardsLS = cardList => {
  localStorage.setItem(CARD_LIST_LOCAL_STORAGE, JSON.stringify(cardList));
};

const getItemLS = key => {
  const list = localStorage.getItem(key);
  if (list) {
    return JSON.parse(list);
  }
  return false;
};
export const getTodoListLS = () => getItemLS(TODO_LIST_LOCAL_STORAGE);

export const getCardListLS = () => getItemLS(CARD_LIST_LOCAL_STORAGE);

const createList = (getDataLS, BaseConstructor, DataConstructor, setToLS) => {
  let list = getDataLS(); // getTodoListLS();
  if (!list) {
    list = new BaseConstructor(); // new TodoList();
    setToLS(list);
  } else {
    console.log('list');
    console.log(list);
    list = new DataConstructor(list);
  }
  return list;
};

export const createTodoList = () => createList(getTodoListLS, TodoList, DataTodoList, setTodoListLS);
export const createCardList = id => createList(getCardListLS, CardList.bind(null, id), DataCardList, setCardsLS);
