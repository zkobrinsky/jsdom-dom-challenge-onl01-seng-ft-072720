let counter = 0;
let timerSwitch = true;

window.addEventListener('DOMContentLoaded', (event) => {
    let counterDisplay = document.querySelector("#counter");
    const pauseButton = document.querySelector("#pause");
    const minusButton = document.querySelector("#minus");
    const plusButton = document.querySelector("#plus");
    const heartButton = document.querySelector("#heart");
    const commentButton = document.querySelector("#submit");
    let timerID = setInterval(myTimer, 1000);


 

    pauseButton.addEventListener("click", pauseTimer);
    minusButton.addEventListener("click", minusTimer);
    plusButton.addEventListener("click", plusTimer);
    heartButton.addEventListener("click", likeNumber);
    commentButton.addEventListener("click", addComment);

    function myTimer() {
        counterDisplay.innerText = ++counter;
        
    }


    function pauseTimer() {
        if (timerSwitch === true) {
        disableButtons();
        pause();
        pauseButton.innerText = "resume";
        } else {
            resume();
            enableButtons();
            pauseButton.innerText = "pause"
        }
        timerSwitch = !timerSwitch;
    }

    function minusTimer() {
        // pause and resume are to remove clumsiness
        pause();
        counterDisplay.innerText = --counter;
        resume();
    }

    function plusTimer() {
        // pause and resume are to remove clumsiness
        pause();
        counterDisplay.innerText = ++counter;
        resume();
    }

    function disableButtons() {
        minusButton.removeEventListener("click", minusTimer);
        plusButton.removeEventListener("click", plusTimer);
        heartButton.removeEventListener("click", likeNumber);
    }

    function enableButtons() {
        minusButton.addEventListener("click", minusTimer);
        plusButton.addEventListener("click", plusTimer);
        heartButton.addEventListener("click", likeNumber);
    }

    function pause(){
        clearInterval(timerID);
    }

    function resume() {
        timerID = setInterval(myTimer, 1000);
    }

    function likeNumber() {
        console.log(`liked ${counter}`)
        let div = document.querySelector("body > div");
        let p = document.createElement("p");
        let likeText = document.getElementById(`${counter}`);

        if (likeText === null) {
            p.id=`${counter}`;
            p.innerText = `1 person liked the number ${p.id}`;
            div.prepend(p);
        } else {
            let numLikes = likeText.innerText.substring(0,1);
            ++numLikes;
            likeText.innerText = `${numLikes} people liked the number ${likeText.id}`
        }
    }

    function addComment(e) {
        e.preventDefault();
        const formText = document.querySelector("#comment-input");
        const comments = document.querySelector("#list");
        const formBlock = document.querySelector("#comment-form");
        const newUl = document.createElement("ul");
        const newComment = document.createElement("li")

        newUl.append(newComment);
        comments.append(newUl);

        newComment.innerText = formText.value;
        formBlock.reset();

    }

});



 