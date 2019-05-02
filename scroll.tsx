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
  state: { duplicateItem: any };

  constructor(props: IList) {
    super(props);
    this.list = props.list;
    this.containerRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      duplicateItem: [],
    };
  }

  handleScroll = (e: React.UIEvent) => {
    e.preventDefault();
    const current = this.containerRef.current;
    if (current.clientHeight + current.scrollTop >= current.scrollHeight) {
      this.setState({ duplicateItem: this.createItems });
      console.log(this.state.duplicateItem);
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
    console.log(this.state.duplicateItem);
    return (
      <div
        className="listContainer"
        onScroll={this.handleScroll}
        ref={this.containerRef}
      >
        {this.createItems}
        {this.state.duplicateItem}
      </div>
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
