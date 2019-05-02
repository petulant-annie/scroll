import * as React from 'react';
import * as ReactDOM from 'react-dom';

import list from './list.json';

interface IList {
  list: JSX.Element[];
}

interface IItem {
  avatar: string;
  name: string;
  email: string;
  registration: number;
}

class Scroll extends React.Component<IList> {
  containerRef: React.RefObject<HTMLDivElement>;
  list: JSX.Element[];
  duplicateItem: any;

  constructor(props: IList) {
    super(props);
    this.list = props.list;
    this.containerRef = React.createRef();
    this.duplicateItem = [];
  }

  handleScroll = (e: React.UIEvent) => {
    e.preventDefault();
    const current = this.containerRef.current;
    if (current.clientHeight + current.scrollTop >= current.scrollHeight) {
      for (let i = 0; i < this.list.length; i += 1) {
        this.duplicateItem.push(this.createItems[i]);
      }
      console.log(this.duplicateItem);
    }
  }

  createButtons() {
    return (
      <div className="button-bar">
        <button>Add</button>
        <button>Remove</button>
      </div>
    );
  }

  createItems = (this.props.list as []).map((item: IItem, index: number) => (
    <div key={index} className="li">
      <img src={item.avatar} alt="ava" />
      <p>{item.name}</p>
      <p>{item.email}</p>
      {this.createButtons()}
    </div>
  ));

  render() {
    return (
      <div
        className="listContainer"
        onScroll={this.handleScroll}
        ref={this.containerRef}
      >
        {this.createItems}
        {this.duplicateItem}
      </div>
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
