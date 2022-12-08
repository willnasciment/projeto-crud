const express = require('express')
const path = require('path')

const app = express()

// Definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilita server para receber dados via post (formulário)
app.use(express.urlencoded({extended: true}))

// rotas
app.get('/',(req, res) => {
    res.render('index', {
        title: 'Título teste'
    })
})

// 404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada!')
})

// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))