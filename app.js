// l'utente deve selezionare la dificoltà del gioco
  // collegare il bottone alla scelta dell'utente
const play = document.getElementById('play');
const easy = document.getElementById('easy').value;
const hard = document.getElementById('hard').value;
const crazy = document.getElementById('crazy').value;
const grid = document.querySelector('.grid');
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

function cellaCallBack(){
  this.classList.add('square-select');
  let element = this.innerHTML
  console.log(element)
  this.removeEventListener('click', cellaCallBack)
}

function createSquareElement (){
  for (let i = 0; i < Math.pow(numeroColonne, 2); i++){
    squareElement = document.createElement('div');
    squareElement.classList.add('square');
    squareElement.style.width = `calc(100% / ${numeroRighe})`;
    grid.append(squareElement);
    numero = i + 1;
    squareElement.append(numero);
    squareElement.addEventListener('click', cellaCallBack);
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
    let numeroBomba = getRandomIntInclusive(1, Math.pow(numeroColonne, 2))
    numeroBombe.push(numeroBomba)
  }
  console.log(numeroBombe)
}

function startGame(){
  difficultyGrid();
  grid.innerHTML='';
  createSquareElement();
  createNumeroBombe();
  
}
  


// applico la funziona al click del bottone play
play.addEventListener('click', startGame);
