import * as React from 'react';
import { MyLoader } from './contentLoader';
import SvgTrash from './svg-trash';
import './style.sass';

interface IProps {
  list: Object[];
  isLoading: boolean;
  loadMore: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

interface IItem {
  key: number;
  avatar: string;
  name: string;
  email: string;
}

export class Scroll extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  handleScroll = () => {
    const current = this.props.containerRef.current;

    if (current.clientHeight + current.scrollTop >= current.scrollHeight) {
      this.props.loadMore();
    }
  }

  handleRemove = (e: any) => {
    e.currentTarget.parentNode.parentNode.remove();
  }

  render() {
    const loaderStyle = () => {
      if (this.props.isLoading) {
        return ({ display: 'none' });
      }
    };

    const list = this.props.list.map((item: IItem) => {
      return (
        <div key={item.key} className="li">
          <img src={item.avatar} alt="ava" className="avatar" />
          <div className="item-container">
            <div className="item-name">{item.name}</div>
            <div className="item-email">{item.email}</div>
            <button
              data-key={item.key}
              className="remove-button"
              onClick={this.handleRemove}
            >
              <SvgTrash fill={'#9E9E9E'} />
            </button>
          </div>
        </div>);
    },
    );

    return (
      <div
        className="listContainer"
        onScroll={this.handleScroll}
        ref={this.props.containerRef}
      >
        {list}
        <div style={loaderStyle()}>
          <MyLoader />
          <MyLoader />
        </div>
      </div>
    );
  }
}
