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
    isLoading: boolean,
  };
  containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: true,
      list: [],
    };
    this.containerRef = React.createRef();
  }

  item = () => {
    const key = uuidv1();
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const email = faker.internet.email();

    return ({ key, avatar, name, email });
  }

  createItems = async () => {
    const listItems: Object[] = [];

    for (let i = 0; i < this.props.defaultOnPage; i += 1) {
      listItems.push(this.item());
    }

    if (this.state.isLoading) {
      await this.setState(prevState =>
        ({ list: prevState.list, isLoading: false }));
      await new Promise((res: any) => setTimeout(res, 2000));
      await this.setState(prevState =>
        ({ list: prevState.list.concat(listItems), isLoading: true }));
    }

  }

  checkScroll = () => {
    const current = this.containerRef.current;
    if (current.scrollHeight === current.clientHeight) {
      this.createItems();
    }
  }

  componentDidMount() {
    this.checkScroll();
    window.addEventListener('resize', this.checkScroll);
  }

  componentDidUpdate() {
    this.checkScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkScroll);
  }

  render() {
    return (
      <Scroll
        isLoading={this.state.isLoading}
        list={this.state.list}
        loadMore={this.createItems}
        containerRef={this.containerRef}
      />
    );
  }
}
