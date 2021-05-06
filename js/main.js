let sectionTareas = document.querySelector('#tareas');
let btnNuevaTarea = document.querySelector("#guardar");
let idActual;

function pintarUnaTarea(pTareaJson) {

    let article = document.createElement('article');
    article.dataset.id = pTareaJson.idTarea;
    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    let hr = document.createElement('hr');
    let botonBorrar = document.createElement('button');
    botonBorrar.addEventListener('click', borrarElementos);
    botonBorrar.innerText = "borrar";
    let contentH3 = document.createTextNode(`${pTareaJson.titulo}`);

    div.innerHTML = `
        <p>Id: ${pTareaJson.idTarea}</p>
        <p>Prioridad: ${pTareaJson.prioridad}</p>
        `;

    h3.appendChild(contentH3);
    div.appendChild(botonBorrar);
    article.appendChild(h3);
    article.appendChild(div)
    article.appendChild(hr);


    sectionTareas.appendChild(article);
    article.classList.add(tareas.prioridad);
}

function printTodasTareas(pListTareas) {
    sectionTareas.innerHTML = "";
    pListTareas.forEach(tarea => {
        pintarUnaTarea(tarea);
    });
}

printTodasTareas(tareas)

let selectorPrioridad = document.querySelector('#ordenar');

selectorPrioridad.addEventListener('change', pintarPrioridad);

function pintarPrioridad(event) {
    let prioridad = event.target.value;

    if (prioridad !== "") {
        const listaPrioridad = filtrarPorPrioridad(prioridad, tareas);
        printTodasTareas(listaPrioridad);
    } else {
        printTodasTareas(tareas);
    }
}

let search = document.querySelector('#search');
search.addEventListener('input', recogerDatosSearch);


function recogerDatosSearch(event) {
    if (event.target.value !== "") {
        let listaFiltrada = buscarPorPalabra(event.target.value, tareas);
        printTodasTareas(listaFiltrada);
    } else {
        printTodasTareas(tareas);
    }
}

btnNuevaTarea.addEventListener('click', guardarTarea);

function guardarTarea(event) {
    event.preventDefault();
    idActual++;
    const newTarea = {
        id: idActual,
        titulo: titulo.value,
        prioridad: prioridad.value,
    }

    saveTarea(newTarea, tareas)

}

// btnBorrarTarea.addEventListener('click', borrarElementos);


function llamarBotones() {
    let borrar = document.querySelectorAll("#borrado");
    for (let boton of borrar) {
        boton.addEventListener('click', borrarElementos)
    }
}


function borrarElementos(event) {

    let article = event.target.parentNode.parentNode;
    console.log(article);
    article.remove();
    let id = parseInt(article.dataset.idTarea);


    let position = tareas.findIndex(tarea => tarea.idTarea == id);

    tareas.splice(position, 1);

}
