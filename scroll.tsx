import * as React from 'react';
import * as ReactDOM from 'react-dom';

import List, { IItem } from './list';

class Scroll extends React.Component<IItem> {
  containerRef: React.RefObject<HTMLDivElement>;
  state: { listItem: [] };
  constructor(props: IItem) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      listItem: [],
    };
  }

  handleScroll = (e: React.UIEvent) => {
    const current = this.containerRef.current;
    if (current.clientHeight + current.scrollTop >= current.scrollHeight) {
      this.props.load;
      console.log('123');
      console.log(this.props.load);
    }
  }

  render() {
    return (
      <div
        className="listContainer"
        onScroll={this.handleScroll}
        ref={this.containerRef}
      >
        <List load={this.props.load} />
      </div>
    );
  }
}

const scroll = (
  <Scroll load={this.props.load} />
);

ReactDOM.render(scroll, document.getElementById('root'));
