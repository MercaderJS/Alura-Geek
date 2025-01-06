// convierte los datos extraidos de la API en formato JSON
// funcion para conectarse a la lista de productos del servidor
async function listaProductos() {
    const conexion = await fetch("https://alura-geek-mcmy.onrender.com/products");
    const convertirConexion = conexion.json();
    
    return convertirConexion;
    
}

//crea un nuevo producto en el servidor
async function crearProducto(urlImagen,nombre,precio,id){
    const conexionPost = await fetch("https://alura-geek-mcmy.onrender.com/products", {
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            imagen:urlImagen,
            nombre:nombre,
            precio:`$${precio}`,
            id:id
        })
    });
    
    if (!conexionPost.ok) {
        throw new Error("UPS! Ocurrió un error al enviar el video");
        
    }
    const conexionPostConvertida = conexionPost.json();
    return conexionPostConvertida;
}


export const APIconect = {
    crearProducto, listaProductos
};


