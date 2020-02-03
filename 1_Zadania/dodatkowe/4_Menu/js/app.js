document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed!');

    let listItems = document.querySelector('.nav ul').children;
    console.log(listItems);

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('mouseover', function (e) {
            // console.log('mouseover');
            if (this.children.length > 0) {
                this.children[0].style.display = 'block';
            }
        });

        listItems[i].addEventListener('mouseout', function (e) {
            // console.log('mouseout');
            if (this.children.length > 0) {
                this.children[0].style.display = 'none';
            }
        });
    }
});