import * as React from 'react';
import faker from 'faker';

export interface IList {
  listItems: () => JSX.Element[];
}

export default class List extends React.Component<IList> {
  elem: JSX.Element[];
  constructor(props: IList) {
    super(props);
    this.elem = [];
    this.createItems = this.props.listItems;
  }

  handleRemove = (e: any) => {
    e.currentTarget.parentNode.remove();
  }

  item: any = (key: number) => {
    return (
      <div key={key} className="li">
        <img src={faker.image.avatar()} alt="ava" />
        <p>{faker.name.findName()}</p>
        <p>{faker.internet.email()}</p>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }

  createItems() {
    for (let i = 0; i < 5; i += 1) {
      this.elem.push(this.item(this.elem.length));
    }
    console.log(this.elem);

    return this.elem;
  }

  render() {
    return (
      <div>
        {this.createItems()}
      </div>
    );
  }
}
