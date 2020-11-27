const formLogin = document.getElementById("form-submit");
const errorcust = document.getElementById("errorcust");
const errorem = document.getElementById("errorem");
const buttonSubmit = document.getElementById("btn-submit");
const customerForm = document.getElementById("customer");
const emailForm = document.getElementById("email");
const startTime = document.getElementById("starttime");
const endTime = document.getElementById("endtime");
const tiket = document.getElementById("tiket");

if (buttonSubmit) {
    buttonSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        // @ts-ignore
        const customer = formLogin.customer.value;
        let regexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        // @ts-ignore
        const email = formLogin.email.value;
        const find = regexp.test(email);
        console.log(find);
        // @ts-ignore
        const startTime = formLogin.starttime.value;
        // @ts-ignore
        const endTime = formLogin.endtime.value;
        // @ts-ignore
        const tiket = formLogin.tiket.value;
    
        if (customer.length > 30) {
            errorcust.innerText = 'maksimum 30 karakter';
        } else if (customer.length === 0) {
            errorcust.innerText = 'this field required';
        } else {
            errorcust.innerText = '';
        }
        if (email.length === 0) {
            errorem.innerText = 'this field required';
        } else if (!find) {
            errorem.innerText = 'format email not valid';
        } else {
            errorem.innerText = '';
        }
    })
}