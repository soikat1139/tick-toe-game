

//selecting the elements
const menu=document.querySelector('.menu');
const dropDown=document.querySelector('.dropDown');

const modal=document.querySelector('.modal');
const modalClose=document.querySelector('.modalClose');
const playerSelection=document.querySelector('.playerSelection');
 const selectedPlayer=document.querySelector('[data-id="selectedPlayer"]');
 const square=document.querySelectorAll('.square');
 const squareArray=[...square];





 //Declaring Varaiable

 const moves={
    player:1,

 }


//adding event listeners

menu.addEventListener('click',function(e){
    console.log(e.target.title)
    dropDown.classList.toggle('hiddenDrop');
})
document.addEventListener('click',function(e){
    if(e.target.title!=='menu'){
        if(dropDown.classList.contains('hiddenDrop')){

            return;
        }
        else{
            dropDown.classList.add('hiddenDrop');
        }

    }
    
    })

modalClose.addEventListener('click',function(){ 
    modal.classList.toggle('hideModal');
})


// .addEventListener('click',function(e){

//     //if moves.player is 1 then set selectedPlayer innerText to be First Player Turn tothe square

//     if(moves.player===1){
//         selectedPlayer.innerText='First Player Turn';
//         e.target.innerText='X';
//         moves.player=2;
//     }
//     else{
//         selectedPlayer.innerText='Second Player Turn';
//         e.target.innerText='O';
//         moves.player=1;
//     }



// })

squareArray.forEach(function(square){
    square.addEventListener('click',function(e){
        if(moves.player===1){
            selectedPlayer.innerText='First Player Turn';
            e.target.innerText='X';
            moves.player=2;
        }
        else{
            selectedPlayer.innerText='Second Player Turn';
            e.target.innerText='O';
            moves.player=1;
        }
    })
})