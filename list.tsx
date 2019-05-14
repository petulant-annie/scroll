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
  state: { itemAmount: number, list: Object[] };

  constructor(amount: IProps) {
    super(amount);
    this.state = {
      itemAmount: this.props.amount,
      list: [],
    };
  }

  item = () => {
    const key = uuidv1();
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const email = faker.internet.email();

    return ({ key, avatar, name, email });
  }

  createItems = () => {
    for (let i = 0; i < this.props.amount; i += 1) {
      this.setState((prevState, _) => ({ list: prevState.list.concat(this.item()) }));
    }
  }

  componentDidMount() {
    this.createItems();
  }

  render() {
    return (
        <Scroll
          list={this.state.list}
          loadMore={this.createItems}
        />
    );
  }

}

ReactDOM.render(<List amount={5} />, document.getElementById('root'));
