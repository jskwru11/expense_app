import moment from 'moment';


//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;// if typeof startDate is not a number like 'undefined' true, or if its a number and expense.createdAt is larger or equal to startDate its true and it won't be filtered else filter it from the new array.
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
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

export default getVisibleExpenses