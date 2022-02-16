import {usersData} from './DataUsers.js';
/* 


    1) get de data


inyection data in button: 
        name,
        apellido,

status tlf: 'icon in button modificar'
status agente : 'color button modificar'


inyection data in card collapse:
        ext,
        in,
        out,
        nivel,
        grupo,
        localizacion,
        ultimo estado

*/

const push = usersData;

function getDataUsers(pushData = push){
    var data = []
    for (let i = 0; i < pushData.length; i++) { 
        data[i] = [ 
        pushData[i].id, 
        pushData[i].nombre, 
        pushData[i].apellido, 
        pushData[i].in, 
        pushData[i].out, 
        pushData[i].ext, 
        pushData[i].nivel, 
        pushData[i].grupo, 
        pushData[i].localizacion, 
        pushData[i].ultimoEstado, 
        pushData[i].actividadTelefono, 
        pushData[i].actividadAgente, 
        
    ]; 
}

// console.log(pushData); //Returns all the data 
// console.log(pushData[1]); //Returns undefined 
return data;

}

getDataUsers();

