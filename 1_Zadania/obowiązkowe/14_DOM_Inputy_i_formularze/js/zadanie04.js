document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let cardType = document.getElementById('type');
    let cardNumber = document.getElementById('name');

    cardNumber.addEventListener('input', function(e){
        if(cardNumber.value.startsWith('4')){
            cardType.innerHTML = 'Visa';
            if(cardNumber.value.length >= 13 && cardNumber.value.length <= 16){
                cardNumber.style.border = '3px solid green';
            } else{
                cardNumber.style.border = 'none';
            }
        }else if(cardNumber.value.startsWith('5')){
                cardType.innerHTML = 'Mastercard';
                if(cardNumber.value.length ===16){
                    cardNumber.style.border = '3px solid green';
                } else{
                    cardNumber.style.border = 'none';
            } 
        }else if(cardNumber.value.startsWith('34') || cardNumber.value.startsWith('37')){
                cardType.innerHTML = 'American Express';
                if(cardNumber.value.length === 15){
                    cardNumber.style.border = '3px solid green';
                } else{
                    cardNumber.style.border = 'none';
            }
        } else{
            cardType.innerHTML = '### Błąd!';
        } 

    });
});