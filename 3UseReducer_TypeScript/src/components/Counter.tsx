import { useReducer } from "react";



interface State {
    count: number;
}

interface Action {
    type: string;
}

const reducer = (state: State, action: Action): State => {
    switch(action.type) {
        case "+":
            return { count: state.count + 1 };

        case "-":
            return { count: state.count - 1 };

        default:
            return state;
    }
}

const Counter = () => {
    const initState = {count: 0}
    const [state, dispatch] = useReducer(reducer, initState)
  return (
    <div>
        <h1>The count is: {state?.count}</h1>
        <button style={{marginRight: 10}} onClick={() => dispatch({type: "+"})}> + </button>
        <button onClick={() => dispatch({ type: "-"})}> - </button>
    </div>
  )
}

export default Counter