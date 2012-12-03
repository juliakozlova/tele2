<?php
require 'class.phpmailer.php';

$return = array('response'=>'success');

if (isset($_POST['name'] && !empty($_POST['name'])) && isset($_POST['phoneNum'] && !empty($_POST['phoneNum']))) {

	try {
		$mail = new PHPMailer(true); 

		$body             = "Была оставлена заявка на подключение к корпоративным тарифным планам Tele2.<br />Имя:".$_POST['name']."<br />Телефон:".$_POST['phoneNum'];

		$mail->IsSMTP();                           // tell the class to use SMTP
		$mail->SMTPAuth   = true;                  // enable SMTP authentication
		$mail->Port       = 25;                    // set the SMTP server port
		$mail->Host       = "mail.tele2.ru"; // SMTP server
		$mail->Username   = "InfoGraphic@tele2.ru";     // SMTP server username
		$mail->Password   = "bisnesstarif2012";            // SMTP server password

		$mail->IsSendmail();  // tell the class to use Sendmail

		$mail->AddReplyTo("test@test.ru","InfoGraphic");

		$mail->From       = "test@test.ru";
		$mail->FromName   = "InfoGraphic";

		$to = "avilchinsky@gmail.com";

		$mail->AddAddress($to);

		$mail->Subject  = "Заявка на подключение к бизнес-тарифу";

		$mail->AltBody    = "Была оставлена заявка на подключение к корпоративным тарифным планам Tele2. Имя: ".$_POST['name'].", Телефон:".$_POST['phoneNum']; // optional, comment out and test
		$mail->WordWrap   = 587; // set word wrap

		$mail->MsgHTML($body);

		$mail->IsHTML(true); // send as HTML

		$mail->Send();
	} catch (phpmailerException $e) {
		$return['response'] = 'error';
		$return['message'] = $e->errorMessage();
	}
} else {
	$return['response'] = 'error';
	$return['message'] = 'Не получены данные';
}
echo json_encode($return);
?>