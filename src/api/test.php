<?php

  $name="";
  $email="";
  $phone="";
  $gender="Pria";
  $domisili="";
  $address="";
  $lahan="Ya";
  $media="";

  $from="Mitra Lotte Grosir";
  $recipient="mitragrosir@lottemart.co.id";

  if($_SERVER['REQUEST_METHOD']=='POST'){
    if(isset($_POST['name']));
      $name=strip_tags(trim($_POST["name"]));
    if(isset($_POST["email"]));
      $email=filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    if(isset($_POST["phone"]));
      $phone=strip_tags(trim($_POST["phone"]));
    if(isset($_POST['gender']))
      $gender=$_POST['gender'];
    if(isset($_POST['domisili']))
      $domisili=$_POST['domisili'];
    if(isset($_POST['address']))
      $address=$_POST['address'];
    if(isset($_POST['lahan']))
      $lahan=$_POST['lahan'];
    if(isset($_POST['media']))
      $media=$_POST['media'];
    
    if(empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL)){
      http_response_code(400);
      echo "Oops! There was a problem with your submission. Please complete the form and try again.";
      exit;
    } 
    if(empty($phone) OR !is_numeric($phone)){
      http_response_code(400);
      echo "Oops! There was a problem with your submission. Please complete the form and try again.";
      exit;
    }
    if(empty($domisili)){
      http_response_code(400);
      echo "Oops! There was a problem with your submission. Please complete the form and try again.";
      exit;
    }
    if(empty($address)){
      http_response_code(400);
      echo "Oops! There was a problem with your submission. Please complete the form and try again.";
      exit;
    }
    $subject="Message from TMUK Contact Form";
    $headers="From: $from\r\n";
    $message="New email from TMUK Contact Form:\n\n".
              "Nama (Sesuai KTP): ".$name."\n".
              "Email: ".$email."\n".
              "No Telepon (WA): ".$phone."\n".
              "Jenis Kelamin: ".$gender."\n".
              "Domisili: ".$domisili."\n".
              "Alamat Lengkap: ".$address."\n".
              "Ada Lahan: ".$lahan."\n".
              "Tahu TMUK dari: ".$media."\n";
    mail($recipient,$subject,$message,$headers);
    http_response_code(200);
    echo $message;//"Thank You! ".$name." ".$email." Your message has been sent.";
  }else{
    http_response_code(400);
    exit;
  }
?>
