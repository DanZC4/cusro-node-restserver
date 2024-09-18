require('dotenv').config();

const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';
        //middlewares
        this.middlewares();
        this.routes();
    }

    middlewares() {
        //cors 
        this.app.use(cors());

        //lectura y parceo del body

        this.app.use(express.json());
        

        this.app.use(express.static('public'))
    }

    routes() {

        this.app.use(this.usuarioPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port)
        })
    }

}


module.exports = Server