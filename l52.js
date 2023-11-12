function myFn(a) {
    console.log(a);
}

const b=true;
let c=10;

console.log(myFn(2+3))
console.log(myFn(b))
console.log(myFn(c=c+1))

console.log(myFn(c=c+1;))
console.log(myFn(let d))

