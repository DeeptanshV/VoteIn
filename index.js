const baseURL = "https://voting-function-app.azurewebsites.net/api/"
async function register() {
    const passInput = document.getElementById('pass');
    console.log(passInput.value);
    const emailInput = document.getElementById('email');
    console.log(emailInput.value);
    const fnameInput = document.getElementById('fname');
    console.log(fnameInput.value);

    if(passInput.value == '' || emailInput.value == '' || fnameInput.value == '') {
        alert('Please fill in all fields');
        return;
    } else{
        console.log({
            name: fnameInput.value,
            email: emailInput.value,
            pass: passInput.value
        });
        await fetch(baseURL + "register", {
            method: "POST",
            body: JSON.stringify({
                name: fnameInput.value,
                email: emailInput.value,
                pass: passInput.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(json => {
            console.log(json);
            if(json["msg"] == "Success"){
                console.log(json);
                window.location.href = 'votepage.html?test=true&name=' + fnameInput.value + '&email=' + emailInput.value;
            }else{
                alert("Some Error Occured");
            }
        }).catch(err => console.log(err));
    }
}


async function login(){
    const emailInput = document.getElementById('emailLogin');
    const passInput = document.getElementById('passLogin');

    if(emailInput.value == '' || passInput.value == '') {
        alert('Please fill in all fields');
        return;
    } else{
        console.log({
            email: emailInput.value,
            pass: passInput.value
        });
        await fetch(baseURL + "login", {
            method: "POST",
            body: JSON.stringify({
                email: emailInput.value,
                pass: passInput.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(json => {
            console.log(json);
            if(json["name"]){
                console.log(json);
                const name = json["name"];
                if(json["VotedTo"] == null){
                    window.location.href = 'votepage.html?test=true&email=' + emailInput.value + '&name=' + name;
                } else{
                    alert("You have already Voted");
                }
            }else{
                alert("No account found");
            }
        }).catch(err => console.log(err));
    }
}