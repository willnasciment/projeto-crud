const mongoose = require('mongoose')

// função chamada no server.js na linha (8)
function connect () {

    mongoose.connect('mongodb://127.0.0.1:27017/projeto-crud')
    
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('Connected to database!')
    })
    
    db.on('error', console.error.bind(console, 'connection error: '))
    
}
// exportando a função para o server.js na linha(3)
module.exports = {
    connect
}
