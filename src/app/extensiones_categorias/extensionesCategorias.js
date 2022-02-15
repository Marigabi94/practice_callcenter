function cargarCategorias() {
    var array = ["Nivel", "Grupo", "Promocion", "Sancionado", "Localizacion"];
    array.sort();
    addOptions("categoria", array);
}


//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (categoria in array) {
        var opcion = document.createElement("option");
        opcion.text = array[categoria];
        opcion.value = array[categoria].toLowerCase();
        selector.add(opcion);
    }
}



function cargarSubCategoria() {
    // Objeto de categoria con subcategoria
    var listaSubCategorias = {
      nivel: ["1. Agente", "2. Buzon de boz"],
      grupo: [],
      promocion: [],
      sancionado: [],
      localizacion: []

    }


    var categorias = document.getElementById('categoria')
    var subCategorias = document.getElementById('subCategoria')
    var categoriaSeleccionada = categorias.value

    // Se limpian las subCategorias
    subCategorias.innerHTML = '<option value="">Seleccione</option>'

    if(categoriaSeleccionada !== ''){
        // Se seleccionan las subCategorias y se ordenan
        categoriaSeleccionada = listaSubCategorias[categoriaSeleccionada]
        categoriaSeleccionada.sort()

        // Insertamos las subCategorias
        categoriaSeleccionada.forEach(function(subCategoria){
          let opcion = document.createElement('option')
          opcion.value = subCategoria
          opcion.text = subCategoria
          subCategorias.add(opcion)
        });
    }
}



// TODO: ACTIVIDADES DE TELEFONO

function cargarActividadesTelefono() {
    var array = ["NOT INUSE", "INUSE", "ONHOLD", "MUTE"];
    array.sort();
    addOptions("actividadesTelefono", array);
}

//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (actividadesTelefono in array) {
        var opcion = document.createElement("option");
        opcion.text = array[actividadesTelefono];
        opcion.value = array[actividadesTelefono].toLowerCase();
        selector.add(opcion);
    }
}
// TODO: ACTIVIDADES DE AGENTE

function cargarActividadesAgente() {
    var array = ["Disponible", "Descanso", "Reunion", "Desconectado"];
    array.sort();
    addOptions("actividadesAgente", array);
}

//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (actividadesAgente in array) {
        var opcion = document.createElement("option");
        opcion.text = array[actividadesAgente];
        opcion.value = array[actividadesAgente].toLowerCase();
        selector.add(opcion);
    }
}




window.addEventListener("load", function() {
    cargarCategorias();
    cargarActividadesTelefono();
    cargarActividadesAgente();
});