// React
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; // Only use Route for public routes...
import PrivateRoute from "./PrivateRoute"; // HOC of Route.
import PublicRoute from "./PublicRoute"; // HOC of Route.

// History
import createHistory from "history/createBrowserHistory";
export const history = createHistory();

// Components
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import EditPage from "../components/EditExpensePage";
import FourOhFour from "../components/FourOhFour";
import Login from "../components/Login";
import HelpPage from "../components/HelpPage";


const AppRouter = () => (
  <Router history={history} >
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute exact={true} path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/help" component={HelpPage} />
        <Route component={FourOhFour}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;