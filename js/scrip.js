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
        var Fn = {
            // Valida el rut con su cadena completa "XXXXXXXX-X"
            validaRut : function (rutCompleto) {
                if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
                    return false;
                var tmp 	= rutCompleto.split('-');
                var digv	= tmp[1]; 
                var rut 	= tmp[0];
                if ( digv == 'K' ) digv = 'k' ;
                return (Fn.dv(rut) == digv );
            },
            dv : function(T){
                var M=0,S=1;
                for(;T;T=Math.floor(T/10))
                    S=(S+T%10*(9-M++%6))%11;
                return S?S-1:'k';
            }
        }
        
        // Uso de la función
        alert( Fn.validaRut('11111111-1') ? 'Valido' : 'inválido');  
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