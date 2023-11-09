const person = {
    name: 'Bob',
    age: 25
}

const person2 = Object.assign({}, person)

person2.age = 26

console.log(person2.age)
console.log(person.age)
console.log('\n--------------------v2--------------\n')


const personA = {
    name: 'Bob',
    age: 25
}

const personB = {... person}

personB.name = 'Alice'

console.log(personB.name)
console.log(personA.name)

console.log('\n--------------------v3--------------\n')

const personC = {
    name: 'Bob',
    age: 25
}

const personD = JSON.parse(JSON.stringify(personC))

personD.name='Alice'

console.log(personD)
console.log(personC)