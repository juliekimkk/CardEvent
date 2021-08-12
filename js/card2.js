
let arrNum = ["0","1","2","3"];
var clickedCard = [];
var completedCard = [];

var input =[];
function getInputVal(){
    var clicked = document.getElementById('inputId1').name;
    clickedCard.push(clicked);
    console.log(clickedCard);
}


function getInputVal1(){
    var clicked = document.getElementById('inputId1').value;
    clickedCard.push(clicked);
    console.log(clickedCard);
    checkNum();
}
function getInputVal2(){
    var clicked2 = document.getElementById('inputId2').value;
    clickedCard.push(clicked2);
    console.log(clickedCard);
    checkNum();
}
function getInputVal3(){
    var clicked3 = document.getElementById('inputId3').value;
    clickedCard.push(clicked3);
    console.log(clickedCard);
    checkNum();
}

function checkNum(){
//completedCard에 들어있지않은 카드만. 하기


    if(clickedCard[0] == arrNum[0]){
        alert('matched!');
        completedCard.push(clickedCard[0]);
        if(completedCard.indexOf(clickedCard[0])){
            alert('잘 맞췄습니다. 다음은?');
        }else{
            clickedCard.push();
            console.log(clickedCard);
        }
    }else{
        clickedCard.pop();
        console.log(clickedCard);
    }
}


