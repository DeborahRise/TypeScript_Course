//Utility types, are built-in types that enable you to transform and manipulate existing types in various ways.
// This utility types can make your life easier and can be used to declare some more custom types.

// There are five of them

// 1. Partial Utility Type

interface Todo {
  title: string;
  description: string;
}

const updateTodo = (todo: Partial<Todo>) => {
    // partial makes all the properties/attributes of the type we passed, to be optional
    // Therefore Attributes of Type-Todo will become title? and description?

    // So, instead or redefining anew type and making all values or attributes optional, we can use the Partial Utiliity type. positioned as above.
    todo.title // has a "?" in the auto complete
};

// 2. Readonly Utility type: Means the type properties/attributes cant be modified once assigned a value . It is readonly.

const myTodo: Readonly<Todo> = {title: "Learn Typscript", description: "This description cant be modified. if you try to type: myTodo.description = helloworld, it will give an error, but it can be accessed and printed out"}

// myTodo.title = "something else // this is an errror if uncommented"


// 3. Record Utility Type: This helps us to have some key with some value. Its a way to create a mapping type of some sort. It hels define a type with property names such as id and map the values to the type of the data.
// Basically, this takes in a 2 values "Record<type, type> E.G."

interface PageInfo {
    title: string;
  }

const pages: Record<string, PageInfo> = {
    home: {title: "HomePage"},
    about: {title: "The about Page"},
    contact: {title: "The Contact Page"}
}
const pagenumbers: Record<number, PageInfo> = {
    0: {title: "HomePage"},
    1: {title: "The about Page"},
    2: {title: "The Contact Page"}
}


// 4. Pick Utility Type: Allows you choose pick a set of properties / attributes from an existing type, and creating a new type.

interface TodoPreview {
    id: number;
    title: string;
    completed: boolean
}
type TodoType = Pick<TodoPreview, "title"  | "completed">;

const todo : TodoType = {
    title: "Read Ikigai",
    completed: false
    // id: 
}

// any attribute omitted from the type alliase cant be added and vice versa

// 5. Omit Utility Type: Exact opposite of Pick Utility. Also constructs a new type, picking all properties of an existing type, except a set of listed keys

type TodoTypeOmit = Omit<TodoPreview, "title"  | "completed">;

const todoOmit : TodoTypeOmit = {
    // title: "Read Ikigai",
    // completed: false
    id: 3
}

// Other utility types include: 
// Required;
// Exclude and Extract.These Utility types dont work with Interfaces, Rather with String literals and union  types. They work just like Pick and omit, only on literals. Exclude is like Omit and Extract is like Pick.

// Nonnullable Utility type: ignores all possible null and/or undefined types in a type declaration.

// ReturnType Utility type: think of it as reverse psychology in type creation. 

// type newAssign = {title: string, points: number} This should come first but it is commentaed

const createNewAssign = (title: string, points: number) => {
    return { title, points}
}

type newAssign = ReturnType<typeof createNewAssign> // the type is created as a product of what the return type of the function is. What this means is, the return type can be easily changed without causing errors. So the retrun type auto updates too if a function or library module changes.

// Parameters: Similar to ReturnType, where you derive a type from a function's parameters.

type AssignParams = Parameters<typeof createNewAssign> // this auto gives us a type of tuple as seen in line 84

// Awaited Utility Type: Helps us with the ReturnType of a Promise

interface User {
    name: string;
    age: number;
}

const fetchUsers = async(): Promise<User[]> => {
    return []
}

type FetchUsersReturnType = ReturnType<typeof fetchUsers> // this returns the Promise of an array of users not the array of users itself. HOWEVER, we want the result not the promise

type FetchUsersReturnType2 = Awaited<ReturnType<typeof fetchUsers>> // This return the actual array of users