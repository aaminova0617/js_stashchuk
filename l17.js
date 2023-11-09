const myCity = {
    city: 'New York',
    cityGreeting () {
        console.log('Greetings!!')
    },
    state: 'NY',
    whereis: function ()  {
        console.log(this.city+ ' city in ' +this.state+' state')    }
}

myCity.cityGreeting()

myCity.whereis()

myCity.city = 'Clevelend'
myCity.state = 'OH'
myCity.whereis()
