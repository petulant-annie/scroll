import * as React from 'react';
import * as ReactDOM from 'react-dom';
import uuidv1 from 'uuid/v1';

import { list } from './list';

interface IProps {
  list: Object[];
  defaultOnPage: number;
}

interface IItem {
  id: number;
  avatar: string;
  name: string;
  email: string;
}

class Scroll extends React.Component<IProps> {
  containerRef: React.RefObject<HTMLDivElement>;
  elemList: Object[];
  state: { itemAmount: number };

  constructor(props: IProps) {
    super(props);
    this.elemList = [];
    this.containerRef = React.createRef();
    this.state = {
      itemAmount: this.props.defaultOnPage,
    };
  }

  handleScroll = () => {
    const current = this.containerRef.current;

    if (current.clientHeight + current.scrollTop >= current.scrollHeight) {
      this.setState({ itemAmount: this.state.itemAmount += 1 });
    }
  }

  handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const position = e.currentTarget.getAttribute('data-id');
    const item = this.elemList.find(item => `${item.id}` === position);

    this.elemList.splice(this.elemList.indexOf(item), 1);
    this.setState({ itemAmount: this.state.itemAmount -= 1 });
  }

  createItems() {
    for (let i = this.elemList.length; i < this.state.itemAmount; i += 1) {
      if (this.props.list[i]) {
        this.elemList.push(this.props.list[this.elemList.length]);
      } else {
        this.elemList.push(
          { id: this.elemList.length });
      }
    }
  }

  render() {
    this.createItems();

    const list = this.elemList.map((item: IItem) => {
      return (
        <div key={item.id} className="li">
          <img src={item.avatar} alt="ava" />
          <p>{item.name}</p>
          <p>{item.email}</p>
          <button onClick={this.handleRemove} data-id={item.id}>Remove</button>
        </div>);
    },
    );

    return (
      <div
        className="listContainer"
        onScroll={this.handleScroll}
        ref={this.containerRef}
      >
        {list}
      </div>
    );
  }
}

const scroll = (
  <Scroll defaultOnPage={5} list={list.getCards()} />
);

ReactDOM.render(scroll, document.getElementById('root'));
