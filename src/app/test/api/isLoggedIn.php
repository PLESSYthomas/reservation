<?php

session_start();

if(isset($_SESSION['user'])) {
	echo '{"statuts":true}';
}
else{
	echo '{"status":false}';
}
