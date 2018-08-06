<?php
  if($_SERVER['REQUEST_METHOD']=='POST'){
    $name=strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
      // Set a 400 (bad request) response code and exit.
      http_response_code(400);
      echo "Oops! There was a problem with your submission. Please complete the form and try again.";
      exit;
    }
    
    http_response_code(200);
    echo "Thank You! ".$name." ".$email." Your message has been sent.";
  }
?>
