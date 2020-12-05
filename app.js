const translateBtn = document.querySelector('#click');
const textInput = document.querySelector('#text-input');
const output = document.querySelector('#output');

translateBtn.addEventListener('click', () =>{
    output.innerText = textInput.value;
})