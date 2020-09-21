// import * as action from './action'
let obj = {
  name: 'yemeng',
  age:22
}

export function data(state = obj.age, action) {
  switch (action.type) {
    case 'ADD':
      return state+action.data
      break;
  case 'DEL':
      return state-action.data
      break;
    default:
      return state;
      break;
  }
}