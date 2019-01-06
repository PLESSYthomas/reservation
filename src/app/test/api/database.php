<?php

session_start();

$user = $_SESSION['user'];

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
	