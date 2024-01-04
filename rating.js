const ratediv = document.querySelector(".rate");
const star1 = document.getElementById("st1");
const star2 = document.getElementById("st2");
const star3 = document.getElementById("st3");
const star4 = document.getElementById("st4");
const star5 = document.getElementById("st5");
const user = document.getElementById("name");
const message = document.getElementById("RateMessage");
var ratecount = 0;

ratediv.addEventListener("click", (e) => {
    if (ratecount == 0){
        star1.classList.remove("checked");
        star2.classList.remove("checked");
        star3.classList.remove("checked");
        star4.classList.remove("checked");
        star5.classList.remove("checked");
    }
    if (ratecount == 1){
        star1.classList.add("checked");
        star2.classList.remove("checked");
        star3.classList.remove("checked");
        star4.classList.remove("checked");
        star5.classList.remove("checked");
    }
    if (ratecount == 2){
        star1.classList.add("checked");
        star2.classList.add("checked");
        star3.classList.remove("checked");
        star4.classList.remove("checked");
        star5.classList.remove("checked");
    }
    if (ratecount == 3){
        star1.classList.add("checked");
        star2.classList.add("checked");
        star3.classList.add("checked");
        star4.classList.remove("checked");
        star5.classList.remove("checked");
    }
    if (ratecount == 4){
        star1.classList.add("checked");
        star2.classList.add("checked");
        star3.classList.add("checked");
        star4.classList.add("checked");
        star5.classList.remove("checked");
    }
    if (ratecount == 5){
        star1.classList.add("checked");
        star2.classList.add("checked");
        star3.classList.add("checked");
        star4.classList.add("checked");
        star5.classList.add("checked");
    }
    if (ratecount >= 1){
        user.style.display = "block";
        message.style.display = "block";
    } else {
        user.style.display = "none";
        message.style.display = "none";
    }
});

star1.addEventListener("click", (e) => {
    if (ratecount == 1){
        ratecount = 0;
    } else {
        ratecount = 1;
    }
});
star2.addEventListener("click", (e) => {
    if (ratecount == 2){
        ratecount = 0;
    } else {
        ratecount = 2;
    }
});
star3.addEventListener("click", (e) => {
    if (ratecount == 3){
        ratecount = 0;
    } else {
        ratecount = 3;
    }
});
star4.addEventListener("click", (e) => {
    if (ratecount == 4){
        ratecount = 0;
    } else {
        ratecount = 4;
    }
});
star5.addEventListener("click", (e) => {
    if (ratecount == 5){
        ratecount = 0;
        
    } else {
        ratecount = 5;
    }
});

// Rate Webhook
const nameval = document.querySelector("#name");
const sendbtn = document.getElementById("ratesendbtn");

    nameval.addEventListener("input", e =>{
        if(!nameval.value){
            sendbtn.style.display = "none";
        }else{
            sendbtn.style.display = "block";
        }
    });

function sendrate() {
    var hook = new XMLHttpRequest();
    var form = document.getElementById('rateform');
    var formData = new FormData(form);

    var mess = null;

    if (ratecount == 1){
        mess = `--Rate--\n Rate By: ${formData.get('name')}  \n ⭐ \nComment:\n${formData.get('message')}`;
    }
    if (ratecount == 2){
        mess = `--Rate--\n Rate By: ${formData.get('name')}  \n ⭐⭐ \nComment:\n${formData.get('message')}`;
    }
    if (ratecount == 3){
        mess = `--Rate--\n Rate By: ${formData.get('name')}  \n ⭐⭐⭐ \nComment:\n${formData.get('message')}`;
    }
    if (ratecount == 4){
        mess = `--Rate--\n Rate By: ${formData.get('name')}  \n ⭐⭐⭐⭐ \nComment:\n${formData.get('message')}`;
    }
    if (ratecount == 5){
        mess = `--Rate--\n Rate By: ${formData.get('name')}  \n ⭐⭐⭐⭐⭐ \nComment:\n${formData.get('message')}`;
    }

    var webhookUrl = 'https://discord.com/api/webhooks/1191298466291404911/EluoJyRi-aTtLaoTmYRNpRnpLRwmCDfd7SfvC7KgVtDt8Pq5ZPfDrGrYCQNrAptYUebd';

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `${mess}`,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        alert('Rate submitted successfully!');
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting rate. Please try again.');
    });
  }