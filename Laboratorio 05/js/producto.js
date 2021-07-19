//crear un vector que contenga la información del producto
var producto=[];

// creamos un procedimiento para poder registrar
function Registrar(nomproducto,catproducto,preproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        categoria:catproducto,
        precio:preproducto,
        cantidad:canproducto
    };
    producto.push(NuevoProducto);
}
//creamos una función para mostrar la información del producto
function Mostrar(){
    return producto;
}