// React
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// History
import createHistory from "history/createBrowserHistory";
const history = createHistory();

// Components
import Header from "../components/Header.js"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import EditPage from "../components/EditExpensePage";
import FourOhFour from "../components/FourOhFour";
import Login from "../components/Login";


const AppRouter = () => (
  <Router history={history} >
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
  </Router>
);

export default AppRouter;