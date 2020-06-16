import { TODO_LIST_LOCAL_STORAGE, CARD_LIST_LOCAL_STORAGE } from '../../constants';

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
