/*const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}
console.log(redButton)*/



const buttonInfo = {
    text:'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle

}
console.log(button)
