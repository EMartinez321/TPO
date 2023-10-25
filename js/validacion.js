function validarFormulario() {
    
    var nombre = document.getElementById("nombre").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var mail = document.getElementById("mail").value.trim();

    // Verificar si algún campo está en blanco
    if (nombre === "" || telefono === "" || mail === "") {
      alert("Por favor, complete los campos obligatorios (*) del formulario.");
      return false;
    }

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    // Verificar si el DNI contiene solo 8 dígitos numéricos
    if (telefono.length !== 10) {
      alert("El campo 'telefono' debe contener exactamente 10 dígitos numéricos.");
      return false;
    }
    for (var j = 0; j < telefono.length; j++) {
      var digit = telefono.charAt(j);
      if (digit < "0" || digit > "9") {
        alert("El campo 'telefono' solo puede contener dígitos numéricos.");
        return false;
      }
    }

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
  }
