// import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/selectors';
import { addExpense,removeExpense,editExpense } from './actions/expensesAction';
import { setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate } from './actions/filtersActions';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';
import uuid from 'uuid';


// create store call
const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({
    id: uuid(),
    description: 'Water bill',
    amount: 2120,
    createdAt: 14501,
    note: 'water bill for May'
}));

store.dispatch(addExpense({
    id: uuid(),
    description: 'Gas bill',
    amount: 1200,
    createdAt: 5009,
    note: 'gas bill for May'
}));

store.dispatch(addExpense({
    id: uuid(),
    description: 'Rent',
    amount: 20120,
    createdAt: 790,
    note: 'rent for May'
}));



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

