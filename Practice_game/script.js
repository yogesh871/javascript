console.log("----------roll, pepar, scissor game-----------")
console.log("'r' for roll\n'p' for pepar\n's' for scissor\nYou have 10 chances\n");

let choice = ["r", "p","s"]
let me_points = 0;
let computer_points = 0;
let chance = 10;


while (chance > 0) {
  console.log(`${chance} chance left...!`);
  let me = prompt("Enter Your Choice r p s: ");
  let computer = choice[Math.floor(Math.random() * choice.length)];
  chance -= 1;

  if(computer == "r" &&  me == "p"){
    console.log("computer chosen 'roll' and you chosen 'pepar' \n you won a point")
    me_points += 1;
  }
    
 else if(computer == "p" &&  me == "s"){
    console.log("computer chosen 'pepar' and you chosen 'scissor' \n you won a point")
   me_points += 1;
  }
   
 else if(computer == "s" &&  me == "r"){
    console.log("computer chosen 'scissor' and you chosen 'roll' \n you won a point")
   me_points += 1;
  }
   
 else if(computer == "s" &&  me == "p"){
    console.log("computer chosen 'scissor' and you chosen 'pepar' \n computer won a point")
   computer_points += 1;
}
 else if(computer == "p" &&  me == "r"){
    console.log("computer chosen 'pepar' and you chosen 'roll' \n computer won a point")
    computer_points += 1;
  }
 else if(computer == "r" &&  me == "s"){
    console.log("computer chosen 'roll' and you chosen 'scissor \n computer won a point")
    computer_points += 1;
  }
   else if (computer == me) {
      console.log("Tie\n");
    } else {
      console.log("Invalid input...\n");
    }
  }

if (me_points > computer_points) {
  console.log(`You won this game with ${me_points} points...`);
} else if (me_points < computer_points) {
  console.log(`Computer won this game with ${computer_points} points...`);
} else if (me_points == computer_points) {
  console.log(`This game is tie with ${me_points - computer_points} points...`);
}


console.log("----------Thank's for playing this game------------")
