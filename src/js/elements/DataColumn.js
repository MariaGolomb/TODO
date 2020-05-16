import Column from './Column';

class DataColumn extends Column {
  constructor(data) {
    super(data.title);
    this.id = data.id;
  }
}

export default DataColumn;
