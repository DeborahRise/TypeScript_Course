//The type tag is another method of Type-Narrowing
// Discriminated union is an over com plicated way of saying a "Tag-Type"

// This is a stuation where different interfaces (or mabe class , not sure) Have a reoccuring similar property in each of the different interfaces or classes by which each class can be accessed or managed directly

//Discriminated union is a tag or property name that will be the same for all different interfaces that contain a value


type Log = Warning | Info | Success

interface Warning {
    type: "warning"; // This is a type tag
    msg: string
}

interface Info {
    type: "info"; // This is a type tag
    text: string
}

interface Success {
    type: "success"; // This is a type tag
    text: string
}

// Type Narrowing can be achieved with a custom typer function or via Case Swicth

function handleLog(log: Log) {
    switch(log.type) {
        case "warning" :
            console.log(log.msg)
            break
        case "info" :
            console.log(log.text)
            break
        case "success" :
            console.log(log.text)
            break
        
    }
}