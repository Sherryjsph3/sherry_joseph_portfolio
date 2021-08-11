<?php

$name = $_POST['name'];
$email= $_POST['emailaddess'];
$subjectline= $_POST['subject'];
$message= $_POST['message'];

$to = "Sherryjoseph985@gmail.com";

$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Subject = " . $subjectline . "\r\n Message =" . $message;
$headers = "From: noreply@inspiring-visvesvaraya-10f1e8.netlify.app" . "\r\n" .
"CC: ";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>