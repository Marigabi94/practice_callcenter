import {usersData} from './DataUsers.js';

const $collapse = document.querySelector('#collapse')


function getDataUsers(pushData,pushCollapse){
    let collapse = ''

    for (let i = 0; i < pushData.length; i++) { 

 
    collapse += '<div class="col collapseItems"><p><button class="btn btnCollapse widthCollapse '+pushData[i].actividadAgente+'" type="button" data-bs-toggle="collapse" data-bs-target="#'+pushData[i].name+pushData[i].id+'" aria-expanded="false" aria-controls="'+pushData[i].name+pushData[i].id+'">'+pushData[i].nombre+' '+pushData[i].apellido+'<span class=" icon '+pushData[i].actividadTelefono+'"></span></button></p><div class="row"><div class="col"><div class="collapse multi-collapse widthCollapse" id="'+pushData[i].name+pushData[i].id+'"><div class="card card-body column" style ="width: 250px; font-size:12px;"><div class="col row justify-content-between" style="width: initial;" ><p class="col align-self-start"><b>Nivel:</b>'+pushData[i].nivel+'</p><p class="col align-self-end"><b>Ext:</b>'+pushData[i].ext+'</p></div><div class="col row justify-content-between" style="width: initial;"><p class="col"><b>IN:</b>'+pushData[i].in+'</p><p class="col"><b>OUT:</b>'+pushData[i].out+'</p></div><p class="col"><b>Grupo:</b>'+pushData[i].grupo+'</p><p class="col"><b>Localización:</b>'+pushData[i].localizacion+'</p><p class="col"><b>Ultimo estado:</b>'+pushData[i].ultimoEstado+'</p>  </div></div></div></div></div>'

    

}
    pushCollapse.innerHTML = collapse 
return data;


}

getDataUsers(usersData, $collapse);
