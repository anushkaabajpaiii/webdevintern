const inputText = document.getElementById('input-text');
const wordCount = document.getElementById('word-count');
const charCount = document.getElementById('char-count');
const paraCount = document.getElementById('para-count');
const numCount = document.getElementById('num-count');
const specCount = document.getElementById('spec-count');

inputText.addEventListener('input', () => {
    const text = inputText.value;
    const words = text.split(/\s+/);
    const chars = text.length;
    const paras = text.split(/\n+/).length;
    const numbers = text.match(/\d+/g) || [];
    const specialChars = text.match(/[^\w\s]/g) || [];

    wordCount.textContent = words.length;
    charCount.textContent = chars;
    paraCount.textContent = paras;
    numCount.textContent = numbers.length;
    specCount.textContent = specialChars.length;
});