import 'dotenv/config'

import vilaocontroller from './src/controller/vilaocontroller.js'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());
server.use(animecontroller);

server.listen(process.env.PORT, () => console.log(`API conectado na porta ${process.env.PORT}`));


