<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: PUT, POST, GET, DELETE, OPTIONS');
require 'connect.php';

session_start();
//Permet d'identifier l'admin
$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST) && !empty($_POST)){
  $username = $_POST['username'];
  $password = $_POST['password'];

  if($username == 'admin' && $password== 'admin'){
	  $_SESSION['user'] = 'admin';
    ?>
	
    {
      "success":true,
      "secret": "message de l'admin"
    }
    <?php
  } else {
	  ?>
  {
    "success":false,
    "message": "Invalide"
  }
    <?php
  }
} else{
  ?>
{
   "success":false,
   "message": "nop"
  }
  <?php
  }
  ?>
