import TodoList from './elements/TodoList';

const controlTodoList = async () => {
  const todoList = await new TodoList().createTodoList();
  const listDisplay = todoList.drawTodoList();
  document.body.appendChild(listDisplay);
};

export default controlTodoList;
