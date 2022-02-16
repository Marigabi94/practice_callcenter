const $categoria = document.querySelector('#categoria');
const $agente = document.querySelector('#actividadAgente');
const $telefono = document.querySelector('#actividadTelefono');
const $subCategoria = document.querySelector('#subCategoria');

const arrayCategorias = ["Nivel", "Grupo", "Promocion", "Sancionado", "Localizacion"];
const listaSubCategoria = {
    nivel: ["1. Agente", "2. Buzon de boz"],
    grupo: [],
    promocion: [],
    sancionado: [],
    localizacion: []
}
const arrayActividadesTelefono = ["NOT INUSE", "INUSE", "ONHOLD", "MUTE"];
const arrayActividadesAgente = ["Disponible", "Descanso", "Reunion", "Desconectado"];

function mostrarOption(array, selectUsar){
    let elementos = '<option selected disables>--Seleccione--</option>'

    for(let i=0; i < array.length; i++){
        elementos += '<option value="' +array[i] + '">' + array[i] +
        '</option>'
    }
    selectUsar.innerHTML = elementos
}

mostrarOption(arrayCategorias, $categoria);
mostrarOption(arrayActividadesTelefono, $telefono);
mostrarOption(arrayActividadesAgente, $agente);



$categoria.addEventListener('change', function(){
    let valor = $categoria.value
        
    switch(valor){
        case 'Nivel':
            let nivel = listaSubCategoria.nivel
            mostrarOption(nivel, $subCategoria)
        break
        case 'Grupo':
            let grupo = listaSubCategoria.grupo
            mostrarOption(grupo, $subCategoria)
        break
        case 'Promocion':
            let promocion = listaSubCategoria.promocion
            mostrarOption(promocion, $subCategoria)
        break
        case 'Sancionado':
            let sancionado = listaSubCategoria.sancionado
            mostrarOption(sancionado, $subCategoria)
        break
        case 'Localizacion':
            let localizacion = listaSubCategoria.localizacion
            mostrarOption(localizacion, $subCategoria)
            break
    }
})