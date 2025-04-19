let textInput = document.getElementById('textInput');
let wordCount = document.getElementById('wordCount');
let charCount = document.getElementById('charCount');

textInput.addEventListener('input', () => {
    let text = textInput.value.trim();
    wordCount.textContent = text ? text.split(/\s+/).length : 0;
    charCount.textContent = text.length;
});

function clearText() {
    textInput.value = '';
    wordCount.textContent = 0;
    charCount.textContent = 0;
}