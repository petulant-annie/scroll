import faker from 'faker';
import uuidv1 from 'uuid/v1';

class List {
  list: Object[];
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
    this.list = [];
  }

  item = () => {
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const email = faker.internet.email();
    const id = uuidv1();

    return ({ id, avatar, name, email });
  }

  createItems() {
    for (let i = 0; i < this.amount; i += 1) {
      this.list.push(this.item());
    }
  }

  getCards() {
    this.createItems();

    return this.list;
  }
}

export const list = new List(300);
