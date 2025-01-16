//npm create vite@latest - the command to run to initialize a ts project with vite
// vite.config.ts is where we add our pluggins
// Vite documentation: Go to "DEPLOYING A STATIC SITE" Learn how to deploy or build your project using vercel, netlify, etc. highly simplified
// Also not the difference in the Env Variables and Modes - as against Process.env, we have "import.meta.env.MODE: string"



// Typescript todo list project. Steps to get it down
// 1. create and interface for the list of items on the list. make all attributes private with a gtter and setter for each attribute. make it exportable. then create a class that implements the interface. make the class export default

// Create the above and continue.

// Creating a model for the list item entails an interface, then a class that implements the interface with a constructor that sort of defines the attributes/properties of the interface as private and sets them to an initial empty string value, without aneed to re-assign them (e.g this.property = property isnt neccessary) and then create getters and setters for each property/attribute.
// i.e get id(): string {
// return this._id
// } 

//  constructor (object: List){ 
// private _load(): void {
// map through each item in ListItem and display
// }
// private _save(): void {
// i will say push to list or call default save function
// localstorage.setItem("myList", Json.stringify(this._list))
// }
// private _clearlist(): void {
// making the text box = ""
// then call the save method above
// }
// private additem(objectItem: ListItem): void {
// this._list.push(objectItem)
// this.save()
// get index of item in array and push to existing array
// }
// private _removeItem(id:string): void {
// Get Id of item and pop or splice or slice from array
// this._list = this._list.filter(item => item.id !==id )
// this.save()
// }
// }

// get load(): ListItem[] {
// return this._load(list)
// }

// set load(): ListItem[] {
// this._load([list]) = list
// }