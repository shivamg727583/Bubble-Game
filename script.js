var panelBody = document.querySelector(".panelBody")
var randomNum = Math.floor(Math.random() * 10);
var startBtn=document.querySelector("button");


function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 119; i++) {
        var randomNum = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${randomNum}</div>`
      
    }
    panelBody.innerHTML = clutter
}
var timer = 30;
function makeTimer() {
    var interTimer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").innerHTML = timer
        }
        else{
            clearInterval(interTimer)
            panelBody.innerHTML=`  <div class="container">
    
            <div class="elem1">
                <h4>score</h4>
                <div class="box1" id="score">${score}</div>
            </div>
                <h1>Game Over</h1> 
                <button id="btn1" >Play again <i class="ri-restart-line"></i></button>
            
        </div>
         `
        }
    }, 1000)


}
var newHitValue=0;
function newHit(){
    var randomNum = Math.floor(Math.random() * 10);
    newHitValue=randomNum;
    document.querySelector("#hit").innerHTML=randomNum;
}

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#score").innerHTML=score
}

panelBody.addEventListener("click",function(dets){
   var bubbleValue= dets.target.textContent;
   if(bubbleValue==newHitValue){
    increaseScore();
    makeBubble();
    newHit();
   }
   

})



var startTime =3;
startBtn.addEventListener("click",function(){
    document.querySelector(".main").style.transform="translateY(-100%)"
   var timer= setInterval(function(){
       if(startTime>0){
        panelBody.innerHTML=`<h1>${startTime}</h1>`;
        startTime--;
       }
       else{
        clearInterval(timer);
        makeBubble();
        makeTimer();
        newHit();
       }
    },1000)

    
})
