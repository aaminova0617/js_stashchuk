const userProfile = {
    name: 'Bogdan',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userInfo = ( o ) => {

    if (!o.commentsQty) {
        return `User ${o.name} has no comment`
    }
    return `User ${o.name} has ${o.commentsQty} comments`
}

console.log(userInfo(userProfile))