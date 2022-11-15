CREATE DATABASE IF NOT EXISTS Restaurante;

use Restaurante;

create table carta(
    id int(11) not null auto_increment,
    platos varchar(50) default null,
    descripcion varchar(100) default null,
    precio float(11) default null,
    disponibilidad boolean not null default 1,
    primary key(id)
);

describe carta;

insert into carta values 
    (1, 'macarrones', 'ajo, tomate frito natural', 6.75, 1),
    (2, 'paella', 'marisco,legumbres etc ', 8.20, 1),
    (3, 'tacos mexicanos', 'tortita, carne, verduras etc', 8, 1),
    (4, 'buñuelos de bacalado', 'con salsa de la casa  ', 10.50, 1),
    (5, 'lomo al ajillo', 'lomo, patatas fritas ', 6.50, 1),
    (7, 'tiramisú', 'casero de la casa', 4, 1),
    (8, 'ensalada de verano', 'legumbres, marisco etc', 5.0, 1),
    (10, 'pixto', 'verduras', 5.0, 1);
    
/*COMANDOS PARA INICIAR XAMMP
    cd /opt/lampp  
    sudo ./manager-linux-x64.run
*/