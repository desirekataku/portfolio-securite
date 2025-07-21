
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('response').innerText = "Merci pour votre message ! Je vous répondrai bientôt.";
});
