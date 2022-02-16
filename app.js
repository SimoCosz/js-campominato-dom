// VARIABILI

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
  let element = this.innerHTML;
  if (numeroBombe.includes(parseInt(element))){
    this.classList.add('square-boom');
  } else {
    this.classList.add('square-select');
  }
  console.dir(element)
  this.removeEventListener('click', cellaCallBack)
  this.classList.remove('event')
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
    squareElement.classList.add('event')
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

function controlloBombe (){
  // if (!numeroBombe.includes(element) )
  
} 

// GAME

function startGame(){
  difficultyGrid();
  grid.innerHTML='';
  createSquareElement();
  createNumeroBombe();
  controlloBombe();
  
}
  


// applico la funziona al click del bottone play
play.addEventListener('click', startGame);
