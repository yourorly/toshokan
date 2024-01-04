document.addEventListener('DOMContentLoaded', () => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    const d = new Date();
    let month = months[d.getMonth()];
    let hourtime = d.getHours();
    let mintime = d.getMinutes();
    document.getElementById("date").innerHTML = "Ordered Date: " + month + " " + d.getDate() + " At " + hourtime + ":" + mintime + " / " + d;

    let ordernumber = Math.floor(Math.random()* (999999 - 100000 + 1)) + 100000;
    document.getElementById("ordernum").innerHTML = "Order Number: " + ordernumber;
});
