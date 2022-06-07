import { listarvilao, vilao } from '../repository/animerepository.js';

import {Router} from 'express'
const server = Router();

server.post('/vilao/nome', async (req,resp) => {
    try {
        const {nome} = req.body
        const x = await listarvilao(nome);
        resp.send({
            resposta:x
        })
       
    } 
    catch (err) {
        resp.status(400).send({
           erro : err.message
        });
    }
})

server.get('/vilao', async (req,resp) => {
    try {
        const x = await vilao();
        resp.send(x);   
    } 
    catch (err){
        resp.status(404).send({ 
            erro : err.message
       });
    }
      
})

export default server;