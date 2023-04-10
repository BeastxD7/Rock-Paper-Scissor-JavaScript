// Create Rock, Paper & Scissor game in JavaScript.
// The game should ask you to enter R, P or S. The computer should be able to randomly generate R, P or S and declare win or loss using console.log

var list = ['rock', 'paper', 'scissor']

let user_score = 0;
let computer_score = 0;


for (var round = 1; round < 11; round++) {
  let randomnum = Number.parseInt(Math.random() * 3)
  // console.log(randomnum)
  var computer_choice = list[randomnum]
  let user_choice = prompt("Enter your Choice " + list).toLowerCase()
  console.clear()
  console.log("-------------------------------------------\nROUND: " + round + "\t\t\t\t " + (10 - round) + " ROUNDS REMAINING\n-------------------------------------------\n\nUsers Choice: " + user_choice)
  switch (user_choice) {
    //Rock Condition
    case 'rock': +'\n'
      console.log('Computer Choice: ' + computer_choice)
      if (computer_choice == 'rock') {
        console.log("Its a Draw this Round!! \nScore = User: " + user_score + " Computer: " + computer_score + '\n')
      }
      else if (computer_choice == 'paper') {
        computer_score++;
        console.log("Computer Wins this Round. \nScore = User: " + user_score + " Computer: " + computer_score + '\n')
      }
      else if (computer_choice == 'scissor') {
        user_score++;
        console.log("User wins this Round!. \nScore = User: " + user_score + " Computer: " + computer_score + '\n')
      }
      break;

    //Scissor Condition
    case 'scissor':
      console.log('Computer Choice: ' + computer_choice)
      if (computer_choice == 'rock') {
        computer_score++;
        console.log("Computer Wins this Round. \nScore = User: " + user_score + " Computer: " + computer_score + '\n')
      }
      else if (computer_choice == 'paper') {
        user_score++;
        console.log("User Wins this Round. \nScore = User: " + user_score + " Computer: " + computer_score + '\n')
      }
      else if (computer_choice == 'scissor') {
        console.log("Its a Draw this Round!. \nScore = User: " + user_score + " Computer: " + computer_score + '\n')
      }
      break;

    //Paper Condition
    case 'paper':
      console.log('Computer Choice: ' + computer_choice)
      if (computer_choice == 'rock') {
        user_score++;
        console.log("User Wins this Round. \nScore = User: " + user_score + " Computer: " + computer_score + '\n')
      }
      else if (computer_choice == 'paper') {
        console.log("Its a Draw this Round!. \nScore = User: " + user_score + " Computer: " + computer_score + '\n')
      }
      else if (computer_choice == 'scissor') {
        computer_score++;
        console.log("Computer wins this Round!. \nScore = User: " + user_score + " Computer: " + computer_score + '\n')
      }
      break;

    default:
      console.log("You Lose, Enter a Valid  Choice")
      break;
  }
}
if (user_score > computer_score) {
  console.log("User won by " + user_score + " Points")
}
else {
  console.log("Computer won by " + computer_score + " Points")
}
