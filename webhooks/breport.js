function bugreport(){
    var form = document.getElementById('brform');
    var formData = new FormData(form);

    var webhookUrl = 'https://discord.com/api/webhooks/1190886881307656222/e1OZO9mgGKY4bufTHfuHYeDoX_dIMEYw_BieO_dqdlxHUQH4mgX5stpI3N1m0k0F0ZlJ';

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `!Bug Report!\n\nProblem:\n\nName: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPlatform: ${formData.get('platform')}\nDevice Resolution: ${formData.get('resolution')}\nPage: ${formData.get('page')}\n\nProblem: \n${formData.get('message')}`,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        alert('Report submitted successfully!');
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting report. Please try again.');
    });
}