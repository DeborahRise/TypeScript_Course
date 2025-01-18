// some older react this.

import { ReactNode } from "react";

type SectionProps = { title?: string, children: ReactNode}

// const Section: React.FC<{ title: string}>  = ({ children, title}) => { : this is the way it used to be before

const Section  = ({ children, title = "Default Value, because title is optional "}: SectionProps) => { 
    return(
        <section>
            <h1>{title}</h1>
            <p>{children}</p>
        </section>
    )
}

export default Section

// As against doing default props to an optional attribute, you can jsut pass the default value inline. The former is deprecated.

// Hover over "ReactNode" to find out why we chose ReactNode for the children. 
//  The Children represent all the values that will be passed to the return element. children are values we dont pass as a prop. title for example is passed as a prop. E.G
// <Section title = {"a new title."} <= that is a prop. it is different for children.
// The children go between the opening and closing tag. Go to app.tsx to see