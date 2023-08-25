 //4 colores
const elementDiv = document.querySelector('#elementDiv');
const elementDiv2 = document.querySelector('#elementDiv2');
const elementDiv3 = document.querySelector('#elementDiv3');
const elementDiv4 = document.querySelector('#elementDiv4');
var evtKeyDiv = document.querySelector('#key');
var content = document.querySelector('.container');
var divElement;

elementDiv.addEventListener('click', (evt)=>{
    pintar(evt,'black');
});
elementDiv2.addEventListener('click', (evt)=>{
    pintar(evt,'black');
});
elementDiv3.addEventListener('click', (evt)=>{
    pintar(evt,'black');
});
elementDiv4.addEventListener('click', (evt)=>{
    pintar(evt,'black');
});

document.addEventListener('keydown', (event) =>{
    if (event.key === 'a') {
        pintar2(evtKeyDiv,'pink');
    } else if (event.key === 's') {
        pintar2(evtKeyDiv,'orange');
    }else if (event.key === 'd') {
        pintar2(evtKeyDiv,'#0Af');
    }else if (event.key === 'q') {
        creaElement();
        pintar2(divElement,'#f04');
    }else if (event.key === 'w') {
        creaElement();
        pintar2(divElement,'#777');
    }else if (event.key === 'e') {
        creaElement();
        pintar2(divElement,'#742');
    }   
});
    