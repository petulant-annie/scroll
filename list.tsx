import * as React from 'react';
import * as ReactDOM from 'react-dom';
import faker from 'faker';
import uuidv1 from 'uuid/v1';

const Promise = window.Promise;

import { Scroll } from './scroll';

interface IProps {
  amount: number;
}

export default class List extends React.Component<IProps> {
  list: Object[];
  state: {
    list: Object[]
  };

  constructor(amount: IProps) {
    super(amount);
    this.state = {
      list: []
    };
  }

  item = () => {
    const key = uuidv1();
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const email = faker.internet.email();

    return ({ key, avatar, name, email });
  }

  createItems = async () => {
      for (let i = 0; i < this.props.amount; i += 1) {
        this.setState(prevState =>
          ({ list: prevState.list.concat(this.item()), isLoad: false }));
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
