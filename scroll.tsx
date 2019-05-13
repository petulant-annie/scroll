import * as React from 'react';

interface IProps {
  list: Object[];
  loadMore: Object[];
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
      this.props.loadMore;
      console.log('end');
    }
  }

  handleRemove = (e: any) => {
    e.currentTarget.parentNode.remove();
  }

  render() {
    const list = this.props.list.map((item: IItem) => {
      return (
        <div key={item.key} className="li">
          <img src={item.avatar} alt="ava" />
          <p>{item.name}</p>
          <p>{item.email}</p>
          <button onClick={this.handleRemove} data-key={item.key}>Remove</button>
        </div>);
    },
    );

    console.log(list);

    return (
      <div
        className="listContainer"
        onScroll={this.handleScroll}
        ref={this.containerRef}
      >
        {list}
      </div>
    );
  }
}
