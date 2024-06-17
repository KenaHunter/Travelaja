// function redirectToPage() {
//     window.location.href = 'index.html';
// }

// function linkToMain() {
//     const email = document.querySelector(".email-input").value
//     const password = document.querySelector(".password-input").value
//     if (email == "" && password == ""){
//         alert("Заполните все пустые поля")
//     } else if (email == "" && password != "") {
//         alert("Заполните email")
//     } else if (email != "" && password == "") {
//         alert("Заполните пароль")
//     } else {
//         window.location.href = 'main.html';
//     }

// }


// Получаем элементы
var modal = document.getElementById("modal");
var btn = document.querySelectorAll(".white-btn");
var span = document.getElementsByClassName("close")[0];
var btnn = document.querySelector(".submit-btn");

function openModal () {
  modal.style.display = "block";
}

// Функция закрытия модального окна
span.onclick = function () {
  modal.style.display = "none";
}

btnn.onclick = function () {
  modal.style.display = "none";
  const name = document.getElementById('name').value = '';
  const tel = document.getElementById('phone').value = '';
}

// Закрытие модального окна при клике вне окна
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Accordion
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));













document.getElementById('phone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  e.target.value = !x[2] ? x[1] : '+' + x[1] + ' (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
});






/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function scrollToTop() {
    const scrollToTop = window.setInterval(function() {
        const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); // как быстро прокручивать обратно
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 5); // как часто выполнять прокрутку наверх (в миллисекундах)
}