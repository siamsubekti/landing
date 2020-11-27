const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginError = document.getElementById("login-error-msg");
const backToLogin = document.getElementById("back");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'admin' && password === 'P@ssw0rd') {
        alert("Login Success");
        const link = document.createElement('a');
        link.href = 'home/home.html';
        link.click();
    } else {
        alert("Login Failed");
        loginError.innerHTML = 'Account Not Valid'
    }
})

if (backToLogin) {
    backToLogin.addEventListener("click", (e) => {
        e.preventDefault();
        if (e) {
            window.location.href = '/login/login.html';
        }
    })
}