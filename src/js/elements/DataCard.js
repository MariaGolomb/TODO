import Card from './Card';

class DataCard extends Card {
  constructor(data) {
    super(data.columnId);
    this.content = data.content;
    this.id = data.id;
  }
}

export default DataCard;
