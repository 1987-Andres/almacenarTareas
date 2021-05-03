let sectionTareas = document.querySelector('#tareas');

function pintarUnaTarea(pTareaJson) {

    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    let hr = document.createElement('hr');

    let contentH3 = document.createTextNode(`${pTareaJson.titulo}`);

    div.innerHTML = `
        <p>Id: ${pTareaJson.idTarea}</p>
        <p>Prioridad: ${pTareaJson.prioridad}</p>`;

    h3.appendChild(contentH3);
    //tirar todo dentro del article por orden
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

let selectorPrioridad = document.querySelector('#prioridad');

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