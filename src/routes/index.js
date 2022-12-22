const router = require('express').Router()

const customersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// rotas
router.get('/', IndexController.index)

// registro
router.get('/register', customersController.index)
router.post('/register/add', customersController.add)

// listar
router.get('/list', customersController.listUsers)

// editar usuários
router.get('/edit', customersController.formEdit)
router.post('/edit/:id', customersController.edit)

//remover
router.get('/remove/:id', customersController.remove)


// importando no arquivo server.js na linha(4)
module.exports = router





