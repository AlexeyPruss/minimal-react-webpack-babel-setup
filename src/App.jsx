import React from "react";
import Form from "./components/form";
import Menu from "./components/menu";
import Information from "./components/Information";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router-dom";
import Listitem from "./components/Listitem";

const App = () => (
  <section>
    <Menu />
    <div>
      <Switch>
        <Route exact path="/" component={Information} />
        <Route exact path="/list" component={Form} />
        <Route path="/list/:id" component={Listitem} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </section>
);

export default App;
