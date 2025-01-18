import{ ReactElement } from "react";

type HelloType = { title: string };

// the prop's type have to be well defined. 
// Also the return type by default is jsx element. but when dealing with return just element, it can be specified as "React Element"
// Ensure to name your file with .tsx extension. I did .ts and had mad errors

const Hello = ({ title }: HelloType): ReactElement => {
  return <h1>{title}</h1>;
};

export default Hello;
