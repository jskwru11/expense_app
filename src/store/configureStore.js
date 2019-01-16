// Import statements
import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expensesReducers';
import filterReducer from '../reducers/filtersReducers';



//create store for this.state.
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer, 
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
