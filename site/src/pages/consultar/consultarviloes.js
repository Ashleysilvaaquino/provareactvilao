import './consultarviloes.scss'

import { listarViloes } from '../../api/vilaoAPI.js'
import { useEffect } from 'react'


export default function Index() {
    const [viloes, setViloes] = useState([]);

    async function carregarTodosViloes() {
        const resp = await listarViloes();
        setViloes(resp)
    }


    useEffect(() => {
        carregarTodosViloes();
    }, [])

    return (
        <main className='viloes'>
            <div className="consultar">

                <h1>CONSULTAR INFORMAÇÕES SOBRE OS VILOES</h1>
                <button><Link to="/">VOLTAR</Link></button>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>IDENTIFICAÇÃO</th>
                        <th>NOME</th>
                        <th>MALDADE</th>
                        <th>PODER</th>

                    </tr>
                </thead>
            </table>
            <tbody>

                {consultas.map(item =>

                    <tr>

                        <td>{item.nome}</td>
                        <td>{item.maldade}</td>
                        <td>{item.poder}</td>

                        <td>
                        </td>



                    </tr>
                )}



            </tbody>
        </main>
    )
} 
























     );
