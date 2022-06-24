import { con } from "./connection.js";

export async function adicionarVilao(vilao){
    const com = `
    insert into tb_vilao(id_vilao, nm_vilao, ds_maldade, ds_poder)
	            values(?, ?, ?, ?)`
    const [contar] = await con.query(com, [vilao.vilao, vilao.nome, vilao.maldade, vilao.poder ]);
    vilao.id = contar.insertId;

    return vilao;

}

export async function listarViloes(){
    const com = 
    `
    select id_vilao	id,
	       nm_vilao nome,
           ds_maldade maldade,
           ds_poder poder
    from tb_vilao`;
    const [contar] = await con.query(com);
    return contar;
}