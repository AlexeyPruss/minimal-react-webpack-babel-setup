import React from "react";

class Task extends React.Component {
  render() {
    const { id, name, description, group } = this.props;
    return (
      <div>
        <div key={id} style={{ background: "antiquewhite", margin: "4px" }}>
          <h2>{name}</h2>
          <span>{description}</span>
          <h3 style={{ color: "green" }}>{group}</h3>
        </div>
      </div>
    );
  }
}
export default Task;
