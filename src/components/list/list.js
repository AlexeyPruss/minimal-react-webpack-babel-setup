import React from "react";
import { NavLink } from "react-router-dom";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.deleteItem(id);
  }

  render() {
    const listItem = {
      display: "flex",
      justifyContent: "space-between",
      background: "bisque",
      margin: "25px 0px",
      padding: "30px 0px"
    };
    return (
      <ul
        style={{
          paddingLeft: "0",
          listStyle: "none"
        }}
      >
        {this.props.items.map(item => (
          <div>
            <NavLink
              activeStyle={{ background: "orange" }}
              style={listItem}
              to={{
                pathname: `/list/${item.id}`
              }}
              className={"font-weight-bold"}
              key={item.id}
            >
              {item.text}
              <h6>Это задача {item.id}</h6>
            </NavLink>
            <button
              className={"btn btn-primary"}
              onClick={() => this.handleClick(item.id)}
            >
              delete
            </button>
          </div>
        ))}
      </ul>
    );
  }
}

export default List;
