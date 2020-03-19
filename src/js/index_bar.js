const setting_btn = document.getElementById('settings');

const refresh_btn = document.getElementById('refresh');

const skip_btn = document.getElementById('skip');
 //showQuestion(currentQuestion) ;

setting_btn.addEventListener('click', () => {
    console.log("aaaaaaaaaaaa");
    window.open('resourcesrc/html/index.html',"_self");

  });
  refresh_btn.addEventListener('click', () => {
    window.open('resourcesrc/html/setting.html',"_self");
  });
  skip_btn.addEventListener('click', () => {
    //alert("if you click skip you will lose 2 points from your credit"); 
    console.log(currentQuestion)   ;
   // showQuestion(currentQuestion);

  });
