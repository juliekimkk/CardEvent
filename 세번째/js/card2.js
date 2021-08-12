var count = [0,1,2,3];
function cardSet(){
    for(var i = 0; i<4; i++){
        const card = document.createElement('div'); //div4개 생성
        card.className = 'card'; 
        
        const input = document.createElement('input'); //input생성
        input.className = 'card-inner';
        input.type = 'radio';
        input.id = 'choice'+i;
        
        input.value = i;

        const label = document.createElement('label'); //* label생성
        label.setAttribute("for", "choice"+i); 
        label.className = 'card-label'; 
        label.value = 'chk'+i;
        input.name = 'chk';
    
        card.appendChild(input); //card에 합치기 
        card.appendChild(label);
        console.log(card);

        // var clickedCard = [];
        // clickedCard.push(cardInner,label);
        // console.log(clickedCard)

        document.querySelector('#wrapper').appendChild(card); //클래스에 생성한 카드셔플 넣기

        
        

        card.addEventListener('click', clicked);

        function clicked(){
            var arr = [];
            var queryVal = $("input[name='chk']:checked").val();
            arr.push(queryVal);
            console.log(arr);
            if(arr[0] == count[0]){
                test = document.getElementsByTagName("value","chk0")
 
                $(".chk[i]").css("background-color","black")
            }
            



}
            var cardNum = document.getElementsByName('chk');
            cardNum.value = function(){ // 여기에 선택된 radio 버튼의 값이 담기게 된다.
            for(var i=0; i<foods.length; i++) {
                if(foods[i].checked) {
                cardNum_value = foods[i].value;
        }}
            var chk = $("input[name='chk']");
            var complete = [];
            for(var j =0; j<5; j++){
            if($("#choice0").is(":checked") == true) {
                // complete.push(chk[j].value);
     
                
            }}

            // clicked.push(card);
            // if($(".card1").is(":checked")){
            //     console.log(clicked);
            // }
           



        }
    }
}

cardSet();