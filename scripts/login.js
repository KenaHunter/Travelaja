function linkToMain() {
    const email = document.querySelector(".email-input").value
    const password = document.querySelector(".password-input").value

    const regEmail = localStorage.getItem('registeredEmail')
    const regPassword = localStorage.getItem('registeredPassword')

    if(email === regEmail && password === regPassword) window.location.href = 'main.html';
    else{
        alert('Деректерді қате тердіңіз')
        email.value = ''
        password.value = ''
    }    
}

const logBtn = document.getElementById('logBtn')
logBtn.addEventListener('click', linkToMain)

