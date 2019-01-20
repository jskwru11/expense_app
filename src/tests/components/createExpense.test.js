import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpense } from '../../components/CreateExpense';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<CreateExpense startAddExpense={startAddExpense} history={history} />);
});

test('should render CreateExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSumbit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpensee).toHaveBeenLastCalledWith(expenses[1]);
});
