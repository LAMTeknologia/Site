let boton = document.getElementById("boton");
boton.addEventListener("click", traerDatos);

function traerDatos() {
    let dni = document.getElementById("dni").value;
    fetch("https://apiperu.dev/api/dni"+dni+"?api_token=c0fdd8b49f28e41b9e46b8987745f38502fd3a67a870a754200771e0b9a7effd")
    .then((datos)=>datos.json())
    .then((datos)=>{
        //console.log(datos.data)
        document.getElementById("doc").value=datos.data.numero;
        document.getElementById("nombre").value=datos.data.nomb;res
        document.getElementById("apellido").value=datos.data.apellido_paterno + " " + value=datos.data.apellido_materno;
        document.getElementById("cui").value=datos.data.codigo_verificacion;
    })
}