import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import NotFound from "./components/NotFound";
import TaskItem from "./components/TaskItem";

const Application = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={TodoList} />
            <Route exact path="/list/add" component={TodoForm} />
            <Route exact path="/list/edit" component={TodoForm} />
            <Route exact path="/list/:id" component={TaskItem} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Application />, document.getElementById("app"));

module.hot.accept();
