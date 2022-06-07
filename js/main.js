const CARROT_SIZE = 80;
const BUG_COUNT = 5;
const CARROT_COUNT = 5;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

let started = false;
let score = 0;
let timer = undefined;

gameBtn.addEventListener('click', ()=> {
  if(started) {
    stopGame()
  } else {
    startGame();
  }
  started = !started
})

function startGame() {
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
}

function showTimerAndScore() {
  gameTimer.style.visiblility = 'visible';
  gameScore.style.visibility = 'visible';
}

function stopGame() {}

function showStopButton() {
  const icon = gameBtn.querySelector('.fa-play');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
}


function initGame() {
  field.innerHTML = '';
  gameScore.innerText = CARROT_COUNT
  // 벌레와 당근을 생성한뒤 field에 추가 
  console.log(fieldRect)
  addItem('carrot', BUG_COUNT, 'imgs/carrot.png');
  addItem('bug', CARROT_COUNT, 'imgs/bug.png');

}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;
  for(let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomeNumber(x1, x2);
    const y = randomeNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item)
  }
}

function randomeNumber(min, max) {
  return Math.random() * (max - min) + min
}

