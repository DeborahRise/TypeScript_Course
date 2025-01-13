// Union is Pipe | operator
// Intersection is and & operator
// this allows us combine multiple types together to create complex types

// This wroks hand in hand with type aliase

type Username = string | number; // this can be as many types as possible. but it must be either or!

function newUser(val: Username): Username {
    return val
}

// Type aliase and intersection of interfaces

interface Businesspartner {
    name: string
}

interface ContactDetail {
    email: string
    phone: string
}

type BusCont = Businesspartner & ContactDetail

const first_contact: BusCont = {
    name: "deb",
    email: "",
    phone: ""
}

// Finally
interface Individual {
    name   : string
    birthday : string
}

interface Orgainsation {
    companyName: string
    workPhone: string

}

type IndCont = Individual | Orgainsation
type CompanyCont = Individual & Orgainsation

function addCont(contact: IndCont) {
    if ("birthday" in contact) {
        console.log(contact.birthday, contact.name) // the auto correct shows the options accordingly
    } else {
        console.log(contact.companyName, contact.workPhone) // it know that its either or
    }
}