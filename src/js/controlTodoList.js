import TodoList from './elements/TodoList';

const controlTodoList = () => {
  const todoList = new TodoList().createTodoList();
  const listDisplay = todoList.drawTodoList();
  document.body.appendChild(listDisplay);
};

export default controlTodoList;
