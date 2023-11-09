let myCity = {
    city: 'New York',
}
console.log(myCity)


myCity.popular = true
console.log(myCity)

myCity.country = 'USA'
console.log(myCity)

delete myCity.country

console.log(myCity,'\n\n')



myCity = {
    city: 'New York'
}

myCity['popular'] = true

console.log(myCity)

const countryPropertyName = 'country'
myCity [countryPropertyName] = 'USA'

console.log(myCity)