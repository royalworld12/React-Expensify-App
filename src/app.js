import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses  from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description : 'Water bill',amount:300,createdAt: 200}))
store.dispatch(addExpense({description : 'Gas bill',amount:400,createdAt: 100}))

const state = store.getState();
console.log(state);
const visibleExpense = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpense);

const jsx =  (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
