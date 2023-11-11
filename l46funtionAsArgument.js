
 const cb = function () {
     console.log('run cb function ! \n')
 }

 const cb2 = function () {
     console.log('run cb-2 function ! \n')
 }

 main = function (f) {
     console.log('run Main function !')
     f()
 }

 main(cb)

 main(cb2)

 main(function () {
     console.log('run anonum function ! \n')
 })

 main( () => {
     console.log('run anonum function ! \n')
 })



