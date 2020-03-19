var start = new Audio();
    var slideIn = new Audio();
    start.src = "/home/morad/webAhead/brainTeaser/resource/snds/bbyScrm.mp3";
    slideIn.src = "/home/morad/webAhead/brainTeaser/resource/snds/slide.mp3";
    function jumpto(num) {
        start.play();
        // var div1 = document.getElementById("div1");
        // div1.innerHTML = "Let's to go to lvl #"+num;
    }

    function initial1() {
        slideIn.play();
    }



    const startBtn = document.getElementById('startBtn') ;
    startBtn.addEventListener('click', () => {
        window.open('../../src/html/splash.html','_self');
    })

// function stratFunc() {
  
//     document.querySelector('.start').style.transform = "scaleX(150deg) scaleZ(80deg)";
//     document.querySelector('.start').innerHTML = "<audio src='home/morad/webAhead/brainTeaser/resource/snds/bbyScrm.mp3'></audio>"
// }

