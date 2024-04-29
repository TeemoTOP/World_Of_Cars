// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById("kontakt-form");
//     var successMessage = document.getElementById("success-message");
//     var errorMessage = document.getElementById("error-message");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         var name = form.elements["name"].value;
//         var surname = form.elements["surname"].value;
//         var email = form.elements["email"].value;

//         if (name.trim() === "" || surname.trim() === "" || email.trim() === "") {

//             errorMessage.style.display = "block";
//             successMessage.style.display = "none";
//         } else {

//             errorMessage.style.display = "none";
//             successMessage.style.display = "block";

//         }
//     });
// });    

// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById("all-form");
//     var feedback = document.getElementById("feedback");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         feedback.style.display = "block";
//             });
//         });

// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById("all-Form");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         feedback.style.display = "block";
//             });
//         });

// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById("all-form");
//     var feedback = document.getElementById("feedback");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         feedback.style.display = "block";
//             });
//         });

// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById("all-form");
//     var feedback = document.getElementById("feedback");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         feedback.style.display = "block";
//             });
//         });


// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById("all-form");
//     var feedback = document.getElementById("feedback");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         feedback.style.display = "block";
//             });
//         });
        

// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById("all-form");
//     var modal = document.getElementById("myModal");
//     var closeBtn = document.getElementsByClassName("close")[0];
//     var modalMessage = document.getElementById("modal-message");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         var name = form.elements["name"].value;
//         var surname = form.elements["surname"].value;
//         var email = form.elements["email"].value;

//         modalMessage.textContent = "Dane zostały pomyślnie wysłane!";

//         modal.style.display = "block";
//             });

//             closeBtn.onclick = function() {
//                 modal.style.display = "none";
//             }

//             window.onclick = function(event) {
//                 if (event.target == modal) {
//                     modal.style.display = "none";
//                 }
//             }
//         });


// document.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById("all-form");
//     var modal = document.getElementById("myModal");
//     var closeBtn = document.getElementsByClassName("close")[0];

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         modal.style.display = "block";
//             });

//             closeBtn.onclick = function() {
//                 modal.style.display = "none";
//             }

//             window.onclick = function(event) {
//                 if (event.target == modal) {
//                     modal.style.display = "none";
//                 }
//             }
//         });


// const form = document.getElementById('all-form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const name = formData.get('name');
//     const surname = formData.get('surname');
//     const email = formData.get('email');

//     document.getElementById('name').value = '';
//     document.getElementById('surname').value = '';
//     document.getElementById('email').value = '';

//     showModal();
//     });

// function showModal() {
//     const modal = document.getElementById('myModal');
//         modal.style.display = 'block';
    
//     const closeButton = document.querySelector('.close');
//         closeButton.addEventListener('click', function() {
//         modal.style.display = 'none';
//         });

//         window.addEventListener('click', function(event) {
//             if (event.target === modal) {
//                 modal.style.display = 'none';
//             }
//         });
//     }


// const form = document.getElementById('all-form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const name = formData.get('name');
//     const surname = formData.get('surname');
//     const email = formData.get('email');

//     document.getElementById('name').value = '';
//     document.getElementById('surname').value = '';
//     document.getElementById('email').value = '';

//     showModal();
//     });

//     function showModal() {
//         const modal = document.getElementById('myModal');
//         modal.style.display = 'block';

//         const closeButton = document.querySelector('.close');
//         closeButton.addEventListener('click', function() {
//             modal.style.display = 'none';
//         });

//         window.addEventListener('click', function(event) {
//             if (event.target === modal) {
//                 modal.style.display = 'none';
//             }
//         });
//     }


// document.getElementById('name').addEventListener('blur', function() {
//     var name = this.value;
//     if (name === '') {
//         alert('Please enter your name');
//     }
// });

// document.getElementById('email').addEventListener('blur', function() {
//     var email = this.value;
//     var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!regex.test(email)) {
//         alert('Please enter a valid email address');
//     }
// });

// const nameInput = document.getElementById('name');
// const surnameInput = document.getElementById('surname');
// const emailInput = document.getElementById('email');

// nameInput.addEventListener('input', updateFormData);
// surnameInput.addEventListener('input', updateFormData);
// emailInput.addEventListener('input', updateFormData);

