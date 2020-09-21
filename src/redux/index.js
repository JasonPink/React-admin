import { createStore } from "redux";
import addTodo from "./action";

const store = createStore(reducer);

const state = store.getState();

store.dispatch(addTodo("Learn redux"));

const defaultState = 0;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
      break;

    default:
      return state;
  }
};

const state = reducer(1, {
  type: "ADD",
  payload: 2,
});
