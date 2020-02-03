/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed!')

    let tooltips = document.getElementsByClassName('tooltip');
    // console.log(tooltips);

    for (let i = 0; i < tooltips.length; i++) {
        tooltips[i].addEventListener('mouseover', function (e) {
            // console.log(this.dataset.text);
            let newSpan = document.createElement('span');
            newSpan.classList.add('tooltipText');
            newSpan.innerHTML = this.dataset.text;
            this.appendChild(newSpan);
        });

        tooltips[i].addEventListener('mouseout', function (e) {
            // console.log(this.dataset.text);
            let toRemove = document.querySelector('.tooltipText');
            toRemove.parentElement.removeChild(toRemove);
        });
    }

});


