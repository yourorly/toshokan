function purchasedata() {
    var hook = new XMLHttpRequest();
    var form = document.getElementById('purchaseform');
    var formData = new FormData(form);

    var webhookUrl = 'https://discord.com/api/webhooks/1191934861162840074/aBSZQTtglHGkUSwEAtKBy4oBaIL8Ic4gZ_as9PpqYjDiGzcjUJOXVWuqjZ4WR_2O2ia8';

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `--Purchase Data--\n\nBook: ${formData.get('book')}\n\n--User Data--\nPurchase By: ${formData.get('firstname')}\nEmail: ${formData.get('email')}\nAddress: ${formData.get('address')}\nCity: ${formData.get('city')}`,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        alert('Purchase submitted successfully!');
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting purchase. Please try again.');
    });
  }