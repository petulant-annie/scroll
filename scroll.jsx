import * as React from 'react';
import * as ReactDOM from 'react-dom';

const list = require('./list.json');

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.list = props.list;
  }


  showList() {
    const item = [];
    for (let i = 0; i < this.list.length; i += 1) {
      item[i] = this.list.splice(0);
      item.push(<div key={i} className="list-item">{item[i]}</div>);
    }

    return (
      <div className="list" >
        {item}
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
