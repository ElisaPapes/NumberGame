
// Vairáveis
const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 1;
let randomNumber = Math.round(Math.random() * 10 ); 

// Eventos
btnTry.addEventListener('click', handleTryClick);

btnReset.addEventListener('click', handleResetClick);

document.addEventListener('keydown', handleEnter)

// Funções
function handleEnter(e){
  if (e.key == 'Enter' && screenOne.classList.contains('hide')){
    handleResetClick();
  }
}

function handleTryClick(event) {
  event.preventDefault(); // Não faça o padrão ou seja, nesse caso: não envie o formulário;

  let inputNumber = document.querySelector("#inputNumber");
  
  console.log(inputNumber.value);
  console.log(randomNumber);

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (inputNumber.value) == "") {
    alert("Por favor, insira um número entre 0 e 10") 

  } else if (Number(inputNumber.value) === randomNumber){
    toggleScreen();

    console.log(`Tentativas: ${xAttempts}`);

    document
      .querySelector(".screenTwo h2")
      .innerText = `Acertou em ${xAttempts} vezes!`;
        
  } else {

  inputNumber.value = "";
  xAttempts++;
  }
}

function handleResetClick(){
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10 );
}

function toggleScreen(){
  // Pego no documento a classe "screenOne" e adiciono/removo "hide";
  screenOne.classList.toggle("hide");
  // Pego no documento a classe "screenTwo" e removo/adiciono "hide";
  screenTwo.classList.toggle("hide");
}
