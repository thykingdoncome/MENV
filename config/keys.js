if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoUrl: 'mongodb+srv://menvstack:menvstack@menvapp-s7tdv.mongodb.net/test',
        secret: 'mysecret'
    }
} else {
    module.exports = {
        mongoUrl: 'mongodb://localhost:27017/MENV',
        secret: 'mysecret'
    }
}