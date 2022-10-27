import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import expenseDashboardPage from '../components/expenseDashboardPage';
import addExpensePage from '../components/addExpensePage';
import editExpensePage from '../components/editExpensePage';
import helpExpensePage from '../components/helpExpensePage';
import notFoundPage from '../components/notFoundPage';
import Header from '../components/header';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
    <Switch>
    <Route path='/' component={expenseDashboardPage} exact/>
    <Route path='/create' component={addExpensePage} />
    <Route path='/edit/:id' component={editExpensePage} />
    <Route path='/help' component={helpExpensePage} />
    <Route component={notFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;