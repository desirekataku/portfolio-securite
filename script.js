document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Empêche le rechargement

  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      document.getElementById('response').innerText = "Merci pour votre message ! Je vous répondrai bientôt.";
      form.reset(); // vide le formulaire
    } else {
      document.getElementById('response').innerText = "Oops, une erreur est survenue. Merci de réessayer.";
    }
  }).catch(() => {
    document.getElementById('response').innerText = "Oops, une erreur est survenue. Merci de réessayer.";
  });
});

