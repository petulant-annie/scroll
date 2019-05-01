import * as React from 'react';
import * as ReactDOM from 'react-dom';

const list = require('./list.json');

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.list = props.list;
    this.state = {
      element: this.list.map((item, index) => <li className="li" key={index}>{item}</li>),
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
      for (let i = 0; i < 40; i += 1) {
        element.push(<li key={this.state.element.length + 1}>{this.list[i]}</li>);
      }
      this.setState({ element });
    }
  }

  render() {
    return (
      <div id="listContainer">
        {this.state.element}
      </div>
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
