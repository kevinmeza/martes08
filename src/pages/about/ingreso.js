import { getComponent } from "@angular/core/src/linker/component_factory_resolver";

var db=firebase.firestore();

function agregarDatos(){

    var nombre=document.getElementById("txt_nombre").value;
var apellido=document.getElementById("txt_apellido").value;
var edad=document.getElementById("txt_edad").value;
var mail=document.getElementById("txt_mail").value;
    
    db.collection("users").doc().set({
        name: nombre,
        lastname:apellido,
        age: edad,
        email :mail
    })
    .then(function() {
        console.log("holamundo");
    })
    .catch(function(error) {
        console.error("fallasteholamundo ", error);
    });
    
    


}