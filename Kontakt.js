// const form = document.getElementById('all-form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const name = formData.get('name');
//     const surname = formData.get('surname');
//     const email = formData.get('email');

//     const message = `
//         Ten został pomyślnie zaakceptowany! 
//         Skontaktujemy się z Tobą za pośrednictwem Twojego adresu: ${email}
        
//     `;

//     alert(message);

//     form.reset();
// });

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("all-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const first_last_name = document.getElementById("first_last_name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        if (!first_last_name || !phone || !email) {
            alert("Proszę uzupewnić wszystkie pola.");
            return;
        }

        // wysyłanie form na server
        fetch("submit.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `first_last_name=${encodeURIComponent(first_last_name)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data);  // odpowiedz servera
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});