// function updateFormData() {
//     const name = nameInput.value;
//     const surname = surnameInput.value;
//     const email = emailInput.value;

//     const modal = document.getElementById('myModal');
//     modal.style.display = 'block';

//     const modalData = document.getElementById('modalData');
//     modalData.innerHTML = `
//         <p><strong>Imię:</strong> ${name}</p>
//         <p><strong>Nazwisko:</strong> ${surname}</p>
//         <p><strong>Email:</strong> ${email}</p>
//     `;

//     const closeButton = document.querySelector('.close');
//     closeButton.addEventListener('click', function() {
//         modal.style.display = 'none';
//     });

//     window.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// }


// const nameInput = document.getElementById('name');
// const surnameInput = document.getElementById('surname');
// const emailInput = document.getElementById('email');

// nameInput.addEventListener('input', updateFormData);
// surnameInput.addEventListener('input', updateFormData);
// emailInput.addEventListener('input', updateFormData);

// function updateFormData() {
//     const name = nameInput.value;
//     const surname = surnameInput.value;
//     const email = emailInput.value;

//     if (name && surname && email) {
//         showModal(name, surname, email);
//     }
// }

// function showModal(name, surname, email) {
//     const modal = document.getElementById('myModal');
//     modal.style.display = 'block';

//     const modalData = document.getElementById('modalData');
//     modalData.innerHTML = `
//         <p><strong>Imię:</strong> ${name}</p>
//         <p><strong>Nazwisko:</strong> ${surname}</p>
//         <p><strong>Email:</strong> ${email}</p>
//     `;
//     const closeButton = document.querySelector('.close');
//     closeButton.addEventListener('click', closeModal);

//     window.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             closeModal();
//         }
//     });

//     function closeModal() {
//         modal.style.display = 'none';

//         closeButton.removeEventListener('click', closeModal);
//     }
// }


// function validateForm() {

//     const name = document.getElementById('name').value;
//     const surname = document.getElementById('surname').value;
//     const email = document.getElementById('email').value;

//     if (name && surname && email) {

//         showModal(name, surname, email);

//         document.getElementById('name').value = '';
//         document.getElementById('surname').value = '';
//         document.getElementById('email').value = '';

//         return false;
//     } else {

//         alert('Please fill in all fields.');
//         return false;
//     }
// }

// function showModal(name, surname, email) {
//     const modal = document.getElementById('myModal');
//     modal.style.display = 'block';

//     const modalData = document.getElementById('modalData');
//     modalData.innerHTML = `
//         <p><strong>Imię:</strong> ${name}</p>
//         <p><strong>Nazwisko:</strong> ${surname}</p>
//         <p><strong>Email:</strong> ${email}</p>
//     `;

//     const closeButton = document.querySelector('.close');
//     closeButton.addEventListener('click', function() {
//         modal.style.display = 'none';
//     });

//     window.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// }


                // Заработала
// const form = document.getElementById('all-form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     const formData = new FormData(form);
//     const name = formData.get('name');
//     const surname = formData.get('surname');
//     const email = formData.get('email');

//     const message = `
//         Imię: ${name}
//         Nazwisko: ${surname}
//         Email: ${email}
//     `;

//     alert(message);

//     form.reset();
// });

    //  заработала
const form = document.getElementById('all-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const surname = formData.get('surname');
    const email = formData.get('email');

    const message = `
        Ten został pomyślnie zaakceptowany! 
        Skontaktujemy się z Tobą za pośrednictwem Twojego adresu: ${email}
        
    `;

    alert(message);

    form.reset();
});


// const form = document.getElementById('all-form');

// function showMessageAndResetForm(name, email) {
//     if (!validateEmail(email)) {
//         alert('Błąd wprowadzania danych: Nieprawidłowy format adresu e-mail');
//         return;
//     }

//     const messageDiv = document.createElement('div');
//     messageDiv.textContent = `Ten został pomyślnie zaakceptowany! Skontaktujemy się z Tobą za pośrednictwem Twojego adresu email: ${email}`;
//     document.body.appendChild(messageDiv);

//     form.reset();
// }

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formData = new FormData(form);
//     const name = formData.get('name');
//     const email = formData.get('email');

//     showMessageAndResetForm(name, email);
// });