import * as React from 'react';
import * as ReactDOM from 'react-dom';
import faker from 'faker';

class Scroll extends React.Component {
  containerRef: React.RefObject<HTMLDivElement>;
  list: JSX.Element[];
  state: { itemAmount: number };

  constructor() {
    super();
    this.list = [];
    this.containerRef = React.createRef();
    this.state = {
      itemAmount: 5,
    };
  }

  handleScroll = (e: React.UIEvent) => {
    const current = this.containerRef.current;
    if (current.clientHeight + current.scrollTop >= current.scrollHeight) {
      this.setState({ itemAmount: this.state.itemAmount += 1 });
    }
  }

  handleRemove = (e: any) => {
    e.currentTarget.parentNode.remove();
  }

  item: any = (key: number) => {
    return (
      <div key={key} className="li">
        <img src={faker.image.avatar()} alt="ava" />
        <p>{faker.name.findName()}</p>
        <p>{faker.internet.email()}</p>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }

  createItems() {
    this.list = [];
    for (let i = 0; i < this.state.itemAmount; i += 1) {
      this.list.push(this.item(this.list.length));
    }

    return this.list;
  }

  render() {
    return (
      <div
        className="listContainer"
        onScroll={this.handleScroll}
        ref={this.containerRef}
      >
        {this.createItems()}
      </div>
    );
  }
}

const scroll = (
  <Scroll />
);

ReactDOM.render(scroll, document.getElementById('root'));
