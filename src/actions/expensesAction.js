// Import statements
import uuid from 'uuid';
import database from '../firebase/firebase';

// existing
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// future
// components calls the action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)


//Build Action Generators

// add_expense
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt}
        return database.ref('expenses')
        .push(expense)
        .then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
        .catch((error) => {
            console.log(`you have encountered an error: ${error}`);
        })
    };
};
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

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// 1. Fetch all expense data once
// 2. Parse that data into an array
// 3. Dispatch SET_EXPENSES
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses')
        .once('value')
        .then((snapshot) => {
            const expenses = [];
            snapshot.forEach(childSnapshot => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};

export {
    addExpense,
    removeExpense,
    editExpense
}
