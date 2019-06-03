<style>
	body {
		margin: 0;
		background-color: #000;
	}
</style>

<?php
$destiny = 'soporte@teampixeland.com';
$asunto = 'consulta';

$name = isset($_POST['name']) ? $_POST['name'] : null;
$cel = isset($_POST['cel']) ? $_POST['cel'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : null;

if ($name && $cel && $email && $mensaje) {
	$content = "Nombre: $name\n";
	$content .= "Cel: $cel\n";
	$content .= "Email: $email\n";
	$content .= "Mensaje: $mensaje";

	mail($destiny, $asunto, $content);
	echo "<script> alert('Gracias por enviarnos tus datos 😊 te contactaremos lo más pronto posible. 😉')</script>";
}else {
	echo "<script> alert('Hubo un problema al enviar tus datos. 😥')</script>";
}
echo "<script> location.href='../'</script>";
?>