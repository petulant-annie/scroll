import * as React from 'react';
import * as ReactDOM from 'react-dom';
import faker from 'faker';
import uuidv1 from 'uuid/v1';

import { Scroll } from './scroll';

interface IProps {
  amount: number;
}

class List extends React.Component<IProps> {
  list: Object[];

  constructor(amount: IProps) {
    super(amount);
    this.list = [];
  }

  item = () => {
    const key = uuidv1();
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const email = faker.internet.email();

    return ({ key, avatar, name, email });
  }

  createItems() {
    for (let i = 0; i < this.props.amount; i += 1) {
      this.list.push(this.item());
    }
  }

  getCards() {
    this.createItems();

    return this.list;
  }

  render() {
    return (
      <Scroll
        list={this.list}
        loadMore={this.getCards()}
      />
    );
  }

}

ReactDOM.render(<List amount={5} />, document.getElementById('root'));
