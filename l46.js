const myFunction = function(a,b) {
    let c
    a = a+1
    c = a+b
    return c
}

console.log(myFunction(5,3))


setTimeout(function () {
    console.log('hello')  }     , 5000  )