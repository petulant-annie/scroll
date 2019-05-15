import * as React from 'react';
import faker from 'faker';
import uuidv1 from 'uuid/v1';

const Promise = window.Promise;

import { Scroll } from './scroll';

interface IProps {
  defaultOnPage: number;
}

export default class List extends React.Component<IProps> {
  list: Object[];
  state: {
    list: Object[],
    isLoad: boolean,
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoad: true,
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

  createItems = async () => {
    if (this.state.isLoad) {
      await this.setState(prevState =>
        ({ list: prevState.list, isLoad: false }));
      await new Promise((res: any) => setTimeout(res, 2000));
      for (let i = 0; i < this.props.defaultOnPage; i += 1) {
        await this.setState(prevState =>
          ({ list: prevState.list.concat(this.item()), isLoad: true }));
      }
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
