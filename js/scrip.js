document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();

    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0 || nombre.length < 10) {
      alert('Necesitamos que nos indiques tu nombre completo');
      return;
    }
        
    var doc = document.getElementById('documento').value;
    if (document.querySelector('input[id="rut"]:checked'))
    {
        if(doc.length < 9)
        {
            alert('Ingrese un rut valido')
            return;
        }
    }
    if (document.querySelector('input[id="pasaporte"]:checked'))
    {
        if(doc.length < 8)
        {
            alert('Ingrese un pasaporte valido')
            return;
        }        
    }


    var mensaje = document.getElementById('mensaje').value;

    if (mensaje.length < 50)
    {
        alert('Debe ingresar al menos 50 caracteres en el motivo de su mensaje.')
        return;
    }   

    this.submit();
  }

/*
if (fieldValue.trim().length == 0){

}
if ($("#idElemento").trim().length == 0){

}
if ($("#idElemento").val().trim().length == 0){

}*/
