const path = require('path')
const fs = require('fs')
const express = require('express')
// const {
//     redirect
// } = require('express/lib/response')
// const res = require('express/lib/response')
const app = express()

const port = 3000

const catalog_path = path.resolve(__dirname, './data_server/catalog.json')
const cart_path = path.resolve(__dirname, './data_server/cart.json')
const static_dir = path.resolve(__dirname, '../dist/')

app.use(express.static(static_dir))
app.use(express.json())


app.get('/api/v1/cart', (req, res) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.status(500).send(err)
        }
    })
})

app.get('/api/v1/catalog', (req, res) => {
    fs.readFile(catalog_path, 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.status(500).send(err)
        }
    })
})



app.post('/api/v1/cart', (req, res) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
        if (!err) {
            const cart = JSON.parse(data);
            cart.push(req.body);
            fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
                res.sendStatus(201)
            })
        } else {
            res.status(500).send(err)
        }
    })
})

app.get('/api/deletecart/:id', (req, res) => {
    fs.readFile(cart_path, 'utf-8', (err, data) => {
        if (!err) {
            const cart = JSON.parse(data);
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id == req.params.id) {
                    console.log(cart[i])
                    cart.splice(i, 1);
                    fs.writeFile(cart_path, JSON.stringify(cart), 'utf-8', (err, data) => {
                        res.send(JSON.stringify(cart))
                    })
                    break
                }
            }
        }
    })
})


app.listen(port, () => {
    console.log(`example app listtening at http://localhost:${port}`)
})