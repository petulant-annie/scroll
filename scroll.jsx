import * as React from 'react';
import * as ReactDOM from 'react-dom';

const list = require('./list.json');

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.list = props.list;
    this.lastScrollY = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  showList() {
    let listItems;
    for (let i = 0; i < 20; i += 1) {
      listItems = this.list.map(item => <li key={i}>{item}</li>);
    }
    return (
      listItems
    );
  }

  handleScroll() {
    this.lastScrollY = window.scrollY;
    if (this.lastScrollY >= 30) {
      this.showList();
    }
  }

  render() {
    return (
      <div id="listContainer" onScroll={this.handleScroll()} >
        {this.showList()}
      </div>
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
