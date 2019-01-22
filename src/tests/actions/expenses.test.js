import {  startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses } from '../../actions/expensesAction';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = {
            description,
            note,
            amount,
            createdAt
        };
    })
    database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    const result = removeExpense({ id: '123abc' });

    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test('should setup edit expense action object', () => {

    const result = editExpense('123abc', {amount: 1234});

    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            amount: 1234
        }
    });
});


// test('should setup add expense action object', () => {

//     const expenseData = {description: 'test case', note: 'test note', amount: 123, createdAt: 1000};
//     const result = addExpense(expenseData);


//     expect(result).toEqual({
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         },
//         type: 'ADD_EXPENSE'
//     });


// });

test('should setup add Expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', () => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'tom and jerry',
        createdAt: 12000
    };

    store.dispatch(startAddExpense(expenseData)).then((done) => {
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
               id: expect.any(String),
               ...expenseData
           }
       });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: 'mouse',
        amount: 3000,
        note: 'tom and jerry',
        createdAt: 12000
    };

    store.dispatch(startAddExpense({})).then((done) => {
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
               id: expect.any(String),
               ...expenseDefaults
           }
       });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });


});

// test('should setup add expense action object with default values', () => {
//     const result = addExpense({});


//     expect(result).toEqual({
//         expense: {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0,
//         id: expect.any(String)
//     },
//     type: 'ADD_EXPENSE'
//     });
        
//     });