const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}
console.log(myCity)
//
// delete myCity.info['isPopular']
// console.log(myCity)

bla = 'country'
// bla = 'isPopular'
delete myCity.info[bla]
delete myCity.info.bla
console.log(myCity)


