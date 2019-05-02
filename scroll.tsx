import * as React from 'react';
import * as ReactDOM from 'react-dom';

import list from './list.json';

interface IList {
  list: JSX.Element[];
}

class Scroll extends React.Component<IList> {
  containerRef: React.RefObject<HTMLDivElement>;
  list: JSX.Element[];
  duplicateItem: [];
  constructor(props: IList) {
    super(props);
    this.list = props.list;
    this.duplicateItem = [];
    this.containerRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const current = this.containerRef.current;
    if (current.clientHeight + current.scrollTop <= current.scrollHeight) {
      const elem: JSX.Element[] = this.list.map((item, index) =>
        (
          <div key={index} className="li">
            <img src={item.avatar} alt="ava" />
            <p>{item.name}</p>
            <p>{item.email}</p>
            {this.createButtons()}
          </div>
        ));
      for (let i = 0; i < this.list.length; i += 1) {
        this.duplicateItem.push(elem[i]);
      }
    }
    console.log(this.duplicateItem);
  }

  createButtons() {
    return (
      <div className="button-bar">
        <button>Add</button>
        <button>Remove</button>
      </div>
    );
  }

  render() {
    const listItem: JSX.Element[] = this.list.map((item, index) =>
      (
        <div key={index} className="li">
          <img src={item.avatar} alt="ava" />
          <p>{item.name}</p>
          <p>{item.email}</p>
          {this.createButtons()}
        </div>
      ));

    return (
      <div
        className="listContainer"
        onScroll={this.handleScroll}
        ref={this.containerRef}
      >
        {listItem}
        {this.duplicateItem}
      </div>
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
