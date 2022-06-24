import './cadastrarvilao.scss';
import { cadastrarVilao } from '../../api/vilaoAPI.js';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';




export default function Cadastrar() {
    const [nome, setNome] = useState('');
    const [maldade, setMaldade] = useState('');
    const [poder, setPoder] = useState(false);


    async function salvarVilao() {

        const novoCadastro = await cadastrarVilao(nome, maldade, poder)
        setId(novoCadastro.id);
        toast.white('Vilão cadastrado com sucesso!😊')

    }


    function novoClick() {
        setNome('');
        setMaldade('');
        setPoder(false);

    }
    return (

        <main className='paginatotal'>
            <div>
                <h1>CADRASTRE SEU VILÃO AQUI :</h1>
            </div>

            <div className='cadrastro'>
                <label>Nome:</label>
                <input type="text" placeholder='Insira o nome do vilão aqui' value={nome} onChange={e => setNome(e.target.value)} />
            </div>

            <div className='cadrastro'>
                <label>Maldade:</label>
                <input type="text" placeholder='Insira a maldade do seu vilão aqui ' value={maldade} onChange={e => setMaldade(e.target.value)} />
            </div>

            <div className='cadrastro'>
                <label></label>
                <input type='checkbox' checked={poder} onChange={e => setPoder(e.target.checked)} />
            </div>


            <div className='botoes'>
                <button><Link to='/consultar'>VILOES CADASTRADOS</Link></button>
                <button><a onClick={salvarVilao}>CADASTRAR</a></button>
            </div>

        </main>


    );


}