import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>
    This is my dashboard component.
  </div>
);

const AddExpensePage = () => (
  <div>
    This is my add expense component.
  </div>
);

const HelpPage = () => (
  <div>
    This is the help page.
  </div>
)

const EditPage = () => (
  <div>
    This is the edit page.
  </div>
)

const FourOhFour = () => (
  <div>
    404! - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/edit" component={EditPage} />
        <Route component={FourOhFour}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;