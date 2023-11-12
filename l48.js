function multByFactor(value, multiplier= 1) {
    return value*multiplier
}

console.log(multByFactor(10,2))
console.log(multByFactor(5))


const a = function(value, multiplier= 1) {
    return value*multiplier
}

console.log(a(5))
console.log(a(10,5))

const arrow = (value, multiplier= 1) => {
    return value*multiplier
}

console.log(arrow(5))
console.log(arrow(10,5))



//---------------- step by step of Original----------------
const newPost0 = (number1, addedAt = ' Nov 11 2023 ') => ({ number1, addedAt})
console.log(newPost0(10))

const newPost1 = (number1, addedAt = Date()) => ({ number1, addedAt})
console.log(newPost1(10))

const newPost2 = (number1, addedAt = Date()) => ({ ...number1, addedAt})
obj={
    id:1,
    author: 'aziza',
}
console.log(newPost2(
    obj
))
//--------------  original ---------
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt   //  'addedAt':addedAt
})

const firstPost = {
    id:1,
    author: 'aziza',
}
console.log(newPost(firstPost))


