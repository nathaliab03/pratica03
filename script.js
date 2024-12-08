function convert() {
    const numberToConvert = document.querySelector('input#txtNumberToConvert').value;
    const result = document.querySelector('div#result');
    const binaryTest = /^[01]+$/

    try {
        if(binaryTest.test(numberToConvert)) {
            const binaryNumber = parseInt(numberToConvert, 2)

            result.innerHTML = `O número ${numberToConvert} em binário é <br><h2>${binaryNumber}</h2>`
            result.style.color = ''
        } else {
            throw new Error('Por favor, digite apenas 0s e 1s')
        }
    } catch(error) {
        result.innerHTML = error.message;
        result.style.color = 'red'
    }

    document.querySelector('input#txtNumberToConvert').value = ''
}









































/* function convert() {
    const numberToConvert = document.querySelector('input#numberInput').value;
    const result = document.querySelector('div#result')

    const binaryTest = /^[01]+$/

    try {
        if(binaryTest.test(numberToConvert)) {
            const decimalNumberResult = `<strong>O número binário ${numberToConvert} em decimal é: <br>
            <h2>${parseInt(numberToConvert, 2)}</h2>`;
            
            result.innerHTML = decimalNumberResult
            result.style.color = '';
            
        } else {
            throw new Error('Por favor, digite apenas 0s e 1s')
        }
    } catch(error) {
        result.innerHTML = error.message;
        result.style.color = 'red'
    }

    document.querySelector('input#numberInput').value = '';
    document.querySelector('div#result') = ''

} */