
const parentNode = document.getElementById('container');
const newPara = document.createElement('p');
const newH3 = document.createElement('h3');

newPara.classList.add('red');
newPara.innerText = 'Hey, I am red.';

parentNode.appendChild(newPara);

newH3.classList.add('blue');
newH3.innerText = 'I am a blue H3!';

parentNode.appendChild(newH3);

