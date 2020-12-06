const translateBtn = document.querySelector('#click');
const textInput = document.querySelector('#text-input');
const output = document.querySelector('#output');

translateBtn.addEventListener('click', () =>{
    output.innerText = textInput.value;
})

const url = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

fetch(url).then(response => response.json()).then(data => console.log(data))