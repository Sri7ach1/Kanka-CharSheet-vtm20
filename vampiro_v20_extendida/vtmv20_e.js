function replaceTextWithLinks(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let text = container.innerHTML;
    
    // Decodificar entidades HTML para convertir &lt; en < y &quot; en "
    const decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };
    
    // Buscar los elementos <li> dentro del contenedor
    const listItems = container.querySelectorAll("li");
    
    listItems.forEach(item => {
        item.innerHTML = decodeHtml(item.innerHTML); // Decodificar HTML
    });
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    replaceTextWithLinks("overview-3"); // ID del contenedor con la lista
});