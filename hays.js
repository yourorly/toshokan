//debug deactivator
(function () {
        (function a() {
            try {
                (function b(i) {
                    if (('' + (i / i)).length !== 1 || i % 20 === 0) {
                        (function () { }).constructor('debugger')()
                    } else {
                        debugger
                    }
                    b(++i)
                }
                )(0)
            } catch (e) {
                setTimeout(a, 5000)
            }
        }
        )()
    }
    )();

// Elements

console.warn("This is for debug only do not execute some scripts in here it will be useless to be honest cause nothing usefull in this website")
console.warn("This is for school purposes only :)")

// declaration
let cl = 0;
let likecount = 0;




// functions
function easteregg(){
    cl++;
    console.log("Secret Click : " + cl);
    if(cl === 3){
        console.log("message sent");
        alert("Wow Secret Book Unlocked (still on going)");
        cl = 0;
        location.replace("https://youtu.be/QwLvrnlfdNo?si=IdY1puontg-COSl3");
    } 
}
function debug(){
    if (document.getElementById("wbcont").isContentEditable === false){
        if (cl === 2){
        console.log("Debug On");
        alert("Debug On");
        document.getElementById("wbcont").contentEditable = true;
        cl = 0;
        }
    } else {
        console.log("Debug Off");
        alert("Debug Off");
        document.getElementById("wbcont").contentEditable = false;
    }
    
}

function like(){
    const like = document.querySelector(".fa-thumbs-up");
    const liked = like.classList.contains("fa-regular");

    if (liked === true){
        like.classList.remove("fa-regular");
        like.classList.add("fa-solid");
        likecount++;
    } else {
        like.classList.remove("fa-solid");
        like.classList.add("fa-regular");
        likecount--;
    }
    console.log(likecount);
    like.innerHTML = " " + likecount;
}
