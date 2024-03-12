<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    
    // Адрес, на который будет отправлено письмо
    $to = "wwesuper146@gmail.com";
    
    // Тема письма
    $subject = "Новая заявка с сайта";
    
    // Содержимое письма
    $message = "Имя: " . $name . "\n";
    $message .= "Телефон: " . $tel . "\n";
    $message .= "Email: " . $email . "\n";
    
    // Дополнительные заголовки
    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: webmaster@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Отправка письма
    mail($to, $subject, $message, $headers);
    
    // Перенаправление обратно на страницу формы после отправки письма
    header("Location: index.html");
    exit;
}
?>