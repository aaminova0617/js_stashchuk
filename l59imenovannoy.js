const myArray =[1,2,3]
console.log(myArray)

fn = function (item) {
    return item*4
}
const newArray = myArray.map(
    function (item) {
        return item*4
    }
)

console.log(newArray)
console.log(myArray)



