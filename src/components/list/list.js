import React from "react";

class List extends React.Component {
  handleClick(id) {
    this.props.deleteItem(id);
  }
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li className={"font-weight-bold"} key={item.id}>
            {item.text}

            <button
              className={"btn btn-primary"}
              onClick={this.handleClick.bind(this, item.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
