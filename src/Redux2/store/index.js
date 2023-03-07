import { createStore } from 'redux'

const reducerFun = (state = { counter: 0 }, action) => {

    if (action.type === "INC") {
        return { counter: state.counter + 1 };
    } else if (action.type === "DEC") {
        return { counter: state.counter - 1 };
    }

    return state;

}
export const store = createStore(reducerFun)