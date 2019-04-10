import React from "react";
import { Link } from "react-router-dom";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>задача еще не удалена</h1>
        <Link to="/list">Back</Link>
      </div>
    );
  }
}

export default TaskItem;
