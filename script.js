const form = document.querySelector("form");
const theInputs = document.querySelectorAll("input:not([type='submit'])");

form.addEventListener('submit', e => {
    e.preventDefault();

    let isValid = true;

    theInputs.forEach(input => {
        let name = input.getAttribute("placeholder");
        let value = input.value.trim();
        let verifymail = 'Email';
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === '') {
            errorFunction(input, `${name} cannot be empty`);
            isValid = false;
        }
        else if (name === verifymail && !pattern.test(value)) {
            errorFunction(input, `Looks like this is not an Email`);
            isValid = false;
        }
        else {
            successFunction(input);
        }
    });

    if (isValid) {
        form.reset();
        document.getElementById('Notificationmsg').classList.replace('hidden', 'visible')
        setTimeout(() => {
            document.getElementById('Notificationmsg').classList.replace('visible', 'hidden');
        }, 5000);

    }
});

function errorFunction(element, message) {
    element.classList.add('error');
    const errorlabel = element.nextElementSibling;
    errorlabel.classList.add('error-text');
    errorlabel.innerHTML = message;
}

function successFunction(element) {
    element.classList.remove('error');
    const errorlabel = element.nextElementSibling;
    errorlabel.classList.remove('error-text');
    errorlabel.innerText = '';
}
