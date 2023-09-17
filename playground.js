const password = require('./lib/password');

(async() => {
    try {
        const genpass = await password.generateAdminPassword();
        console.log(genpass)
    } catch (error) {
        console.log(error)
    }
})()