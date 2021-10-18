var readlineSync=require('readline-sync');
var score=0;
var usrNme=readlineSync.question('Enter Your Name  ');
console.log("Welcome  "+usrNme+ "! here i will ask some question about cricket. let see how well do you know about cricket?");
var questions=[
  {
    question:"how many players do play from one team ? ",
    answer:"11"
  },
  {
    question:"how many umpires are there in a single match? ",
    answer:"3"
  },
  {
    question:"how many times does indian team won ODI world cup? ",
    answer:"2"
  },
  {
    question:"how many times does india team won t20 world cup? ",
    answer:"1"
  },
  {
    question:"how many balls are there in one over? ",
    answer:"6"
  },
  {
    question:"for how many days does a test match played? ",
    answer:"5"
  },
  {
    question:"ODI stand for? ",
    answer:"one day international"
  } ];
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if (userAnswer===answer)
  {  
  console.log("awesome! You have good knowledge about cricket.");
  score=score+1;
  console.log("Your score is "+score);
  }
  else
  {
    score=score-1;
    console.log("Your score is "+score);
    console.log("what? you dont know this? ahh!");
  }
}

for (var i=0;i<questions.length;i++)
{
  var currentquestions=questions[i];
  play(currentquestions.question,currentquestions.answer)
}