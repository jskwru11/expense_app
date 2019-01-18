//TODO: import and bring in store
//TODO: create a function that will loop over expense array
//TODO use array.reduce(numerator, value) using numerator + value and pass in 0 for numerator and return total amount


export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else {
       return expenses
       .map((expense) => expense.amount)
       .reduce((accumulator, value) => {
            return accumulator + value;
       }, 0)
    }


};
