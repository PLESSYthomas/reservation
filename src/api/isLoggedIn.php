<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: PUT, POST, GET, DELETE, OPTIONS');
require 'connect.php';
session_start();

//vérifie si l'utilisateur est connecté
if(isset($_SESSION['user'])) {
	echo '{"statuts":true}';
}
else{
	echo '{"status":false}';
}
