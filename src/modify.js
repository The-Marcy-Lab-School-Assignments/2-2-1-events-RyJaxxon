// Question 1
/** FEEDBACK: Great job getting all test cases to pass! */
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

// Question 2
const keyTracker = document.querySelector('#keydown-tracker')
const handleKeydown = (e) => {
  keyTracker.textContent = `You pressed ${e.code}`
};
document.body.addEventListener("keydown",handleKeydown)

// Question 3
const secondClick = document.querySelector("#inline-example")
const clickCounterHandler2 = () => {
  let nums = secondClick.dataset.clicks
  nums++
  secondClick.dataset.clicks = nums
  console.log(nums)
  if (nums === 1){
    secondClick.textContent = `I've been clicked ${nums} time.`
  } else {
    secondClick.textContent = `I've been clicked ${nums} times!`
  }
};
secondClick.addEventListener("click", clickCounterHandler2)

// Question 4
const delegator = document.querySelector("#delegation")
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  if (event.target.matches('.grid-item')) {
    resultSpan.textContent = event.target.textContent;
  }
};
delegator.addEventListener("click",handleDelegation)

// Question 5
const num = document.querySelector('#add-random-num')
const addNewRandomNumber = () => {
  const listLocal = document.getElementById('random-numbers');
  const listItem = document.createElement('li');  
  /** FEEDBACK: Make sure to add 1 at the end so that the numbers are always above 1! */
  listItem.textContent = Math.floor(Math.random() * 100);
  listLocal.append(listItem);
};
num.addEventListener("click",addNewRandomNumber)

// Question 6
const remove = document.querySelector("#remove")
const removeDelegator = () =>{
  delegator.removeEventListener("click", handleDelegation)
}
remove.addEventListener("click",removeDelegator)



