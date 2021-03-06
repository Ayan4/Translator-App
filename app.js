const translateBtn = document.querySelector('#click');
const textInput = document.querySelector('#text-input');
const output = document.querySelector('#output');
const clearBtn = document.querySelector('#clear');

const url = 'https://api.funtranslations.com/translate/minion.json';

const getTranslationURL = (text) =>{
    return url + '?' + 'text=' + text
}

const errorHandler = (error) =>{
    alert(`Cannot leave blank`)
}

    translateBtn.addEventListener('click', () =>{
        const inputText = textInput.value
        fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(data => {
            const translatedText = data.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler);
    })

clearBtn.addEventListener('click', () =>{
    textInput.value = '';
    output.innerText = '';
})