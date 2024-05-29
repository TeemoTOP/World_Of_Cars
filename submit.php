<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_data";

// Tworzenie połączenia
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzanie połączenia
if ($conn->connect_error) {
    die("Połączenie nieudane: " . $conn->connect_error);
}

// Pobieranie danych z formularza
$first_last_name = $_POST['first_last_name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Przygotowanie zapytania SQL do wstawienia danych
$stmt = $conn->prepare("INSERT INTO users (first_last_name, phone, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $first_last_name, $phone, $email);

// Wykonanie zapytania
if ($stmt->execute()) {
    echo "Dziękujemy za przesłanie danych, konsultant skontaktuje się z Tobą.";
} else {
    echo "Błąd: " . $stmt->error;
}

// Zamknięcie połączenia
$stmt->close();
$conn->close();
?>
