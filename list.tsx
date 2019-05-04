import * as React from 'react';
import faker from 'faker';

export interface IItem {
  load: () => void;
}

export default class List extends React.Component<IItem> {
  load: () => void;
  listElem: any;
  constructor(props: IItem) {
    super(props);
    this.listElem = [];
  }

  handleRemove = (e: any) => {
    e.currentTarget.parentNode.remove();
  }

  item(key: number) {
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const email = faker.internet.email();
    this.listElem.push({ key, avatar, name, email });
  }

  loadMore() {
    for (let i = 0; i < 5; i += 1) {
      this.item(this.listElem.length);
    }
  }

  render() {
    this.loadMore();
    console.log(this.listElem);

    const list = this.listElem.map((item: any) =>
      (
        <div key={item.key}  className="il">
          <img src={item.avatar} alt="img" />
          <p>{item.name}</p>
          <p>{item.email}</p>
          <button onClick={this.handleRemove}>Remove</button>
        </div>));

    return (
      <List load={this.loadMore}>
        {list}
      </List>
    );
  }
}
