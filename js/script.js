$(function () {
  // Плавная прокрутка
  $('.js-nav a, .js-connect').click(function (e) {
    e.preventDefault();

    let target = $($(this).attr('href'));
    console.log(target); // Проверяем, что найден элемент

    if (target.length) { // Проверка, существует ли элемент
      $('body, html').animate({
        scrollTop: target.offset().top
      }, 750);
    }
  });
});

// Обработчик отправки формы
document.getElementById('mail').addEventListener('submit', function (event) {
  // Проверка на пустые поля, без отмены отправки
  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputMail').value;
  const message = document.getElementById('inputMessage').value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return; // Форма не будет отправлена, если поля пустые
  }

  alert("Your message has been sent successfully!");

  // Не отменяем отправку, форма продолжит отправляться через Formspree

  // Очищаем форму (после отправки)
  document.getElementById('mail').reset();
});
