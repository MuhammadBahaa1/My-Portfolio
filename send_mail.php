<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // تأكد من وجود جميع الحقول المطلوبة
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        $name = htmlspecialchars(trim($_POST['name']));
        $email = htmlspecialchars(trim($_POST['email']));
        $message = htmlspecialchars(trim($_POST['message']));

        // إعداد البريد الإلكتروني
        $to = "muhammadbahaa.b@gmail.com"; // استبدل هذا بعنوان بريدك الإلكتروني
        $subject = "New Message from Contact Form";
        $body = "Name: $name\nEmail: $email\nMessage: $message";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        // إرسال البريد الإلكتروني
        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    } else {
        echo "All fields are required.";
    }
} else {
    echo "Invalid request method.";
}
?>
