var questionsArray = questionsDb;
const images_folder = "../../resource/img/";
var currentQuestion = 0;

function showQuestion(index){
    //Question text
    questionTextDomElement = document.querySelector('#question_text');
    questionTextDomElement.textContent = questionsArray[index].questionText;

    //First row images
    firstRowImages = document.getElementById("images_table").rows[0].cells;
    firstRowImages[0].getElementsByTagName('img')[0].src = images_folder + questionsArray[index].pictures[0];
    firstRowImages[1].getElementsByTagName('img')[0].src = images_folder + questionsArray[index].pictures[1];

    //Second row images
    secondRowImages = document.getElementById("images_table").rows[1].cells;
    secondRowImages[0].getElementsByTagName('img')[0].src = images_folder + questionsArray[index].pictures[2];
    secondRowImages[1].getElementsByTagName('img')[0].src = images_folder + questionsArray[index].pictures[3];
}

showQuestion(currentQuestion);

const imgClick = document.querySelector('#images_table');
imgClick.addEventListener('click', (e) => {
    console.log(e);
  let result = -1;
  if(e.path[2].rowIndex == 0){
    if(e.path[1].cellIndex == 0)
        result = 0;
    else
        result = 1;
  }else if (e.path[2].rowIndex == 1){
    if(e.path[1].cellIndex == 0)
      result = 2;
    else
      result = 3;
  }
  if( result === questionsArray[currentQuestion].answer){
    currentQuestion++;
    showQuestion(currentQuestion);
  }else{
    alert("Wrong answer BRO");
  }

});
