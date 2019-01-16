import {     addExpense, removeExpense, editExpense } from '../../actions/expensesAction';



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


test('should setup add expense action object', () => {

    const expenseData = {description: 'test case', note: 'test note', amount: 123, createdAt: 1000};
    const result = addExpense(expenseData);


    expect(result).toEqual({
        expense: {
            ...expenseData,
            id: expect.any(String)
        },
        type: 'ADD_EXPENSE'
    });


});


test('should setup add expense action object with default values', () => {
    const result = addExpense({});


    expect(result).toEqual({
        expense: {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
        id: expect.any(String)
    },
    type: 'ADD_EXPENSE'
    });
        
    });