//this state is the default state
//that will init the aplication's state in the first time
const initialState = {
  items: []
};

//in the reducer we get a "default parameter" that is called "state"
//in the first tume the state will be "undefined",
//so the reducer will use the default vale (initialState)
export function cartReducer(prevState = initialState, action) {
  let nextState;
  switch (action.type) {
    case "ADD":
      //   nextState = Object.assign({}, prevState, {
      //     [action.payload.name]: true
      //   });
      nextState = { items: [...prevState.items, action.payload.name] };
      break;
    case "REMOVE":
      //   nextState = Object.assign({}, prevState, {
      //     [action.payload.name]: false
      //   });
      nextState = prevState.items.filter(
        item => item.name !== action.payload.name
      );
      break;
    default:
      nextState = prevState;
  }

  console.log("cartReducer", { prevState, action, nextState });
  return nextState;
}
