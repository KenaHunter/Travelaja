// function redirectToPage() {
//     const email = document.getElementById('email')
//     const password = document.getElementById('password')
//     const rePassword = document.getElementById('rePassword')

//     const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

//     if(!email == ''){
//         if (!emailRegex.test(email)) {
//             alert('Email қате жазылған');
//             return;
//         }else localStorage.setItem('registeredEmail', email);
//         if(password !== rePassword){
//             alert('Құпия сөзді қате тердіңіз');
//             document.getElementById('password').value = '';
//             document.getElementById('rePassword').value = '';
//         }else{
//             const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,8}$/;
//             if (!passwordRegex.test(password)){
//                 alert('Құпия сөз 6-8 символдар(сан, әріп және арнайы символдардан құралуы тиіс)');
//                 document.getElementById('password').value = '';
//                 document.getElementById('rePassword').value = '';
//             }else  localStorage.setItem('registeredPassword', password);
//         }
//         alert('Тіркелу сәтті өтті');
//         window.location.href = 'index.html';
//     }else alert('Заполните все поля');

// }

// const regBtn = document.getElementById('regBtn');
// regBtn.addEventListener('click', redirectToPage);


const checkReg = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const rePassword = document.getElementById('rePassword').value

    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    if(!email == ''){
        if (!emailRegex.test(email)) {
            alert('Email қате жазылған');
            return;
        }else localStorage.setItem('registeredEmail', email);
        if(password !== rePassword){
            alert('Құпия сөзді қате тердіңіз');
            document.getElementById('password').value = '';
            document.getElementById('rePassword').value = '';
        }else{
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,8}$/;
            if (!passwordRegex.test(password)){
                alert('Құпия сөз 6-8 символдар(сан, әріп және арнайы символдардан құралуы тиіс)');
                document.getElementById('password').value = '';
                document.getElementById('rePassword').value = '';
            }else  localStorage.setItem('registeredPassword', password);
        }
        alert('Тіркелу сәтті өтті');
        window.location.href = 'index.html';
    }else alert('Заполните все поля');
    
}
const regBtn = document.getElementById('regBtn');
regBtn.addEventListener('click', checkReg);