import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expensesAction';



const EditExpense = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expenses} 
                onSubmit={(expense) => {
                    // Dispatch the action to edit the expense
                    props.dispatch(editExpense(props.match.params.id,{...expense}));
                    // Redirect to the dashboard
                    props.history.push('/');
                }}
            />
            <button onClick={(e) => {
                props.dispatch(removeExpense({id: props.match.params.id}))
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};


export default connect(mapStateToProps)(EditExpense);