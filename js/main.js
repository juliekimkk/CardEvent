/*뒤집힘,가림박스*/
const card = document.querySelector(".card__inner1");
const box = document.querySelector(".box2");
let arrNum = [0,1,2,3,4];
var completedCard = [];
var currNum = 0;


var clicked = document.getElementByName('name');
console.log(clicked);
var clicked2 = document.querySelector('.card__inner2')
var clicked3 = document.querySelector('.card__inner3')
var clicked4 = document.querySelector('.card__inner4')
var clicked5 = document.querySelector('.card__inner5')
var clicked6 = document.querySelector('.card__inner6')

card.addEventListener("click", function (e) {
  var clicked = document.querySelector('.card__inner1').getAttribute('name');
  console.log(clicked);
  completedCard.push(clicked);
  // console.log(completedCard);
  if(clicked == completedCard[0]){
    card2();
  }else(
    alert('아니야')
    );
  card.classList.toggle('is-flipped'); //toggle은 클래스의 유무를 체크해서 없으면 add, 있으면 remove를 자동으로 시켜준다
  box.classList.toggle('on');
});



function card2(){
  var clicked2 = document.querySelector('.card__inner2').getAttribute('name');
  console.log(clicked2);
  completedCard.push(clicked2);
  // console.log(completedCard);
  if(clicked2 == completedCard[1]){
    card3();
  }else(
    alert('아니야')
    );
  const card2 = document.querySelector(".card__inner2");
  const box2 = document.querySelector(".box3");
  card2.addEventListener("click", function (e) {
    card2.classList.toggle('is-flipped');
    box2.classList.toggle('on');

  });
}

function card3(){
  var clicked3 = document.querySelector('.card__inner3').getAttribute('name');

  completedCard.push(clicked3);
  // console.log(completedCard);
  if(clicked3 == completedCard[2]){
    card4();
  }else(
    alert('아니야')
    );
  const card3 = document.querySelector(".card__inner3");
  const box3 = document.querySelector(".box4");
  
  card3.addEventListener("click", function (e) {
    card3.classList.toggle('is-flipped');
    box3.classList.toggle('on');
  });
}


function card4(){
  var clicked4 = document.querySelector('.card__inner4').getAttribute('name');

  completedCard.push(clicked4);
  // console.log(completedCard);
  if(clicked4 == completedCard[3]){
    card5();
  }else(
    alert('아니야')
    );
  const card4 = document.querySelector(".card__inner4");
  const box4 = document.querySelector(".box5");
  card4.addEventListener("click", function (e) {
    card4.classList.toggle('is-flipped');
    box4.classList.toggle('on');
  });
}



function card5(){
  var clicked6 = document.querySelector('.card__inner5').getAttribute('name');

  completedCard.push(clicked6);
  // console.log(completedCard);
  if(clicked6 == completedCard[4]){
    
  }else(
    alert('아니야')
    );
  const card5 = document.querySelector(".card__inner5");
  card5.addEventListener("click", function (e) {
    card5.classList.toggle('is-flipped');
  });
}


//display:none 이 되어야 box1 box2 ---들이 사라지면서 클릭할수있게됨.


function card_show(){
  num = currNum;
  if(num>=arrNum) return;
  for(i=0; i<arrNum.length; i++){
    tem1 = $('<input type="radio" name="choice" id="choice' + (i+1)+'">');
    tem2 = $('<label for="choice' + (i + 1) + '">').text(arrNum[i]);
  }
}