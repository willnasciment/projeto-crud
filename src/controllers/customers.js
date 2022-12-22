const customersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'

function index(req, res) {
    res.render('register', {
        title: defaultTitle
    })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new customersModel ({
        name,
        age,
        email,
        password: passwordCrypto,
    })
    
    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Cadastro realizado com sucesso!'
    })
}


async function listUsers(req, res) {
    const users = await customersModel.find()

    res.render('listUsers', {
        title: 'Listagem de usuários',
        users,
    })
}

async function formEdit(req, res) {
    const { id } = req.query

    const user = await customersModel.findById(id)

    res.render('editUsers' , {
        title: 'Editar usuário',
        user,
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params

    const user = await customersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('editUsers', {
        title: 'Editar usuário',
        user,
        message: 'Usuário alterado com sucesso!'
    })
}


async function remove(req, res) {
    const { id } = req.params

    const remove = await customersModel.deleteOne({ _id: id })

    if (remove.ok) {
        res.redirect('/listUsers')
    }
}

module.exports = {
    index,
    add,
    listUsers,
    formEdit,
    edit,
    remove,
}


