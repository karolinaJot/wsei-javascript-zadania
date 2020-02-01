document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let checkbox = document.getElementById('invoice');
    let invoiceData = document.getElementById('invoiceData');

    invoiceData.style.display = 'none';
    
    checkbox.addEventListener('change', function(e){
        if(this.checked){
            invoiceData.style.display = 'block'
        }else {
            invoiceData.style.display = 'none';
        }
    });
});