/*getElementById zwraca nam element i pozwala na odwoływanie się do niego*/
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var loginErrorMsgScnd = document.getElementById("error-msg-second-line");
/*Tworzona jest metoda dzięki której wywołujemy naszą funkcję przy wciśnięciu przycisku*/
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
/*Pierwszy przypadek opisuje co się stanie jeżeli dane podane przez użytkownika będą się zgadzać z danymi w funkcji warunkowej
  Jeżeli się zgadzają, skrypt zmieni ustawienie skryptów aby komunikat był w kolorze zielonem oraz zmieni sam tekst komunikatu, następnie zmieni opacity na 1 przez co komunkat jest widoczny */
    if (username === "user" && password === "user") {
        loginErrorMsg.style.backgroundColor = "green";
        loginErrorMsg.style.color = "#49e929";
        loginErrorMsg.style.border = "2px solid #49e929";
        loginErrorMsg.innerHTML = "Gratulacje<br> Udało ci się poprawnie zalogować";
        loginErrorMsg.style.opacity = 1;
    } 
    /*W innym przypadku dane są nieprawidłowe i skrypt zmieni tylko sam tekst i opacity*/
    else {
        loginErrorMsg.innerHTML = "Wprowadzono złe dane<br>Sprawdź poprawność podanego loginu i hasła";
        loginErrorMsg.style.opacity = 1;
        
    }
})
