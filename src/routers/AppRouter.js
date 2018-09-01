import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "../components/Header.js"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import EditPage from "../components/EditExpensePage";
import FourOhFour from "../components/FourOhFour";
import LoginPage from "../components/Login";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="*" component={FourOhFour}/>
      </Switch>
      <Switch>
        <Header/>
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;