

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        fetch("http://data.fixer.io/api/latest?access_key=1e37c83087c396f007c93af74ad56a39")
            .then(response => response.json())
            .then(data => {
                const currency = document.querySelector('#currency').value.toUpperCase();
                const rate = data.rates[currency];

                if (rate !== undefined) {
                    document.querySelector('#result').innerHTML = `1 EUR is equal to ${rate.toFixed(3)} ${currency}`;
                } else {
                    document.querySelector('#result').innerHTML = 'Invalid currency.';
                }
            })

            .catch(error => {
                console.log('Error:', error);
            });

        return false;

    }



});