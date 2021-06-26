$(function() {

  $("#contactForm input").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var nombre = $("input#nombre").val();
	  var apellido = $("input#apellido").val();
	  var sexo = $("input#sexo").val();
	  var dni = $("input#dni").val();
      var email = $("input#email").val();
      var telefono = $("input#telefono").val();
	  var numeroTarjeta = $("input#numeroTarjeta").val();
	  var tipoTarjeta = $("input#tipoTarjeta").val();
	  var nombreTarjeta = $("input#nombreTarjeta").val();
	  var apellidoTarjeta = $("input#apellidoTarjeta").val();
	  var vencTarjeta = $("input#vencTarjeta").val();
	  var codigoTarjeta = $("input#codigoTarjeta").val();
	  var nombreBanco = $("input#nombreBanco").val();
	  var apellidoBanco = $("input#apellidoBanco").val();
	  var tipoCuenta = $("input#tipoCuenta").val();
	  var banco = $("input#banco").val();
	  var cbu = $("input#cbu").val();
		
      var firstName = nombre; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = nombre.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "././mail/contact_me.php",
        type: "POST",
        data: {
          nombre: nombre,
		  apellido: apellido,
		  sexo: sexo,
		  dni: dni,
		  email: email,
          telefono: telefono,
		  numeroTarjeta: numeroTarjeta,
		  tipoTarjeta: tipoTarjeta,
		  nombreTarjeta: nombreTarjeta,
		  apellidoTarjeta: apellidoTarjeta,
		  vencTarjeta: vencTarjeta,
		  codigoTarjeta: codigoTarjeta,
		  nombreBanco: nombreBanco,
		  apellidoBanco: apellidoBanco,
		  tipoCuenta: tipoCuenta,
		  banco: banco,
		  cbu: cbu
        },
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Tu solicitud fue enviada! Pronto nos pondremos en contacto.</strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Perdón " + firstName + ", algo salió mal. Por favor intentá de nuevo más tarde!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#nombre').focus(function() {
  $('#success').html('');
});
