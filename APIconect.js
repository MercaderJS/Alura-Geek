// convierte los datos extraidos de la API en formato JSON
// funcion para conectarse a la lista de productos del servidor
async function listaProductos() {
    const conexion = await fetch("http://localhost:3001/products");
    const convertirConexion = conexion.json();
    console.log(convertirConexion);
    
    return convertirConexion;
    
}

//crea un nuevo producto en el servidor
async function crearProducto(urlImagen,nombre,precio,id){
    const conexionPost = await fetch("http://localhost:3001/products", {
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


