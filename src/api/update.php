<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: PUT, POST, GET, DELETE, OPTIONS');
// obtenir les données
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);
	
  // Enlever les majuscules, espaces, pour stocker plus facilement
  $Destination = mysqli_real_escape_string($con, trim($request->data->Destination));
  $dateAller = mysqli_real_escape_string($con, trim($request->data->dateAller));
  $dateRetour = mysqli_real_escape_string($con, trim($request->data->dateRetour));
  $objet = mysqli_real_escape_string($con, trim($request->data->objet));
  $Passagers = mysqli_real_escape_string($con, (int)($request->data->Passagers));
  $gps = mysqli_real_escape_string($con, (int)($request->data->gps));
  $voiture = mysqli_real_escape_string($con, trim($request->data->voiture));

  // Mise a jour de la réservation
  $sql = "UPDATE `reservation` SET `Destination`='$Destination',`dateAller`='$dateAller',`dateRetour`='$dateRetour',`objet`='$objet',`Passagers`='$Passagers',`gps`='$gps',`voiture`='$voiture' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
