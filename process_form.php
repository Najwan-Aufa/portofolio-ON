<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = htmlspecialchars($_POST['full_name']);
    $email_address = htmlspecialchars($_POST['email_address']);
    $mobile_number = htmlspecialchars($_POST['mobile_number']);
    $email_subject = htmlspecialchars($_POST['email_subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Konfigurasi server SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Gunakan host SMTP Gmail
        $mail->SMTPAuth = true;
        $mail->Username = 'programnajwan@gmail.com'; // Ganti dengan email Gmail Anda
        $mail->Password = '@najwan09'; // Ganti dengan password Gmail Anda atau app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Pengaturan email
        $mail->setFrom($email_address, $full_name);
        $mail->addAddress('najwanaufa09@gmail.com'); // Ganti dengan email tujuan
        $mail->Subject = $email_subject;
        $mail->Body = "Name: $full_name\nMobile: $mobile_number\nMessage:\n$message";

        // Kirim email
        $mail->send();
        echo "Message sent successfully!";
    } catch (Exception $e) {
        echo "Failed to send message. Error: {$mail->ErrorInfo}";
    }
}
?>
