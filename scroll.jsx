import * as React from 'react';
import * as ReactDOM from 'react-dom';

const list = require('./list.json');

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.list = props.list;
    this.state = {
      element: this.createItem(),
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (document.documentElement.clientHeight
      + window.pageYOffset >= document.documentElement.scrollHeight) {
      const element = this.state.element;
      console.log(this.state.element);
      for (let i = 0; i < 1; i += 1) {
        element.push(this.createItem());
      }
      this.setState({ element });
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

  createItem() {
    const listItem = this.list.map((item, index) =>
      (
        <div key={index} className="li">
          <img src={item.avatar} alt="ava" />
          <p>{item.name}</p>
          <p>{item.email}</p>
          {this.createButtons()}
        </div>
      ));
    return listItem;
  }

  render() {
    return (
      this.state.element
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
