<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];


$destinatario = "rrrnn100@gmail.com \n";
$asunto = "contacto desde su web \n";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje \n";


mail($destinatario, $asunto, $carta);
header('Location:mensaje_de_envio.html');
?>