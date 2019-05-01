import * as React from 'react';
import * as ReactDOM from 'react-dom';

const list = require('./list.json');

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.list = props.list;
    this.listContainer = document.getElementById('listContainer');
  }

  componentDidMount() {
    window.addEventListener('scroll', console.log('11'));
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

  render() {
    return (
      <div id="listContainer" >
        {this.showList()}
      </div>
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
