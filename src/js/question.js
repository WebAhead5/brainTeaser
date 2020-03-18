var questionsArray = questionsDb;
const images_folder = "../../resource/img";
const currentQuestion = 0;

function showQuestion(index){
    //Question text
    questionTextDomElement = document.querySelector('#question_text');
    questionTextDomElement.textContent = questionsArray[index].questionText;

    //First row images
    firstRowImages = document.getElementById("images_table").rows[0].cells;
    console.log(firstRowImages[0]);
    console.log(images_folder + '/' + questionsArray[index].pictures[0]);
    console.log(firstRowImages[0].getElementsByTagName('img'));
    firstRowImages[0].getElementsByTagName('img').src = images_folder + questionsArray[index].pictures[0];
}

showQuestion(0);