<!-- docsify serve docs -->
# AEH_Team_Project_World_of_Cars

## Opis projektu
Ta aplikacja internetowa umożliwia użytkownikom zamawianie samochodów marek takich jak BMW, Tesla i Audi. Użytkownicy mogą przeglądać dostępne modele i składać zamówienia online.

## Technologie
Projekt został zrealizowany przy użyciu następujących technologii:
- HTML
- CSS
- JavaScript

## Funkcje
- Przeglądanie dostępnych modeli samochodów
- Wybieranie opcji wyposażenia dla każdego modelu
- Składanie zamówień online
- Przeglądanie ceny i dostępnych promocji

## Jak uruchomić
Aby uruchomić aplikację lokalnie, wykonaj następujące kroki:
1. Sklonuj repozytorium na swoje urządzenie: `git clone https://github.com/Ihar2301/World_Of_Cars.git`
2. Otwórz plik HOME.html w przeglądarce internetowej.


## Diagram klas

![page](https://www.plantuml.com/plantuml/png/TP9DJp8n483l-olwxkb5my7hnX0KFPXe954E7WSwOfD-R3gpCSRutsMsZKiNzWPFFvvvA4jYYDmvM_tZ3tIeMWl6LpiBH6e5KNrNIisLqOqodllFsmZ-y9Ku6h_lYGiQRK6-4E9meercXurwjm4Iq4YxQ5esmHyTkrHxv0VzVvPEPd0hEc7blYTndk8tX3YwO2rsOTcVwDqmmj4jFrLEtn2UQ-yEs8F38XOTc3A_1QBF47K13TrePmx1sn0iWfyitcJ9QTszc4xnEkj6AraeD2k7lkUe9mERlZujCJfgrACXlbv1NFIG0uDTZz-K6BYZOe2fE459aJU9HU3WoIkleZh_W2-zRvHCVxmSPoRbydUkhserdozKVL6dtw2IGSxW9NhTEViB)

## Dokumentacja kodu js/php
### Plik portfolio.js

 * Funkcja wywołująca po załadowaniu okna przeglądarki.
 Znajduje wszystkie paragrafy na stronie i zamienia ich zawartość tak,
 aby pierwsza litera każdego zdania była wielką literą.
 
```javascript
window.onload = function() {
// Pobierz wszystkie elementy <p> na stronie
var paragraphs = document.getElementsByTagName('p');
 
// Przejdź przez każdy paragraf
for (var i = 0; i < paragraphs.length; i++) {
    // Pobierz tekst z aktualnego paragrafu
    var text = paragraphs[i].textContent;

    // Zamień tekst w paragrafie tak, aby pierwsza litera każdego zdania była wielka
    paragraphs[i].innerHTML = capitalizeSentences(text);
}
};
```

 - Funkcja, która zamienia pierwsze litery każdego zdania na duże litery.
 > - `@param {string} text` - Tekst, który ma być przekształcony.
 > - `@returns {string}` Tekst z pierwszymi literami zdania zamienionymi na wielkie litery.
 
```javascript
function capitalizeSentences(text) {
    // Użyj wyrażenia regularnego, aby znaleźć każde zdanie i zamień pierwszą literę na wielką
    return text.replace(/(^|\.\s+)([a-z])/g, function(match) {
        return match.toUpperCase();
    });
}
```
### Plik submit.php

 * Skrypt PHP do przetwarzania danych formularza i zapisywania ich do bazy danych. 
 * Ten skrypt łączy się z bazą danych `MySQL`, pobiera dane przesłane z formularza, wykonuje wstawienie danych do tabeli `'users'` i zamyka połączenie z bazą danych.

```php
// Dane do połączenia z bazą danych
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_data";

// Tworzenie połączenia z bazą danych
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Połączenie nieudane: " . $conn->connect_error);
}

// Pobranie danych z formularza za pomocą metod POST
$first_last_name = $_POST['first_last_name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Przygotowanie zapytania SQL do wstawienia danych
$stmt = $conn->prepare("INSERT INTO users (first_last_name, phone, email) VALUES (?, ?, ?)");

// Przypisanie wartości do parametrów zapytania SQL
$stmt->bind_param("sss", $first_last_name, $phone, $email);

// Wykonanie zapytania
if ($stmt->execute()) {
    echo "Dziękujemy za przesłanie danych, konsultant skontaktuje się z Tobą.";
} else {
    echo "Błąd: " . $stmt->error;
}

// Zamknięcie zapytania i połączenia z bazą danych
$stmt->close();
$conn->close();
?>
```
Wyjaśnienie:

* Połączenie z bazą danych: Kod łączy się z bazą danych MySQL używając danych takich jak `localhost`, `root`, "" (brak hasła) i nazwa bazy danych `user_data`.

* Pobranie danych z formularza: Dane przesyłane są do skryptu za pomocą metody POST i są przechowywane w zmiennych `$first_last_name, $phone i $email`.

* Przygotowanie i wykonanie zapytania SQL: Skrypt przygotowuje zapytanie SQL do wstawienia danych do tabeli users używając metody prepare i `bind_param` do bezpiecznego przypisania wartości.

* Komunikaty wyjściowe: Po wykonaniu zapytania, w zależności od wyniku (`execute()`), skrypt wyświetla odpowiedni komunikat - sukces lub błąd.

* Zamknięcie połączenia: Na końcu skrypt zamyka połączenie z bazą danych i zapytanie, co jest ważne dla prawidłowego zarządzania zasobami i zapewnienia bezpieczeństwa.

### Plik Kontakt.js

* Skrypt JavaScript do obsługi formularza i wysyłania danych na serwer.
* Ten skrypt nasłuchuje zdarzenia załadowania DOM, a następnie obsługuje
przesyłanie formularza, waliduje dane wejściowe i wysyła je do serwera
za pomocą żądania fetch.

```javascript
document.addEventListener("DOMContentLoaded", function() {
    // Znajdź formularz o id 'all-form'
    const form = document.getElementById("all-form");
    
    // Dodaj nasłuchiwanie na zdarzenie 'submit' formularza
    form.addEventListener("submit", function(event) {
        // Zapobiegaj domyślnej akcji przesyłania formularza
        event.preventDefault();

        // Pobierz wartości pól formularza
        const first_last_name = document.getElementById("first_last_name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        // Walidacja pól formularza
        if (!first_last_name || !phone || !email) {
            alert("Proszę uzupełnić wszystkie pola.");
            return;
        }

        // Wysyłanie danych formularza na serwer za pomocą fetch
        fetch("submit.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `first_last_name=${encodeURIComponent(first_last_name)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}`
        })
        .then(response => response.text())
        .then(data => {
            // Wyświetl odpowiedź serwera
            alert(data);
        })
        .catch(error => {
            // Obsługa błędów
            console.error("Error:", error);
        });
    });
});
```
Wyjaśnienie:
* Nasłuchiwanie zdarzenia `DOMContentLoaded:` Kod czeka, aż cała zawartość DOM zostanie załadowana, aby mieć pewność, że wszystkie elementy są dostępne do manipulacji.

* Obsługa zdarzenia `submit formularza:` Po znalezieniu formularza o identyfikatorze `all-form`, skrypt dodaje nasłuchiwacz dla zdarzenia `submit`, aby przechwycić moment wysyłania formularza.

* Zapobieganie domyślnemu zachowaniu: `event.preventDefault()` zapobiega domyślnemu przesłaniu formularza, co pozwala na własną obsługę danych formularza.

* Pobieranie i walidacja danych wejściowych: Skrypt pobiera wartości pól formularza `(first_last_name, phone, email)` i sprawdza, czy wszystkie pola są wypełnione. Jeśli którekolwiek pole jest puste, wyświetla alert z prośbą o uzupełnienie wszystkich pól.

* Wysyłanie danych na serwer: Skrypt używa funkcji fetch do wysyłania danych formularza na serwer metodą POST. Dane są kodowane jako `application/x-www-form-urlencoded`.

* Obsługa odpowiedzi serwera: Po otrzymaniu odpowiedzi z serwera, skrypt wyświetla odpowiedź w oknie alertu. W przypadku błędu wyświetla go w konsoli.

## Opis Sposobów i Metod Testowania Strony Internetowej
### 1. Wprowadzenie
* Testowanie strony internetowej jest kluczowym etapem w procesie jej tworzenia. Pomaga wykryć błędy, zapewnia wysoką jakość oraz gwarantuje, że użytkownicy będą mieli pozytywne doświadczenia. W przypadku naszej strony internetowej, testowanie będzie przeprowadzane ręcznie.

### 2. Cele Testowania
* Zapewnienie, że wszystkie funkcjonalności działają zgodnie z założeniami.
Sprawdzenie kompatybilności z różnymi przeglądarkami i urządzeniami.
Wykrycie i naprawienie błędów oraz problemów z użytecznością.
Zapewnienie spójności interfejsu użytkownika.
Gwarancja bezpieczeństwa danych użytkowników.

### 3. Zakres Testowania
* Testowanie obejmie następujące obszary:

* Funkcjonalność: Sprawdzenie, czy wszystkie linki, formularze i skrypty działają poprawnie.
Użyteczność: Ocena, czy strona jest łatwa i intuicyjna w użyciu.
Kompatybilność: Testowanie na różnych przeglądarkach (Chrome, Firefox, Safari, Edge) oraz urządzeniach (desktop, tablet, smartfon).
Wydajność: Sprawdzenie, jak strona działa pod względem szybkości ładowania i responsywności.

### 4. Sposoby i Metody Testowania
#### 4.1. Testowanie Funkcjonalne
Testowanie nawigacji: Sprawdzenie, czy wszystkie linki prowadzą do odpowiednich stron, a przyciski wykonują zamierzone akcje.
Testowanie formularzy: Upewnienie się, że wszystkie formularze (np. rejestracja, logowanie) działają poprawnie, a dane są prawidłowo przesyłane i walidowane.
Sprawdzanie treści: Weryfikacja, czy wszystkie teksty, obrazy i multimedia wyświetlają się poprawnie.
#### 4.2. Testowanie Użyteczności
Przyjazność interfejsu: Ocena, czy strona jest intuicyjna w obsłudze, a wszystkie elementy są dobrze widoczne i łatwe do zrozumienia.
Scenariusze użytkowników: Przeprowadzanie testów z perspektywy różnych typów użytkowników, aby upewnić się, że strona spełnia ich potrzeby.
#### 4.3. Testowanie Kompatybilności
Testy przeglądarkowe: Sprawdzenie strony na różnych przeglądarkach w celu zapewnienia zgodności.
Testy urządzeń mobilnych: Testowanie na różnych urządzeniach mobilnych, aby upewnić się, że strona jest responsywna i dobrze się prezentuje.
#### 4.4. Testowanie Wydajności
Czas ładowania: Pomiar czasu ładowania strony, aby upewnić się, że ładuje się szybko i płynnie.
Responsywność: Sprawdzenie, czy strona szybko reaguje na akcje użytkownika.