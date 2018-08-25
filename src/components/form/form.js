import React from "react";
import List from "../list";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sort = this.sort.bind(this);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <List items={this.state.items} deleteItem={this.deleteItem} />
        <form onSubmit={this.handleSubmit}>
          <label className={"font-weight-bold"} htmlFor="new-todo">
            enter task
          </label>
          <input
            className={"form-control"}
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button
            disabled={
              this.state.text.length === 0 || this.state.text.length > 10
            }
            className={`${this.getButton()}`}
          >
            add task number {this.state.items.length + 1}
          </button>
          <button className={"btn btn-dark"} onClick={this.sort}>
            sort alphabetically
          </button>
        </form>
      </div>
    );
  }

  getButton = () => {
    if (this.state.text.length > 10 || this.state.text.length == 0) {
      return "btn btn-danger";
    }
    return "btn btn-secondary";
  };

  sort = () => {
    this.setState({
      items: this.state.items.sort(function(a, b) {
        if (a.text > b.text) {
          return 1;
        }
        if (a.text < b.text) {
          return -1;
        }
        return 0;
      })
    });
  };

  deleteItem = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ""
    }));
  }
}

export default Form;
