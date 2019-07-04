<?php 

date_default_timezone_set('Etc/UTC');

require './PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();


$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = "**********";
$mail->Password = "**********"; 

$mail->setFrom('**********', $_POST[name]);
$mail->addAddress('sourabhppati@gmail.com', 'Sourabh Pati');






if(isset($_REQUEST['event']) && $_REQUEST['event']!=''){$event=$_REQUEST['event'];}else{$event='';}
 
    $subject1 = "Query from ".$_POST['name'];

    $mail->Subject = $subject1;

    $message = '<h2><center>My Details</center></h2><br><table rules="all" style="border-color: #666;margin:auto;color:#000;" cellpadding="10">';

      $message .= "<tr style = 'background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) ."</td></tr>";

      $message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";

      $message .= "<tr><td><strong>Subject:</strong> </td><td>" . strip_tags($_POST['subject']) . "</td></tr>";

      $message .= "</table>";

      $message .= '<h2><center>Message</center></h2><br>';
      $message .= '<div style="padding:1.5em;width: 75%;max-width: 540 px;margin: auto;background-color: #696969;color: white;text-align: center;"><h3>'.$_POST['monologue'].'</h3></div>';

      $mail->msgHTML($message);

      $mail->isHTML(true);

      if($mail->send())
      {
        echo "<div class='alert alert-email-success'>Thank you, I have received your message and will get back to you shortly.</div>";
      }
      else
      {
          echo "Mailer Error: " . $mail->ErrorInfo;
      }   
 
?>