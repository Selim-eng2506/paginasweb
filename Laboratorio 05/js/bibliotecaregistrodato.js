//variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");
//utilizamos la función para registrar del firebase
// function writeUserData(n, a, c) {
//     database.ref("registro/").set({
//       nombre: n,
//       apellido: a,
//       correo : c
//     });
//   }
//creamos un procedimiento para mostrar los datos de la tabla
function Mostrar(){
    //declaramos una variable para contar el numero de filas
    var i=0;
    //selecciono el tbody de la tabla donde voy a mostrar la información
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    //seleccionamos la tabla que se quiere mostrar
    var db=database.ref().child("registro");
    db.once("value", function(snapshot){
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var cor=data.val().correo;
                //declaramos una varible para las filas 
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulocor=fila.insertCell(2);
        //agregamos los valores 
        titulonom.innerHTML=nom;
        tituloape.innerHTML=ape;
        titulocor.innerHTML=cor;
        tbody.appendChild(fila);
        i++;
            })
        }
    })
}
//llamamos a la función Mostrar cuando carga la página
window.onload = Mostrar;
//creamos un procedimiento para limpiar
function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}
//creamos un procedimiento para registrar
function Registrar(){
    if(txtNom.value=="" || txtNom==null){
        alert("Ingrese sus Nombres");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingrese sus Apellidos");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su Correo");
        txtCor.focus();
    }else{
    //capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    //llamando a la funcion para registrar del firebase
    // writeUserData(nom, ape, cor);
    //creamos la tabla si no existiera  y la seleccionamos
    var db=database.ref("registro");
    //asignamos los valores a la tabla que ha sido creada
    var registros=db.push();
    //le paso los campos y los valores que tendrá la tabla
    registros.set({
        nombre:nom,
        apellido:ape,
        correo:cor
    });
    alert("Se registro el dato");
    //llamamos a la función limpiar
    Limpiar();
    //llamamos al procedimiento Mostrar
    Mostrar();
    }
}
//asignamos el procedimiento al botón 
btnRegistrar.addEventListener("click",Registrar);