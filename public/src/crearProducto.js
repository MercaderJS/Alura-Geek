import { APIconect } from "./APIconect.js";    

const formulario = document.querySelector("[data-formulario]");


async function crearProducto(evento) {
    evento.preventDefault();//evita que el navegador recargue la pagina cuando se envia el formulario
    

    const urlImagen = document.querySelector("[data-url-imagen]").value
    const nombre = document.querySelector("[data-nombre-producto]").value;
    const precio = document.querySelector("[data-precio-producto]").value;

    try{ //si se sube al servidor el nuevo producto correctamente
    if(urlImagen == ""|| nombre == "" || precio == ""){
        alert("No pueden haber campos vacíos");
        return;
    }
    await APIconect.crearProducto(urlImagen,nombre,precio);
    
    
    } //si hay un problema al enviar el video al servidor
    catch(error){
        alert("UPS! Ocurrió un error al agregar el producto");
    }
}

formulario.addEventListener("submit",evento => crearProducto(evento));
