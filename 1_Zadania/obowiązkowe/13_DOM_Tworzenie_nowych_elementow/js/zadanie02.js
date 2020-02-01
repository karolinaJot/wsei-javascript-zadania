document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 


    let button = document.getElementById('addBtn');
    let orderId = document.getElementById('orderId');
    let item = document.getElementById('item');
    let quantity = document.getElementById('quantity');
    let table = document.querySelector('table');
    let toClone = document.querySelector('tr');

    button.addEventListener('click', function(e){
        orderIdValue = orderId.value;
        itemValue = item.value;
        quantityValue = quantity.value;
        let newItem = document.createElement('tr');
        newItem = toClone.cloneNode(true);
        newLine = newItem.children;
        newLine[0].innerHTML = orderIdValue;
        newLine[1].innerHTML = itemValue;
        newLine[2].innerHTML = quantityValue;
        table.appendChild(newItem);

        // czyszczenie formularza
        orderId.value = '';
        item.value = '';
        quantity.value = '';
    });


});