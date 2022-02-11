var nav = document.getElementsByTagName("nav");
$(window).scroll(function() { 
	if ($(document).scrollTop() > 50) { 
		$(nav).css("background-color", "rgba(252, 252, 252, 0.9)"); 
	} else {
		$(nav).css("background-color", "rgba(255, 255, 255, 1)");
	}
});

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top-80 + "px"
    });
    return false;
});

var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");
console.log(btn);

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}