import { URL } from '../../../constants';
import { formatData } from '../../helpers/formatResponseData';

class ColumnData {
  constructor() {
    this.id = undefined;
    this.title = undefined;
  }

  async createNewColumn(todoList) {
    try {
      const response = await fetch(`${URL}/list/${todoList.id}/column`, {
        method: 'POST',
      });

      if (response.ok) {
        const responseData = await response.json();
        const data = formatData(responseData);
        const newColumnData = data.todoList.columns[data.todoList.columns.length - 1];
        return this.createColumnByData(newColumnData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  createColumnByData(data) {
    this.id = data.id;
    this.title = data.title;
    return this;
  }

  setTitle(data) {
    this.title = data;
    return this;
  }

  async setTitleDB(todoListId) {
    try {
      const { id: _id, title } = this;
      const toSend = JSON.stringify({ _id, title });
      const response = await fetch(`${URL}/list/${todoListId}/column`, {
        method: 'PUT',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: toSend,
      });

      if (response.ok) {
        // const data = await response.json();
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default ColumnData;
