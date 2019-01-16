// import statements
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//final state of what we want to build

//Build Action Generators

// add_expense
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// remove_expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// edit_expense
const editExpense = (id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


// set_text_filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// sort_by_date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// sort_by_amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
// set_start_date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// set_end_date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


const expensesReducerDefaultState = [];

const expenseReducer = (state=expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
           return [
               ...state,
            action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        default: 
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state=filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
            text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
};

//Reducers for create store
const reducers = combineReducers({expenses: expenseReducer, filters: filterReducer})

//Timestamps (milliseconds)
//January 1st 1970 (unix epoch) positive numbers come after, negative numbers come before
//33400, 10, -203


//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; // if typeof startDate is not a number like 'undefined' true, or if its a number and expense.createdAt is larger or equal to startDate its true and it won't be filtered else filter it from the new array.
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // figure out if expenses.description has the text varible string inside.

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; // this provides the larger number first -> most recent
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; // this gives the larger amount first - more expensive amount
        }
    });
};

//create store for this.state.

const store = createStore(reducers);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'new expense test Rent',
    note: 'first expense added for rent',
    amount: 2000,
    createdAt: 1000
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'shoes',
    note: 'jordan retro 5',
    amount: 2500,
    createdAt: -1000
}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));

// // console.log(expenseTwo.expense.id);
// // console.log(store.getState());

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 2750 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));


store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'number',
        description: 'january rent',
        note: 'this was the final payment for that address',
        amount: 54500, // in pennies so we don't need to track decimals
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'jen',
//     age: 24
// };
// console.log({
//     ...user,
//     location: 'chapel hill',
//     age: 27
// });
