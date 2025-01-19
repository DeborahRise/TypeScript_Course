import { useMemo, useState } from 'react'

// usestate value can be explicit or implicit
// useeffect is for side effects, no value returned so no need for Types
// useCallback Memoizes functions so they are not rewritten/recreated. No types required, except when you plan to pass an event, so the event should be specified. A mouseEvent, keyboardEvent, etc. Works like useEffect.
// useMemo is used to Memoize values. so the same values can be easily reused. it is used for expensive calucualtions.something that takes a while to calculate, probably holding up everything in the component e.g fibonaci where a value is held down and returned at the end of the calculation

// useRef - used in referencing htmlElements. useRef uses Current to store access values
function App() {
  const [count, setCount] = useState(0);

  type fibFunc = (n: number) => number

  const fib: fibFunc = (n) => {
    if (n < 2 ) return n
    return fib(n -1 ) + fib(n - 2)
  }

  const myNum: number = 5

  const result = useMemo(() =>fib(myNum), [myNum])
  // useMemo helps limit the number of times the app rerenders a value.

  return (
    <>
      <div>{result}</div>
    </>
  )
}

export default App
