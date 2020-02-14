document.addEventListener('DOMContentLoaded', function (e) {
    console.log('DOM content loaded!');


    let price = document.getElementById('price');
    let inputs = document.querySelectorAll('input');
  
    console.log(submitBtn);
    
    //brak w strukturze html elementu page-info
    // let page_info = document.querySelector("page-info");

    inputs[0].addEventListener('change', function (e) {
        let toPay = 0.0;
        if (this.checked) {
            for (let i = 1; i < inputs.length - 1; i++) {
                toPay = toPay + parseFloat(inputs[i].dataset.price);
                console.log(toPay);
            }
            toPay = toPay.toFixed(2);
            console.log(toPay);
            price.innerHTML = '';
            price.innerHTML = `${toPay}zł`;
        }
    });

    let toPay = 0.0;
    for (let i = 1; i < inputs.length - 1; i++) {
        inputs[i].addEventListener('change', function (e) {
            price.innerHTML = '';
            if (this.checked)
                toPay = toPay + parseFloat(this.dataset.price);
            price.innerHTML = `${toPay} zł`
        });
    }

    inputs[inputs.length-1].addEventListener('change', function (e) {
        if (this.checked) {
            toPay = 0.0;
            for (let i = 0; i < inputs.length - 1; i++) {
                inputs[i].checked = false;
            }
            price.innerHTML = '0zł';
        }
    });
});