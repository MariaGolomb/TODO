import { URL } from '../../constants';

export const formatTodoList = todoList => {
  const { _id: id, userId, columns: columnsToFormat } = todoList;
  const columns = columnsToFormat.map(column => {
    const { _id: id, title } = column;
    return { id, title };
  });

  return { id, userId, columns };
};

export const formatCardList = cardList => {
  const { _id: id, todoListId, cards: cardsToFormat } = cardList;
  const cards = cardsToFormat.map(card => {
    const { _id: id, content, columnId } = card;
    return { id, content, columnId };
  });

  return { id, todoListId, cards };
};

export const formatData = responseData => {
  return {
    todoList: formatTodoList(responseData.todoList),
    cardList: formatCardList(responseData.cardList),
  };
};

/*
export const getTodoListData = async todoListId => {
  try {
    const response = await fetch(`${URL}/list/${todoListId}`);
    if (response.ok) {
      const data = await response.json();

      return formatData(data);
    }
    return false;
  } catch (error) {
    //
  }
};

export const createNewTodoList = async todoList => {
  try {
    const response = await fetch(`${URL}/list`, {
      method: 'POST'
    });
    if (response.ok) {
      const updatedData = await response.json();
      return formatData(updatedData);
    }
    return false;
  } catch (error) {
    //
  }
};
*/

// export default formatData;
