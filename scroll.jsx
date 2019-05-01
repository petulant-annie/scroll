import * as React from 'react';
import * as ReactDOM from 'react-dom';

const list = require('./list.json');

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.list = props.list;
    this.item = this.list.map((item, index) => <li key={index}>{item}</li>);
    this.lastScrollY = 0;
    this.state = {
      element: [this.item],
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  showList() {
    for (let i = 0; i < 20; i += 1) {
      this.setState({ element: (this.state.element.push(<li key={i}>{this.item[i]}</li>)) });
      console.log('123');
    }
  }

  handleScroll() {
    this.lastScrollY = window.scrollY;
    if (this.lastScrollY >= 30) {
      this.showList();
    }
  }

  render() {
    return (
      <div id="listContainer">
        {/* {this.item} */}
        {this.state.element}
      </div>
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
