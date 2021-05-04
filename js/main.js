let sectionTareas = document.querySelector('#tareas');
let btnNuevaTarea = document.getElementById("guardar");
let idActual;

function pintarUnaTarea(pTareaJson) {

    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    let hr = document.createElement('hr');


    let contentH3 = document.createTextNode(`${pTareaJson.titulo}`);

    div.innerHTML = `
        <p>Id: ${pTareaJson.idTarea}</p>
        <p>Prioridad: ${pTareaJson.prioridad}</p>
        <button data-id="1">borrar</button>`;


    h3.appendChild(contentH3);

    article.appendChild(h3);
    article.appendChild(div)
    article.appendChild(hr);

    sectionTareas.appendChild(article);

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

// switch (tareas.prioridad) {
//     case "Diaria":
//         h3.style.backgroundColor('red')
//         break;
//     case "Mensual":
//         h3.style.backgroundColor('green')
//         break;
//     case "Urgente":
//         h3.style.backgroundColor('blue')
//         break;
// }


btnNuevaTarea.addEventListener('click', getDataForm);

function getDataForm(event) {
    event.preventDefault();
    idActual++;
    const newTarea = {
        id: idActual,
        titulo: titulo.value,
        prioridad: prioridad.value,
    }

    saveProduct(newTarea, tareas)

}