// Función para incluir archivos HTML en contenedores específicos
function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    elements.forEach(el => {
        const file = el.getAttribute("data-include");
        fetch(file)
            .then(res => {
                if (res.ok) return res.text();
                throw new Error("Error al cargar el archivo");
            })
            .then(data => {
                el.innerHTML = data;
            })
            .catch(err => console.error(err));
    });
}

// Ejecutar al cargar la página
window.onload = includeHTML;