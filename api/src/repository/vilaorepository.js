import { con } from './connection.js'

export async function listarvilao(nome){
    const comando = 
    `insert into tb_vilao(nm_vilao , ds_maldades, bt_super_poder)
     values(? , ? , ?);`

    const [heroi] = await con.query(comando, [nome.nome])
    return heroi.affectedRows;
}

export async function vilao(viloes)
{
    const comando = 
    `select  ID_VILAO,
    NM_ANIME	 nome,
    DS_MALDADES  maldade,
    BT_SUPER_PODER  poder
    from  TB_VILAO`
     
    const [viloes] = await con.query(comando)
    return viloes;
}


