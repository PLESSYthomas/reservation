<?php
/**
 * Retourn la liste des réservations
 */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: PUT, POST, GET, DELETE, OPTIONS');
require 'connect.php';
    
$cars = [];
$sql = "SELECT id,dateAller,dateRetour,objet,Passagers,gps,voiture FROM reservation";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['id']    = $row['id'];
    $cars[$cr]['dateAller'] = $row['dateAller'];
    $cars[$cr]['dateRetour'] = $row['dateRetour'];
	$cars[$cr]['objet'] = $row['objet'];
	$cars[$cr]['Passagers'] = $row['Passagers'];
	$cars[$cr]['gps'] = $row['gps'];
	$cars[$cr]['voiture'] = $row['voiture'];
    $cr++;
  }
    
  echo json_encode(['data'=>$cars]);
}
else
{
  http_response_code(404);
  echo("abc");
}
?>