var count = [0,1,2,3];
var currNum = -1;

function cardSet(){
    for(var i = 0; i<4; i++){
        const card = document.createElement('div'); //div4개 생성
        card.className = 'card'; 
        
        const input = document.createElement('input'); //input생성
        input.className = 'card-inner';
        input.type = 'checkbox';
        input.id = 'choice'+i;
        input.name = 'chk';
        input.value = i;

        const label = document.createElement('label'); //* label생성
        label.setAttribute("for", "choice"+i); 
        label.className = 'card-label'; 
        label.id = i;

        // console.log(label.id);

        
        
    
        card.appendChild(input); //card에 합치기 
        card.appendChild(label);
        // console.log(card);
        // var clickedCard = [];
        // clickedCard.push(cardInner,label);
        // console.log(clickedCard)
        document.querySelector('#wrapper').appendChild(card); //클래스에 생성한 카드셔플 넣기
        
        var cardTem = document.querySelectorAll('.card-inner');
        console.log(cardTem);
        cardTem[i].addEventListener('click', function(){


            // $(cardTem).click(function() {
            //     $("input[name=chk]:checked").each(function() {
            //         var test = $(this).val();
            //         console.log(test);
            //     });
    
            // });
       
            // var checked = $('input:checkbox[name="chk"]').val();
            // var checked = $('input[name="chk"]').is(":checked")
            // var checked = $('input:checkbox[name="chk"]').each(function(){
            // });


           


            
            // var splitDATA = DATA.split("|");
            // // console.log(splitDATA);
            // for (var i=0; i<splitDATA.length; i++) {
            //     alert(splitDATA.length-1);
            //    $('input:checkbox[name=chk][value='+splitDATA [i]+']').attr("checked", true).parent().addClass('on');
            //    if(splitDATA[i] == count[i]){
            //        console.log(splitDATA[i]);
            //        console.log(count[i]);
            //     //    console.log('같다');
            //    }else{
            //     console.log('splitDATA='+splitDATA[i]);
            //     console.log('count='+count[i]);
            //    }
            // }   
            // console.log(splitDATA);

   
   
    

            // if(checked == true) {
                
            // }

        
            // .each(function(){
            //     alert('sf');
            //     var checkVal = $(this).value();
            //     console.log(checkVal);
            // })

            // console.log(checkedNum);
            // console.log(arr);
                // if(checkedNum == count[0]){
                //     alert('클릭한 val랑 count인덱스 요소가 같습니다')
                //     arr.push(checkedNum);  
                //     console.log(arr) //0     
                //     // var num = currNum;
                //     // test = document.getElementsByTagName("value","chk0")
                //     // $(".chk[i]").css("background-color","black")
                //     // arr =[]; //초기화
                //     // console.log(arr);
                // }else if(checkedNum == count[1]){
                //     alert('1인덱스가 같습니다.');
                // }
         });
    }


        //     var cardNum = document.getElementsByName('chk');
        //     cardNum.value = function(){ // 여기에 선택된 radio 버튼의 값이 담기게 된다.
        //     for(var i=0; i<foods.length; i++) {
        //         if(foods[i].checked) {
        //         cardNum_value = foods[i].value;
        // }}
        //     var chk = $("input[name='chk']");
        //     var complete = [];
        //     for(var j =0; j<5; j++){
        //     if($("#choice0").is(":checked") == true) {
        //         // complete.push(chk[j].value);
     
                
        //     }}

            // clicked.push(card);
            // if($(".card1").is(":checked")){
            //     console.log(clicked);
            // }        
    }


cardSet();

// $(".card-inner").click(function() {
//     var compleCard = [];
//     $("input[name=chk]:checked")
//         var inputVal = $(this).val();
//         console.log(inputVal);
//             if(this.inputVal == 0){
//                 console.log('값이 둘다 0입니다.');
//             }
        

// });


var clickE = document.querySelectorAll('.card-inner'); //querySelector와 getElementById는 단일 DOM 객체를 불러오지만 복수 선택 메소드들은 NodeList를 가져오기 때문이라고 함. 해결방법은 NodeList의 요소 하나하나에 for문으로 접근해 이벤트리스너를 붙이기.
for(var i =0; i< clickE.length; i++){
    var eachClick = clickE[i];
    eachClick.addEventListener('click', function(){
        var checkkkk = $("input[name=chk]:checked");
        var inputVal = $(this).val();
        console.log(inputVal);
        var NumArr = [0,1,2,3];
        for(var i = 0; i<NumArr.length; i++){
        if(inputVal == 0){
            if(inputVal == 1){
                console.log('값이 둘다 0입니다.');
                alert('값이 0입니다.');
            }else(){
                
            }
           
        }else if(inputVal == 1){
            console.log('값이 둘다 1 입니다 ');
        }}
    })
}

// function fun1(){
//     var checkkkk = $("input[name=chk]:checked");
//     var inputVal = $(this).val();
//     console.log(inputVal);
//     var NumArr = [0,1,2,3];
//     for(var i = 0; i<NumArr.length; i++){
//     if(inputVal == 0){
//         console.log('값이 둘다 0입니다.');
//         alert('값이 0입니다.');
//     }else if(inputVal == 1){
        
//     }}
// }

// clickE.addEventListener('click', function(){
//     $("input[name=chk]:checked")
//     var inputVal = $(this).val();
//     console.log(inputVal);
//         if(this.inputVal == 0){
//             console.log('값이 둘다 0입니다.');
//         }
// })