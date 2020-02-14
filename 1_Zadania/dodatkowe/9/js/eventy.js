let links = document.querySelectorAll('section a');
console.log(links);

links[0].addEventListener('click', function(e){
    this.nextElementSibling.style.display = 'block';
});

links[1].addEventListener('mouseover', function(e){
    this.nextElementSibling.style.display = 'block';
});