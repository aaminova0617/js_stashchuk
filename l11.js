let a =  () => {
      console.log('hey there')
  }
  a()

  a = 10
  console.log(a)


  a = function () {
      console.log(' bye bye')
  }
  a()

let b = {
    name: 'Aziza',
    age: 31,
    bla_bla: function () {
        console.log(' \n\tThis is my CV ' +
            ' \nMy name ' + this.name,
            ' \nMy age ' + this.age,
            '!')
    }
}
b.bla_bla ()

b.name = 'Alisher'
b.age = null
b.bla_bla ()






