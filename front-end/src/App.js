import React from "react";
import { Route, Switch } from "react-router-dom";
import { Admin, Login, Register, User } from "./pages/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/products" component={ User } />
        <Route path="/admin/orders" component={ Admin } />
      </Switch>
    </div>
  );
}

export default App;
