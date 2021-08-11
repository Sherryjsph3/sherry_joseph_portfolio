
<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $mailTo = "sherryjoseph985@gmail.com";
  $headers = "From: ".$email;
  $txt = " You have received an email from ".$name. '.\n\n'.$message;

  mail($email, $subject, $txt, $headers);
  header("Location: index.html?mailsend");
}
 
  
?>