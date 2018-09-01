// Router materials
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// Routes
import Header from "../components/Header.js"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import EditPage from "../components/EditExpensePage";
import FourOhFour from "../components/FourOhFour";
import LoginPage from "../components/LoginPage";

// History
import createHistory from "history/createBrowserHistory" // From history npm module...
export const history = createHistory(); // Export this for use in the app.js file...

const AppRouter = () => (
  <Router history={ history }>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="*" component={FourOhFour}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;