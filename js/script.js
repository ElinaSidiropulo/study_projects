$(function () {
  $('.js-nav a, .js-connect').click(function (e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});

document.getElementById('mail').addEventListener('submit', function (event) {

  const name = document.getElementById('inputName').value;
  const email = document.getElementById('inputMail').value;
  const message = document.getElementById('inputMessage').value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return;
  }

  alert("Your message has been sent successfully!");

  // Очищаем форму
  document.getElementById('mail').reset();
});
<input id="inputName" name="name" className="form-control" type="text" placeholder="Name" required/>
<input id="inputMail" name="email" className="form-control" type="email" placeholder="mail.address@mail.com" required/>
<textarea id="inputMessage" name="message" className="form-control" cols="30" rows="8" required></textarea>
