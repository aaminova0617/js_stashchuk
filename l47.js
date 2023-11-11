const myFunction = (a,b) => {
    let c
    a=a+1
    c=a+b
    return c
}

console.log(myFunction(5,3))


/*
a=function(a,b)  {
    let c
    a=a+1
    c=a+b
    return c
}
*/

setTimeout( () => {
    console.log('hello')  }     , 5000  )

    setTimeout( () => console.log('hello'), 5000  )
