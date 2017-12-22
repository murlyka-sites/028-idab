<?php

$email = "apply@idab.mba";
$email = "milok.murlika@yandex.ru";
$title = "=?utf-8?b?" . base64_encode( htmlspecialchars("Новая заявка") ) . "?=";

$ip = $_SERVER["REMOTE_ADDR"];
$date = date('d.m.Y H:i:s');
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

$name = @htmlspecialchars($_POST['name']);
$phone = @htmlspecialchars($_POST['phone']);
$mail = @htmlspecialchars($_POST['mail']);

if(empty($name) or empty($phone) or empty($mail)) {
	exit("Не заполнены обязательные поля");
}

$html = 
'<table>
	<tr>
		<td><b>IP:</b></td>
		<td>'.$ip.'</td>
	</tr>
	<tr>
		<td><b>Дата:</b></td>
		<td>'.$date.'</td>
	</tr>
	<tr>
		<td><b>Имя:</b></td>
		<td>'.$name.'</td>
	</tr>
	<tr>
		<td><b>Телефон:</b></td>
		<td>'.$phone.'</td>
	</tr>
	<tr>
		<td><b>Email:</b></td>
		<td>'.$mail.'</td>
	</tr>
</table>';

if(mail($email, $title, $html, $headers))
	echo "Заявка удачно отправлена!";
else
	echo "Ошибка";

	