import React, { Component } from "react";
import Task from "../task/task";
import { statementsData } from "../task/task";

// let ww = statementsData.map(val => val);
// ww = ww.filter(val => {
//   return val.group === "Execute";
// });

// console.log(ww);

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statementsData: statementsData
    };
  }

  showAlert() {
    alert("Im an alert");
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.showAlert}>отрисовать все</button>
        <button onClick={this.showAlert}>отрисовать Execute</button>
        <button onClick={this.showAlert}>отрисовать Performed</button>
        <button onClick={this.showAlert}>отрисовать Done</button>
        <h1>hello Tasklist</h1>
        <Task />
      </React.Fragment>
    );
  }
}

export default TaskList;
