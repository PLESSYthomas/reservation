<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: PUT, POST, GET, DELETE, OPTIONS');
session_start();

$user = $_SESSION['user'];
//permet de verifier si la personne est l'admin
if($user == 'admin'){
	echo '{
		"message":"This is a sercret message only for the admin",
		"success":true
	}';
}
else{
	echo '{
		"message":"hmmm...t es qui?",
		"success":false
	}';
}
?>
	