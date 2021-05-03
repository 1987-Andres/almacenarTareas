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