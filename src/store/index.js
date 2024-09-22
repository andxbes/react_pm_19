import { createStore } from 'redux';

const counterREducer = (state = 0, action) => {
    if (action === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
};

const store = createStore(counterREducer);

export default store;