import TodoList from './elements/TodoList';
import Loader from './elements/Loader';

const controlTodoList = async () => {
  const loader = new Loader();
  document.body.appendChild(loader.init());
  const todoList = await new TodoList().createTodoList();
  const listDisplay = todoList.drawTodoList();
  document.body.appendChild(listDisplay);
  loader.hide();
};

export default controlTodoList;
