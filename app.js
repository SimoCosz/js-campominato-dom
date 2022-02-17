// VARIABILI

const play = document.getElementById('play');
const easy = document.getElementById('easy').value;
const hard = document.getElementById('hard').value;
const crazy = document.getElementById('crazy').value;
const grid = document.querySelector('.grid');
let result = 0;
let punteggio = document.querySelector('.punteggio');
let risultato = document.querySelector('.risultato');
let squareElement;
let numero = 0;
let numeroRighe = 0;
let numeroColonne = 0;
let numeroBombe = []


// FUNZIONI

function difficultyGrid(){
  const dificoltà = document.getElementById('choose-difficulty').value;
  switch (dificoltà) {
    case easy :
      numeroRighe = 10;
      numeroColonne = 10;
      return numeroColonne;
    case hard :
      numeroRighe = 9;
      numeroColonne = 9;
      return numeroColonne;
    case crazy : 
    numeroRighe = 7;
      numeroColonne = 7;
      return numeroColonne;
    }
}

function gridCallBack(event){
  const newElement = event.target;
  if (numeroBombe.includes(parseInt(newElement.innerHTML))){
    newElement.classList.add('square-boom');
    endGameLose();
    revealBomb();
  } else if (!newElement.classList.contains('square-select')) {
    newElement.classList.add('square-select');
    result = result + 1;
    if (result == Math.pow(numeroColonne, 2) - 16 ){
      endGameWin();
      revealBomb();
    }
  }
}

function endGameLose(){
  grid.removeEventListener('click', gridCallBack);
  punteggio.innerHTML = '';
  punteggio.style.display = 'block';
  punteggio.append(`Mi dispiace, HAI PERSO. il tuo punteggio: ${result}`);
}

function endGameWin(){
  grid.removeEventListener('click', gridCallBack);
  punteggio.innerHTML = '';
  punteggio.append(`HAI VINTO! il tuo punteggio: ${result}`);
}

function createSquareElement (){
  for (let i = 0; i < Math.pow(numeroColonne, 2); i++){
    squareElement = document.createElement('div');
    squareElement.classList.add('square');
    squareElement.style.width = `calc(100% / ${numeroRighe})`;
    grid.append(squareElement);
    numero = i + 1;
    squareElement.append(numero);
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createNumeroBombe(){
  numeroBombe = []
  while (numeroBombe.length < 16){
    let bomba = getRandomIntInclusive(1, Math.pow(numeroColonne, 2))
    if (!numeroBombe.includes(bomba)){
      numeroBombe.push(bomba)
      console.log('bomba aggiunta')
    } else {
      console.log('bomba trovata')
    }
  }
  console.log(numeroBombe)
}

function revealBomb(){
  let numeroCell = document.getElementsByClassName('square')
  for (let i = 0; i < numeroCell.length; i++){
    if (numeroBombe.includes(parseInt(numeroCell[i].innerHTML))){
      numeroCell[i].classList.add('suqare-boom')
    }
  }
}

// GAME

function startGame(){
  difficultyGrid();
  grid.innerHTML='';
  createSquareElement();
  createNumeroBombe();
  grid.addEventListener('click', gridCallBack);
  punteggio.innerHTML = '';
  punteggio.style.display = 'none'
  result = 0


  
}
  


// applico la funziona al click del bottone play
play.addEventListener('click', startGame);
