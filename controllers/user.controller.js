const {response, request} = require('express');

const index = (req = request, res = response) => {

    const params = req.query;

    res.json({
        msg: 'GET API - controller',
        params
    })
};

const store =  (req, res) => {


    const {nombre, edad} = req.body;

    res.json({
        msg: 'POST API - controller',
        nombre,
        edad,
    })
};

const update =  (req, res) => {

    const {id} = req.params;
    res.json({
        msg: 'PUT API - controller',
        id
    })
};

const remove =  (req, res) => {
    res.json({
        msg: 'DELETE API - controller'
    })
};

const update2 =  (req, res) => {
    res.json({
        msg: 'PATCH API - controller'
    })
};




module.exports = {
    index,
    store,
    update,
    remove,
    update2
}