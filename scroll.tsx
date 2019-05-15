import * as React from 'react';

import { MyLoader } from './contentLoader';
import './style.sass';

interface IProps {
  list: Object[];
  loadMore: () => void;
}

interface IItem {
  key: number;
  avatar: string;
  name: string;
  email: string;
}

export class Scroll extends React.Component<IProps> {
  containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.containerRef = React.createRef();
  }

  handleScroll = () => {
    const current = this.containerRef.current;

    if (current.clientHeight + current.scrollTop >= current.scrollHeight) {
      this.props.loadMore();
    }
  }

  handleRemove = (e: any) => {
    e.currentTarget.parentNode.remove();
  }

  render() {
    const list = this.props.list.map((item: IItem) => {
      return (
        <div key={item.key} className="li">
          <div className="avatar"><img src={item.avatar} alt="ava" /></div>
          <div className="item-container">
            <div className="item-name">{item.name}</div>
            <div className="item-email">{item.email}</div>
            <button
              data-key={item.key}
              className="remove-button"
              onClick={this.handleRemove}
            >Remove
            </button>
          </div>
        </div>);
    },
    );

    return (
      <div
        className="listContainer"
        onScroll={this.handleScroll}
        ref={this.containerRef}
      >
        {list}
        <MyLoader />
      </div>
    );
  }
}
