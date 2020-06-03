const deleteItem = id => {
  const elem = document.getElementById(id);
  if (elem.classList.contains('show')) {
    elem.classList.remove('show');
  }

  elem.classList.add('deleteItem');
};

export default deleteItem;
