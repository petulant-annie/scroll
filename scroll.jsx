import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Scroll extends React.Component {
  constructor() {
    super();
    this.list = document.getElementById('list');
  }

  loadMore() {
    const next = 1;
    for (let i = 0; i < 20; i += 1) {
      const item = document.createElement('li');
      item.innerText = `'Item ' + ${next + 1}`;
      this.list.appendChild(item);
    }
  }

  showList() {
    return this.list.addEventListener('scroll', () => {
      if (this.list.scrollTop + this.list.clientHeight >= this.list.scrollHeight) {
        this.loadMore();
      }
    });
  }

  render() {
    return (
      <div id="list">{this.showList()}</div>
    );
  }
}

ReactDOM.render(<Scroll />, document.getElementById('root'));
