<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: PUT, POST, GET, DELETE, OPTIONS');
require 'connect.php';

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
  

  // Stockage de la reservation
  $sql = "INSERT INTO `reservation`(`id`,`dateAller`,`dateRetour`,`objet`,`Passagers`,`gps`,`voiture`,`Destination`,statut,commentaire) VALUES (null,'{$dateAller}','{$dateRetour}','{$objet}','{$Passagers}','{$gps}','{$voiture}','{$Destination}','en attente','rien')";
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $car = [
	  
      'dateAller' => $dateAller,
      'dateRetour' => $dateRetour,
	  'Destination' => $Destination,
	  'objet' => $objet,
	  'Passagers' => $Passagers,
      'gps' => $gps,
      'voiture' => $voiture,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$car]);
  }
  else
  {
    http_response_code(422);
	  
  }
}
?>