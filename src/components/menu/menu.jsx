import React from "react";
import { NavLink } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink
              exact
              className="nav-link mdc-tab"
              to="/"
              activeStyle={{ color: "orange" }}
            >
              Главная
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link mdc-tab"
              to="/list"
              activeStyle={{ color: "orange" }}
            >
              Список
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
