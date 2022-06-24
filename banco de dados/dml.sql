use Vilao;

insert into tb_vilao(nm_vilao, ds_maldade, ds_poder)
	values('Thanos', 'Destruir a Humanidade', true);
    
select id_vilao	id,
	   nm_vilao,
       ds_maldade,
       bt_poder
from tb_vilao;