import { adicionarVilao, listarViloes } from '../repository/vilaoRepository.js'

import { Router } from 'express'
const server = Router();

server.post('/vilao', async (req, resp) => {
    try {
        const inserirNovoVilao = req.body;

        const novoVilao = await adicionarVilao(inserirNovoVilao);

        resp.send(novoVilao)

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/vilao', async (req, resp) =>{
    try {
        const r = await listarViloes();
        resp.send(r);
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


export default server;