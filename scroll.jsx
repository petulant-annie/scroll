import * as React from 'react';
import * as ReactDOM from 'react-dom';

const list = require('./list.json');

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.list = props.list;
    this.state = {
      // element: [],
    };
    // this.handleScroll = this.handleScroll.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll() {
  //   if (document.documentElement.clientHeight
  //     + window.pageYOffset >= document.documentElement.scrollHeight) {
  //     const element = this.state.element;
  //     for (let i = 0; i < 40; i += 1) {
  //       element.push(<div className="li" key={this.state.element.length + 1}>
  //         <img src={this.state.element.avatar} alt="ava" />
  //         <p>{this.state.element.name}</p>
  //         <p>{this.state.element.email}</p>
  //         {this.createButtons()}
  //       </div>);
  //     }
  //     this.setState({ element });
  //   }
  // }

  createButtons() {
    return (
      <div className="button-bar">
        <button>Add</button>
        <button>Remove</button>
      </div>
    );
  }

  createItem() {
    const listItem = this.list.map(item =>
      (
        <div className="li">
          <img src={item.avatar} alt="ava" />
          <p>{item.name}</p>
          <p>{item.email}</p>
          {this.createButtons()}
        </div>
      ));


    return (
      listItem
    );
  }

  render() {
    return (
      this.createItem()
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
