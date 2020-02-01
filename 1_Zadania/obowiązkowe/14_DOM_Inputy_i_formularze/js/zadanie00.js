document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let errorMessage = document.querySelector('.error-message');
    let successMessage = document.querySelector('.success-message');
    let form = document.querySelector('form');
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let surname = document.getElementById('surname');
    let pass1 = document.getElementById('pass1');
    let pass2 = document.getElementById('pass2');
    let agree = document.getElementById('agree');

    form.addEventListener('submit', function(e){
        errorMessage.innerHTML = '';

        if(!email.value.includes('@')){
            errorMessage.innerHTML += 'Email musi posiadać znak @' + ' ';
        }

        if(name.value.length < 6){
            errorMessage.innerHTML += 'Twoje imię jest za krótkie' + ' ';
        }

        if(surname.value.length < 6){
            errorMessage.innerHTML += 'Twoje nazwisko jest za krótkie' + ' ';
        }

        if (!((pass1.value.length > 0)  && (pass1.value === pass2.value))){
            errorMessage.innerHTML += 'Hasła nie są takie same lub puste' + ' ';
        }

        if(!agree.checked){
            errorMessage.innerHTML += 'Musisz zaakceptować warunki';
        }

        if(errorMessage.innerHTML !== ''){
            e.preventDefault();
        } else{
            successMessage.innerHTML = 'Hurra! Udało się!';
        }
    });
});