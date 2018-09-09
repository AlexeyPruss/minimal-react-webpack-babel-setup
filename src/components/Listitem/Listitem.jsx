import React from "react";
import { Link } from "react-router-dom";

class Listitem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>тест</h3>
        <h2>тест тест</h2>
        <Link to="/list">Back</Link>
      </div>
    );
  }
}

export default Listitem;
