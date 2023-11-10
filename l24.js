function anotherFn () {
    console.log('hello from another function')
}
function anotherFn2 () {
    console.log('hello from function 2 !!! ')
}

function fnWithAnotherFn (bla) {
    bla ()
}

setTimeout(anotherFn2, 5000)

fnWithAnotherFn(anotherFn )


