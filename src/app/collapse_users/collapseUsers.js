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

// const $buttonCollapse = document.querySelector('#buttonCollapse')
const $collapse = document.querySelector('#collapse')


function getDataUsers(pushData,pushCollapse){
    var data = []
    let collapse = ''

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

 
    collapse += '<div class="col collapseItems"><p><button class="btn btnCollapse widthCollapse '+pushData[i].actividadAgente+'" type="button" data-bs-toggle="collapse" data-bs-target="#'+pushData[i].name+pushData[i].id+'" aria-expanded="false" aria-controls="'+pushData[i].name+pushData[i].id+'">'+pushData[i].nombre+' '+pushData[i].apellido+'<span class=" icon '+pushData[i].actividadTelefono+'"></span></button></p><div class="row"><div class="col"><div class="collapse multi-collapse widthCollapse" id="'+pushData[i].name+pushData[i].id+'"><div class="card card-body">'+pushData[i].id+' Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.</div></div></div></div></div>'

    

}
    pushCollapse.innerHTML = collapse 
return data;


}

getDataUsers(usersData, $collapse);
