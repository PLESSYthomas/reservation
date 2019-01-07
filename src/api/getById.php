<?php
require 'connect.php';

// optenir les données
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  // Extraire les données
  $request = json_decode($postdata);
	
  // Valider.
  if(trim($request->unique_id) == '')
  {
    return;
  }
    
  $uid   = mysqli_real_escape_string($con, trim($request->unique_id));

  // Récupérer les réservations par l'id
  $sql = "SELECT * FROM `cars` WHERE `unique_id` ='{$uid}' LIMIT 1";

  $result = mysqli_query($con,$sql);
  $row = mysqli_fetch_assoc($result);
  
  $json = json_encode($row);
  echo $json;
}
exit;