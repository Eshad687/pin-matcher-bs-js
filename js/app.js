
//generating random number .Generate random number on click function
function randomNumber() {
    const pin = Math.round(Math.random() * 10000);
    //if the number is less than 4 digits calls the function again
    if ((pin + '').length < 4) {
        randomNumber();
    }
    else {
        document.getElementById('random-display').value = pin;
    }

    const tryCount = document.getElementById('try');
    tryCount.innerText = 3;
    document.body.style.backgroundColor = '#10101B';
    const submitBtn = document.getElementById('verify-btn');
    submitBtn.removeAttribute('disabled');

    const successMessage = document.getElementById('success-message');
    const failedMessage = document.getElementById('failed-message');
    const blockedMessage = document.getElementById('blocked-message');
    failedMessage.style.display = 'none';
    successMessage.style.display = 'none';
    blockedMessage.style.display = 'none';
}

//we can use event bubble and event delegation in the keyboard
//in that case we will get the parent of the keypad and add eventlistener to that
//so even if the child buttons are pressed it will be called as well

document.getElementById('key-pad').addEventListener('click', function (event) {

    //here event target will be the button pressed

    const inputDisplay = document.getElementById('input-display');
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            inputDisplay.value = '';
        }
        else if (number == '<') {
            inputDisplay.value = inputDisplay.value.slice(0, -1);
        }
    }
    else {
        inputDisplay.value += number;
    }


});
//submit button event handler
document.getElementById('verify-btn').addEventListener('click', function (event) {
    const pinNumber = document.getElementById('random-display').value;
    const inputNumber = document.getElementById('input-display').value;
    const successMessage = document.getElementById('success-message');
    const failedMessage = document.getElementById('failed-message');
    const blockedMessage = document.getElementById('blocked-message');
    const tryCount = document.getElementById('try');
    let tryCountNumber = parseInt(tryCount.innerText);


    if (pinNumber == inputNumber) {
        successMessage.style.display = 'block';
        failedMessage.style.display = 'none';
        blockedMessage.style.display = 'none';
        document.body.style.backgroundColor = 'green';
        tryCount.innerText = 3;
    }
    else {
        if (tryCountNumber == 0) {
            blockedMessage.style.display = 'block';
            failedMessage.style.display = 'none';
            successMessage.style.display = 'none';

            document.body.style.backgroundColor = 'red';
            const submitBtn = document.getElementById('verify-btn');
            submitBtn.setAttribute('disabled', true);
        }
        else {
            failedMessage.style.display = 'block';
            successMessage.style.display = 'none';
            blockedMessage.style.display = 'none';
            tryCountNumber -= 1;
            tryCount.innerText = tryCountNumber;


        }

    }

});
