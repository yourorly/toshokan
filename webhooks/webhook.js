function sendMessage() {
    var form = document.getElementById('contactform');
    var formData = new FormData(form);

    var webhookUrl = 'https://discord.com/api/webhooks/1190619066323447859/heuzJxOdBbubrp9B9I1XKqiLDEkcLnSLlI_Ihf6ikmrXi-lDJwtuLa7bFS_Jj1j6RArI';

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `--Contact--\n\nNew Message Submission:\n\nName: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPhone Number: ${formData.get('telnum')}\n\nMessage: \n${formData.get('message')}`,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        alert('Message submitted successfully!');
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting message. Please try again.');
    });
  }