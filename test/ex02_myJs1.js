let red = document.querySelector('#redBox');
let green = document.querySelector('#greenBox');
let blue = document.querySelector('#blueBox');
let gray = document.querySelector('#grayBox');

let move = document.querySelector('.move');
let radius = document.querySelector('.radius');

move.addEventListener('click', ()=>{
    green.style.marginLeft = '100px';
    blue.style.marginLeft = '200px';
    gray.style.marginLeft = '300px';
})

let divList = document.querySelectorAll('div');
for (let i=0 ; i<divList.length ; i++) {
    console.log(divList[i])
}

radius.addEventListener('click', ()=>{
    for (let i=0 ; i<divList.length ; i++) {
        divList[i].style.borderRadius = '0% 60%';
    }
})