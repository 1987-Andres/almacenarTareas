function filtrarPorTarea(pTitulo, pListaTareas) {
    const listaFiltrada = pListaTareas.filter(tarea => tarea.prioridad.toLowerCase() === pTitulo.toLowerCase())

    return listaFiltrada
}

function filtrarPorPrioridad(pPrioridad, pListaPrioridades) {
    const listaFiltrada = pListaPrioridades.filter(tarea => tarea.prioridad.toLowerCase() === pPrioridad.toLowerCase())

    return listaFiltrada
}

function buscarPorPalabra(pPalabra, pLista) {
    let palabra = pPalabra.toLowerCase().trim();
    let listaFiltrada = pLista.filter(tareas => {
        return tareas.titulo.toLowerCase().includes(palabra)
    })

    return listaFiltrada;

}

function saveTarea(pNew, pList) {
    pList.push(pNew);

    pintarUnaTarea(pNew);
}

// function deleteTarea(pBorrar, pList) {
//     pList.push(pBorrar);

//     pintarUnaTarea(pBorrar);
// }

// function deleteTarea(pList, pId) {
//     let posicionBorrar = pList.findIndex(product => product.id === pId)
//     products.splice(posicionBorrar, 1);
//     console.log(products);
// }
