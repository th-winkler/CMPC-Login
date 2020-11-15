const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "mtto" && password === "123") {
        alert("You have successfully logged in.");
        window.location.assign("https://sites.google.com/view/proyectokpi/inicio");
    else if (username === "plta" && password === "456") {
        alert("You have successfully logged in.");
        window.location.assign("https://sites.google.com/view/proyectokpi/inicio");
     else if (username === "grca" && password === "789") {
        alert("You have successfully logged in.");
        window.location.assign("https://sites.google.com/view/proyectokpi/inicio");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})