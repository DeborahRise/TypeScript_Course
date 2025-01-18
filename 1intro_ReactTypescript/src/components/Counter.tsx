import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <h3>The count is {count}</h3>
      <div style={{marginTop: "70px", justifyItems: "center", alignItems: "center"}}>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Delete</button>
      </div>
    </>
  );
};

export default Counter;

// incases where the value of the state is initially null, and then something else later ot where we want to be explicit with our typing we can do this;

// const [count, setCount] = useState<number | Null > (1);
