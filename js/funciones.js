function filtrarPorTarea(pTitulo, pListaTareas) {
    const listaFiltrada = pListaTareas.filter(tarea => tarea.prioridad.toLowerCase() === pTitulo.toLowerCase())

    return listaFiltrada
}

function filtrarPorPrioridad(pPrioridad, pListaPrioridades) {
    const listaFiltrada = pListaPrioridades.filter(tarea => tarea.prioridad.toLowerCase() === pPrioridad.toLowerCase())

    return listaFiltrada
}

