document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");

    let imgs = document.querySelectorAll('#gallery img');
    let showBtn = document.getElementById('showButton');
    let hideBtn = document.getElementById('hideButton');
    let tagInput = document.getElementById('tagInput');

    // console.log(imgs);
    // console.log(showBtn);
    // console.log(hideBtn);
    // console.log(tagInput);

    showBtn.addEventListener('click', function (e) {
        inputValue = tagInput.value;
        console.log(inputValue);
        tagInput.value = '';
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].dataset.tag.indexOf(inputValue) >= 0) {
                imgs[i].classList.remove('invisible');
                console.log(imgs[i].dataset.tag);

            } else {
                imgs[i].classList.add('invisible');
            }
        }

    });

    hideBtn.addEventListener('click', function (e) {
        inputValue = tagInput.value;
        console.log(inputValue);
        tagInput.value = '';
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].dataset.tag.indexOf(inputValue) >= 0) {
                imgs[i].classList.add('invisible');
                console.log(imgs[i].dataset.tag);
            } else {
                imgs[i].classList.remove('invisible');
            }
        }
    });
});