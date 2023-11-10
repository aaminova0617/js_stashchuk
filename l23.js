/* const personOne = {
    name: 'Bob',
     age: 21
 }

 function increasePersonAge (person) {
    person.age +=1
     return person
 }

 increasePersonAge(personOne)
 console.log(personOne.age)*/


const personOne = {
    name:'bob',
    age: 21
}

function increasePersonAge (person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age +=1
    return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)