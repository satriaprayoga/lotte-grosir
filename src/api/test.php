<?php 
echo ($_POST);
/* header('Content-type: application/json');
header('Access-Control-Allow-Headers: Content-Type');
header("Access-Control-Allow-Origin: *");
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);
$name = $input['name'];
$email = $input['email'];
$message = "msg:";//$input['message'];
$number = 10;//$input['number'];
$result['message'] = '';
$result['error']  = false;
if($name){
  $result['message']  = "Posted Values => ".$name."-".$email."-".$message."-".$number;
  $result['error']  = false;
}
else {
  $result['error']  = 'Form submission failed.';
}

echo json_encode($result); */ 
?>