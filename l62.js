const userProfile = {
    name: 'Bogdan',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userInfo = ( {name, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name} has no comment`
    }
    return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile))