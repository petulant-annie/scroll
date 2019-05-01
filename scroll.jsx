import * as React from 'react';
import * as ReactDOM from 'react-dom';

const list = require('./list.json');

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.list = props.list;
    
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
      this.createItem()
    );
  }
}

const scroll = (
  <Scroll list={list} />
);

ReactDOM.render(scroll, document.getElementById('root'));
