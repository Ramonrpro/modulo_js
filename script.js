const form = document.querySelector('form');
const numA = document.getElementById('numA');
const numB = document.getElementById('numB');
const sucessMsg = ("Parabens Você passou!")
const erroMsg = ("Você não passou")

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (Number(numB.value) > Number(numA.value)) {
        const containerMensagemSucess = document.querySelector('.sucess-msg');
        containerMensagemSucess.innerHTML = sucessMsg;
        containerMensagemSucess.style.display = 'block';

        numA.value = '';
        numB.value = '';

        setTimeout(() => {
            containerMensagemSucess.style.display = 'none';
        }, 2000);

    } else {
        const containerMensagemErro = document.querySelector('.erro-msg');
        containerMensagemErro.innerHTML = erroMsg;
        containerMensagemErro.style.display = 'block';

        numA.value = '';
        numB.value = '';

        setTimeout(() => {
            containerMensagemErro.style.display = 'none';
        }, 2000);
    }
});
