import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "../components/Header.js"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import EditPage from "../components/EditExpensePage";
import FourOhFour from "../components/FourOhFour";
import Login from "../components/Login";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route exact path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={FourOhFour}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;