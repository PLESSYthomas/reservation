<?php

if(isset($_POST) && !empty($_POST)){
  $username = $_POST['username'];
  $password = $_POST['password'];

  if($username == 'admin' && $password== 'admin'){
    ?>
    {
      "success":true,
      "secret": "This is the secret no one know but the admin"
    }
    <?php
    else {
	  ?>
  {
    "success":false,
    "secret": "Invalid credentials"
  }
    <?php
  }
} else{
  ?>
{
   "success":false,
   "secret": "Only POST acess accepted"
  }
  <?php
  }
  ?>
