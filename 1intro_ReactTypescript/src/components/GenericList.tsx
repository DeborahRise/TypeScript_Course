// Creating and rendering a list in react
import { ReactNode } from "react";

interface ListProps<T> {

    title?: string,
  
    items: T[],
    render: (item: T) => ReactNode
  
  }

const GenericList = <T,>({ title, items, render  }: ListProps<T>) => {
  return (
   <><h2>{title}</h2>
    <ul>
    {items.map((it, i) => (
        
        <li key={i}>{render(it)}</li>
        
    )
)}
    </ul>
    </>
  )
};

export default GenericList;
