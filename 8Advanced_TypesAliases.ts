// TypeAliases allows us create custom names for complex types, making our codes morre readable and maintainable
// Unlike "INTERFACES" this is especially useful in "NON-OBJECT-BASED TYPES"
// Unlike interfaces, we cant extend or implement "Type Aliases"


// So instead of this i.e writtong [number, number] 3 times or always 
function getCoords(x: [number, number], y:[number, number]): [number, number] {
    return[x[0], y[1]]
}

// We do 

type Coords = [number, number]

function getCords(x: Coords, y: Coords): Coords {
    return[x[0], y[1]]
}

const llocation: Coords[] = [];

// This is for non-objects, like basic variables
