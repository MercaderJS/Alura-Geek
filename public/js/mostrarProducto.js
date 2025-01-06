import { APIconect } from "./APIconect.js";

const lista = document.querySelector("[data-lista-productos]");


// crea un nuevo li para cada producto
function nuevoProducto(urlImagen,nombre,precio,id) {

    const producto = document.createElement("li");
    producto.className = "productos__item";
    producto.innerHTML = `<img src="${urlImagen}" alt="imagen del producto">
                        <p class="nombre__producto">${nombre}</p>
                        <div class="detalles__productos">
                            <p>${precio}</p>
                            <button class="boton__producto" data-boton-id="${id}"><img src="./assets/Vector.svg" alt="boton para borrar articulo" class="icono__borrar""></button>
                        </div>`

// obtiene el valor del id de elemento y lo añade al boton del elemento 
const botonBorrar = producto.querySelector("[data-boton-id]");
const idBoton = botonBorrar.getAttribute('data-boton-id');

// envia un request delete a la API con el id del boton clicado
botonBorrar.addEventListener("click", () => {

    const borrarProducto = async () => {
        const url = `https://alura-geek-tn2y.onrender.com/products/${idBoton}`; // URL del recurso a eliminar
        
        try {
            const response = await fetch(url, {
                method: "DELETE",
            })
            
            if (response.ok) {
                alert("Producto eliminado con éxito.");
            } else {
                alert("Error al borrar el elemto:");
            }
        } catch (error) {
            alert("Error al borrar el elemento:");
        }
    }
    borrarProducto();
    // Recargara la página actual al borrar el elemento
    window.location.reload();
})
            
    return producto;
    
}

//extrae los videos y su informacion del servidor y las añade al index.html con nuevoProducto()
async function mostrarProducto() {
    try{
    const listaAPI = await APIconect.listaProductos();
    // trae al front cada producto en el servidor
    listaAPI.forEach(producto =>lista.appendChild(nuevoProducto(producto.imagen,producto.nombre,producto.precio,producto.id)));
    // Recargara la página actual al agregar un elemento
    window.location.reload();
}
    catch{
        alert(' mostrarProducto() Ha ocurrido un problema con la conexion :(');
    }
}

mostrarProducto();




