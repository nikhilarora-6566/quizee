var chalk =require("chalk");
var score = 0
var readlineSync=require("readline-sync");
var userName=readlineSync.question(chalk.bold.rgb(255,128,0)("What's your name?\n-> "));
console.log("\nWelcome",chalk.bold.rgb(51,51,255)(userName.toUpperCase()),"!\n");
console.log(chalk.yellowBright.bold("*********************\n"));
console.log("Let's Begin the Game!\n");
console.log(chalk.yellowBright.bold("*********************\n"));
function quiz(Question,options,Answer)
{  
  console.log(Question,"\n");
  var userAnswer=readlineSync.question(chalk.bold.rgb(51,51,255)(options));
  if(userAnswer.toUpperCase()===Answer.toUpperCase())
  { score=score+1;
    console.log(chalk.rgb(0,255,0)("\nCorrect Answer!"));
  }
  else
  {
    console.log(chalk.rgb(255,0,0)("\nWrong Answer!"));
    console.log(chalk.rgb(0,255,0)("Right answer is : ",Answer));

  }
   console.log(chalk.bold.rgb(51,51,255)("\n-------------------------\n"));
}
var Questions= [{
  question: "1. Where do I live?",
  options:"->",
  answer: "Ludhiana",
},
{
  question: "2. What is my Nickname? ",
  options:"->",
  answer: "vishu",
},
{
   question:"3.When is my Birthday?",
   options:"a. 27 September?\nb. 5 January\nc. 31 February\nd. None of these \n->",
   answer: "a",
},
{
  question:"4.What is My favourite Cartoon ",
  options:"a. Noddy\nb. Oswald\nc. Bob The builder\nd. All of these \n->",
  answer: "d",
},
{
  question:"5. What's your favorite family recipe?",
  options:"a. Red Sauce Pasta\nb. Mushrooms\nc. Spaghetti\nd. None of these\n->",
  answer: "a",
},
{
  question:"6. Where I did my Schooling? ",
  options:"a. DCM Presidency School\nb. Sacred Heart Convent School \nc. Ryan International School \nd. BCM School\n->",
  answer: "b",
},
{
  question: "7. Which Sport I liked the most?",
  options:"a. Basketball \nb. Volleyball \nc. Football \nd. None \n->",
  answer: "c",
},
{
  question:"8. What make me happy?",
  options:"a. Friends \nb. Vacations \nc. Food\n->",
  answer :"a",
},
{
  question:"9. Who is my First Love?",
  options:"->",
  answer:"mom",
},
{
  question:"10. Which Movies I love most?",
  options:"a. Thriller\nb. Romantic\nc. Horror\nd. Kids\n->",
  answer: "b",
}
]

// Data of High Scores

var highScores=[
{
  name:"Vishal",
  score:10,
},
{
  name:"Rishav",
  score:9,
}
]

for(var i=0;i<Questions.length;i++)
{
  var currentQuestion = Questions[i];
  quiz(currentQuestion.question,currentQuestion.options,currentQuestion.answer)
}
if(score<=4)
{
  console.log(chalk.bold.redBright("I am Hurt :("),"\nYou scored: ",score);
}
else if(score>=5 && score<=8 ||score==9)
{
  console.log(chalk.bold.yellowBright("Well Played\nYou scored: ", score));
}
else
{
  for(var i=0;i<highScores.length;i++)
{
  var currentPlayer = highScores[i];
  if(score>currentPlayer.score)
{
  console.log(chalk.bold.rgb(102,255,255)("Hey! You have beaten the highscore!"));
  console.log("Send me Screen Shot so that I can Update the High Scores list !!\n");
  for(var i=0;i<highScores.length;i++)
{
  var currentPlayer = highScores[i];
  console.log("Name: ",currentPlayer.name,"\nScored: ",currentPlayer.score);
}
}
}
}