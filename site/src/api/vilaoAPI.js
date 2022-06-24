import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarVilao( nome, maldade, poder){
        const resposta = await api.post('/vilao',{
            nome: nome,
            maldades : maldade,
            poder: poder
        })
        return resposta.data;
}

export async function listarViloes(){
    const resposta = await api.get('/vilao');
    return resposta.data;

} 