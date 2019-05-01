import * as React from 'react';
import * as ReactDOM from 'react-dom';

const list = require('./list.json');

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.list = props.list;
  }


  showList() {
    const listItems = this.list.map(number => <li>{number}</li>);


    return (
      <div id="list" >
        {listItems}
      </div>
    );
  }

  render() {
    return (
      this.showList()
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
