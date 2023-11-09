  let sentmsg = '{"userId":1, "id":1, "title":"Test title", "status":{"completed":false}}'

a = JSON.parse(sentmsg)
  console.log(a)
  console.log(a.userId)
  console.log(a.id)
  console.log(a.title)
  console.log(a.status.completed)


  console.log(sentmsg)

  let newMsg = JSON.stringify(a)
  console.log(newMsg)

  a.id=2
  a.dublicate=true
  newMsg=JSON.stringify(a)
  console.log(newMsg)


  r = '{\n' +
      '    "suppression": {\n' +
      '        "disabled": false,\n' +
      '        "suppressUntil": "2023-11-09T21:07:08.845Z",\n' +
      '        "suppressionMessage": "Customer is unrecognized"\n' +
      '    },\n' +
      '    "responseType": "SUPPRESSION"\n' +
      '}'
  console.log()
  console.log()
  console.log()
  console.log(JSON.parse(r).responseType)
