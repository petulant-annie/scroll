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
  state: { itemAmount: number, list: any };

  constructor(amount: IProps) {
    super(amount);
    this.state = {
      itemAmount: this.props.amount,
      list: [],
    };
    // this.list = [];
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
      this.setState({ list: this.state.list.concat(this.item()) });
    }

    console.log('ll');
    console.log(this.state.list);
  }

  getCards = () => {
    this.createItems();
  }

  render() {

    console.log(this.state.list);

    return (
      <Scroll
        list={this.state.list}
        loadMore={this.getCards}
      />
    );
  }

}

ReactDOM.render(<List amount={5} />, document.getElementById('root'));
