import { APIconect } from "./APIconect.js";

const lista = document.querySelector("[data-lista-productos]");



function nuevoProducto(urlImagen,nombre,precio,id) {

    const producto = document.createElement("li");
    producto.className = "productos__item";
    producto.innerHTML = `<img src="${urlImagen}" alt="imagen del producto">
                        <p class="nombre__producto">${nombre}</p>
                        <div class="detalles__productos">
                            <p>${precio}</p>
                            <button class="boton__producto" data-boton-id="${id}"><img src="./assets/Vector.svg" alt="boton para borrar articulo" class="icono__borrar""></button>
                        </div>`

// obtiene el valor del id de elemento y lo añade al boton del boton
const botonBorrar = producto.querySelector("[data-boton-id]");
const idBoton = botonBorrar.getAttribute('data-boton-id');
            console.log(idBoton);
    
    return producto;
    
}

//extrae los videos y su informacion del servidor y las añade al index.html con nuevoProducto()
async function mostrarProducto() {
    try{
    const listaAPI = await APIconect.listaProductos();
    console.log(listaAPI);
    
    listaAPI.forEach(producto =>lista.appendChild(nuevoProducto(producto.imagen,producto.nombre,producto.precio,producto.id)));

    
}

    catch{
        alert(' mostrarProducto() Ha ocurrido un problema con la conexion :(');
    }
}

// async function borrarProducto() {
//     try{
//         const listaAPI = await APIconect.listaProductos();
        
//         listaAPI.forEach(producto =>lista.appendChild(nuevoProducto(producto.imagen,producto.nombre,producto.precio,producto.id)));
    
        
//     }
    
//         catch{
//             alert('Ha ocurrido un problema con la conexion :(');
//         }
    
// }
// borrarProducto();
mostrarProducto();




