import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calendarFocused: false,
            error: ''
        };
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
        
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }));
        }
        
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }));
        }

    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }))
    };

    onAddExpense = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please provide "description" and "amount"'
            }))
        } else {
            //clear the error
            this.setState(() => ({
                error: ''
            }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <h2>{this.state.error}</h2>}
                <form onSubmit={this.onAddExpense}>
                    <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input 
                    type="text"
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange} 
                    focused={this.state.calendarFocused} 
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1} 
                    isOutsideRange={() => false}
                    />
                    <textarea 
                    placeholder="Add a note for you expense"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button 
                    type="submit"
                    >Add Expense
                    </button>
                </form>
            </div>
        );
    }
}