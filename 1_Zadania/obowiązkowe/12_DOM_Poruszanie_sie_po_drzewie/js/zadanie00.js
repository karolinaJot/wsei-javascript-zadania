document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!"); 

    let first = document.querySelector('.first');
    let firstChild = first.firstElementChild;
    let thirdChildOfFirstChild = firstChild.children[2];

    // console.log(firstChild);
    console.log(thirdChildOfFirstChild);

    let second = document.getElementById('second');
    let parentOfSecond = second.parentElement;
    let forthChildOfParentOfSecond = parentOfSecond.children[3];

    console.log(forthChildOfParentOfSecond);

    let dataEx = document.querySelector('[data-ex="third"]');
    console.log(dataEx);
    let grandpa = dataEx.parentElement.parentElement;
    console.log(grandpa);
    let grandpaLastChild = grandpa.lastElementChild;
    console.log(grandpaLastChild);
    let grandpaLastChildFirstChild = grandpaLastChild.firstElementChild;
    console.log(grandpaLastChildFirstChild);
    let answer;
    let allChildren = grandpaLastChildFirstChild.children;
    console.log(allChildren);

    answer = allChildren[Math.floor(allChildren.length / 2)];
    console.log(answer);

    let forth = document.querySelector('.forth'); 
    let forthParent = forth.parentElement;
    let article = forthParent.querySelector('article');
    console.log(article);
    




});