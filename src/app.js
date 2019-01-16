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

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

