// computer pick
var randomPickNum = Math.floor(Math.random() * 100) + 1;
console.log(randomPickNum);

var tries = 6;

const binarySearch = (array, target) => {
  let computerTries = 0;
  let startIndex = 0;
  let endIndex = array.length - 1;
  while(startIndex <= endIndex) {
    computerTries++
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === array[middleIndex]) {
      return {middleIndex ,computerTries};
    }
    if (target > array[middleIndex]) {
      console.log("Searching the right side of Array")
      startIndex = middleIndex + 1;
    }
    if (target < array[middleIndex]) {
      console.log("Searching the left side of array")
      endIndex = middleIndex - 1;
    }
    else {
      console.log("Not Found this loop iteration. Looping another iteration.")
    }
  }
  
  console.log("Target value not found in array");
}

// give enter btn click ability
document.querySelector("#btn").addEventListener("click", function (e) {
  if (tries <= 0) {
    alert("You have no more tries! - reset and try again");
    document.querySelector("#playAgain").classList.remove("hide");
    return;
  }

  var userPick = document.querySelector("#user-input").value;

  document.querySelector("#user-input").value = "";
  if (userPick > 100 || userPick < 0) {
    alert("Your answer is greater or less than 1-100 or you didn't input anything. Please try again.");
    return;

  }

  if (userPick == randomPickNum) {
    alert(
      "You got it correct! Thank you for playing our guessing game!"
    );
  } else if (userPick > randomPickNum) {
    alert("Your number is greater than the one picked.");
  } else if (userPick < randomPickNum) {
    alert("Your number is less than the one picked");
  }
  // onlick the btn should ................
  // get the user input value
  // check
  // display winners

  tries--;

  if (tries === 0) {
    alert("You have no more tries! - reset and try again");
    document.querySelector("#playAgain").classList.remove("hide");
  }

document.querySelector("#try").textContent = tries;
});

document.querySelector("#playAgain").addEventListener("click", function (e) {
  //restore Tries
  tries = 6;
  document.querySelector("#try").textContent = tries;
  //computer pick Again
  randomPickNum = Math.floor(Math.random() * 100) + 1;
  //console.log(randomPickNum);

  document.querySelector("#playAgain").classList.add("hide");
});

document.querySelector("#ask-robot").addEventListener("click", function(e) {
  var allPossibilites = [];
  for (let i = 1; i <= 100; i++) {
    allPossibilites[i] = i
  }
  console.log(allPossibilites);

  const {middleIndex ,computerTries} = binarySearch(allPossibilites,randomPickNum);

  console.log(middleIndex ,computerTries);

  document.querySelector(".robot-message").textContent = `
    Robot found the answer ${middleIndex}, in ${computerTries} tries.
  `;
});
