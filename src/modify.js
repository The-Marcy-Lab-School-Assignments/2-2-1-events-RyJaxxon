const buttonClick = document.querySelector('#click-button')
const clickCounterHandler = () => {
  let nums = buttonClick.dataset.clicks
  nums++
  buttonClick.dataset.clicks = nums
  console.log(nums)
  if (nums === 1){
    buttonClick.textContent = `I've been clicked ${nums} time.`
  } else {
    buttonClick.textContent = `I've been clicked ${nums} times!`
  }
};
buttonClick.addEventListener("click", clickCounterHandler)

const keyTracker = document.querySelector('#keydown-tracker')
const handleKeydown = (e) => {
  // console.log(e);
  const keyPressed = e.code
  if (keyPressed === 'Enter'){
    keyTracker.textContent = `You pressed Enter`
  } else if (keyPressed === " "){
    keyTracker.textContent = `You pressed Space`
  } else {
    keyTracker.textContent = `You pressed ${e.code}`
  }
};
document.body.addEventListener("keydown",handleKeydown)


const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};

const main = () => {
  const delegationContainer = document.querySelector('#delegation');

  delegationContainer.addEventListener('click', handleDelegation);
};

main();
