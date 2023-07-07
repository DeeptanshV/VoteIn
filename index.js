function register() {
    const passInput = document.getElementById('pass');
    console.log(passInput.value);
    const emailInput = document.getElementById('email');
    console.log(emailInput.value);
    const fnameInput = document.getElementById('fname');
    console.log(fnameInput.value);

    if(passInput.value == '' || emailInput.value == '' || fnameInput.value == '') {
        alert('Please fill in all fields');
        return;
    }
    alert('Hello World');
    window.location.href = 'votepage.html?test=true&name=' + fnameInput.value + '&email=' + emailInput.value;
}


function login(){
    const emailInput = document.getElementById('emailLogin');
    const passInput = document.getElementById('passLogin');

    if(emailInput.value == '' || passInput.value == '') {
        alert('Please fill in all fields');
        return;
    }
    const name = 'John';
    alert('Hello World');
    window.location.href = 'votepage.html?test=true&email=' + emailInput.value + '&name=' + name;
}