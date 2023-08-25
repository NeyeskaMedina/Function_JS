// pintar elementos
const pintar = ({target}, color = 'green') => {
    target.style.backgroundColor = color;
};
const pintar2 = (elementoPintar,color) => {
    elementoPintar.style.backgroundColor = color;
    elementoPintar.style.border = `2px solid ${color}`;
};
const creaElement = () => {
    divElement = document.createElement('div');
    divElement.style.width = '200px';
    divElement.style.height = '200px';
    content.appendChild(divElement);
};