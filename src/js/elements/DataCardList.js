import CardList from './CardList';
import DataCard from './DataCard';

class DataCardList extends CardList {
  constructor(data) {
    super(data.todoListId);
    this.id = data.id;
    this.cards = data.cards.map(card => new DataCard(card));
  }
}

export default DataCardList;
