function dadosCorretos () {
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let alertLogin = document.querySelector(".btn");
alertLogin.addEventListener(click, "loginTryber");

    if (email.value = "tryber@teste.com" && password.value= "123456") {
        window.alert("Olá, Tryber!")
    } else {
       window.alert ("Email ou senha inválidos.")
    }
}

loginTryber();