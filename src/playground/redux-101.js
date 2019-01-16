import { createStore } from 'redux';

// Action Generators - functions that return action objects

const incrementCount = ({ incrementBy } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
//1. Reducers are pure functions { output only determined by the input} returns only what was provided
//non-pure function mixes input -> output with items that were not provided to the function - outside of the scope.
//2. never change state or action - mutate - just return on a new object


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.incrementBy}
        case 'DECREMENT':
            return {count: state.count - action.decrementBy}
        case 'RESET':
            return {count: state.count = 0}
        case 'SET':
            return {count: action.count}
        default:
            return state
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Actions - object that gets sent to the store
// increment, decrement, reset -- actions for count app

// walk, stop_walking, sit, work, stop_working

// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });


// I'd like to reset the count to zero
// store.dispatch({
//     type: 'DECREMENT'
// });
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(resetCount());

store.dispatch(decrementCount({
    decrementBy: 3
}));


store.dispatch(setCount({
    count: 110
}));



