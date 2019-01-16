import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import Header from '../components/Header';
import Help from '../components/Help';
import PageNotFound from '../components/PageNotFound';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route 
                path="/" 
                component={ExpenseDashboardPage}
                exact= {true}/>
                <Route path="/create" component={CreateExpense}/>
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route path="" component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;