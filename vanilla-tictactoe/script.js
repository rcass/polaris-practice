const boxes = document.getElementsByClassName('box');
  
Array.prototype.forEach.call(boxes, function(element){
  element.addEventListener('click', handleClick)
});

// game state 
// which square has what value
// whos turn
// winning conditions - win or draw 
let playerTurn = 'Player 1';

 //player values
 const playerOneValue = 'X';
 const playerTwoValue = 'O';


let gameBoard = ["","","","","","","","",""];  

function winningConditions(params) {
    
    // if index 0,1,2 equal
    if(gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]){
      console.log('won!');
    } 
    
    // if index 3,4,5
    if(gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]){
        console.log('won!');
      } 
    
    // if index 6,7,8
    if(gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]){
        console.log('won!');
      } 
    
    // if index 0,3,6
    if(gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]){
        console.log('won!');
      } 
    
    // if index 1,4,7
    if(gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]){
        console.log('won!');
      } 
    
    // if index 2,5,8
    if(gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]){
        console.log('won!');
      } 
    
    // if index 0,4,8
    if(gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]){
        console.log('won!');
      } 
    
    // if index 2,4,6
    if(gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]){
        console.log('won!');
      } 
    

}


function handleClick(event){
 const element = event.target;
 let elementValue = element.innerHTML;

 // Update gameboard array
const elementIndex = element.id.slice(-1);
 
 // Add X to the board (UI)
if(elementValue !== ''){
    return
}
 if(playerTurn === 'Player 1'){
   element.innerHTML = playerOneValue
   gameBoard[elementIndex] = playerOneValue;
 } else {
   element.innerHTML = playerTwoValue
   gameBoard[elementIndex] = playerTwoValue;
 }


// Update playerTurn
 playerTurn = (playerTurn === 'Player 1') ? 'Player 2' : 'Player 1';
 document.getElementById('turn').innerHTML = playerTurn;

 console.log(gameBoard);

 winningConditions();

 
}