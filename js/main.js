// skills progressing
let insideSpan = document.querySelectorAll(".progress span")
let skillsDiv = document.querySelector(".our-skills")


let setTime = new Date("dec 31,2023 23:59:59").getTime()
let conuter =  setInterval(() => {
let now = new Date().getTime()
let defrTime = setTime - now

let days = ~~(defrTime / (1000 * 60 * 60 * 24))
let hours = ~~(defrTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
let minutes = ~~(defrTime % (1000 * 60 * 60 ) / (1000 * 60 ));
let seconds = ~~(defrTime % (1000 * 60 ) / (1000));

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds
    if(defrTime < 0 ){
        clearInterval(conuter)
    }
}, 1000);


let spans = document.querySelectorAll('.s-q')
let aweSomeDiv = document.querySelector('#awesome')


let start = false

window.onscroll = function (){
    if (window.scrollY >= skillsDiv.offsetTop - 250) {
        insideSpan.forEach((span) => { 
            span.style.width = span.dataset.width
        });
    }
    if(window.scrollY >= aweSomeDiv.offsetTop){
        if(!start){
            spans.forEach((sp)=> t(sp))
    }
    start = true
    }
}


const t = n => {
    let f = setInterval(() => {
        n.innerHTML++;
        if(n.innerHTML === n.dataset.nm){
            clearInterval(f)
        }
    }, 2000 / n.dataset.nm);
}

