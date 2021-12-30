const chalk =require("chalk");
var readline = require('readline-sync');

var user=readline.question(chalk.yellow("What is Your name? "));
console.log(chalk.yellow("\n Welcome " +user+"\n"));
console.log(chalk.yellow("Welcome to * Prajakt's Quiz * \n"));


var score=0;

function quiz(question, answer){
  var useranswer=readline.question(question);
  if(useranswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Right!"));
    score++;
  }else{
    console.log(chalk.red("Wrong!"));
  }
console.log("--------------------------------------------\n");
console.log(chalk.green("Your score is "+score+ "\n\n"));
console.log("--------------------------------------------");
}

var questionList = [
  {
  que:"Where do I live? \n a.Rahuri \n b.A.Nagar \n c.Pune \n ",
  ans:"a",
},
{
  que:"What is my birth month? \n a.March \n b.Feb \n c.May \n",
  ans:"a",
},{
  que:"In which company I work?\n a.TCS \n b.Capgemini \n c.Infosys\n ",
  ans:"b",
},{
  que:"In which standerd I Wrote First Love Letter? \n a.first \n b.seventh \n c.Eleventh\n",
  ans:"a",
},{
  que:"What is my first crush's name? \n a. Mayuri \n b. sushmita \n c. pooja \n ",
  ans:"c",
},{
  que:"What is my hostel room number? \n a. G8 \n b.F6 \n c.F5 \n",
  ans:"b",
},{
  que:"What is my roomates name? \n a.Tejas\n b.Dinesh \n c.Akash \n",
  ans:"b",
},{
  que:"What is the name of my friends group? \n a.Unity \n b.9292 \n c.Mask \n",
  ans:"a",
},{
  que:"My graduation passing year? \n a.2022 \n b.2019 \n c.2021\n",
  ans:"c",
},{
  que:"My favourite teacher?\n a.wahval\n b.Ambade \n c.Kanade \n",
  ans:"a",
},{
  que:"How many roomates I had in first year? \n a.2\n b.4 \n c.3 \n",
  ans:"c",
},{
  que:"What is my favourite bad word? \n a.mc \n b.bc \n c.L\n",
  ans:"a",
}
];


for(var i=0; i< questionList.length; i++){
  var q=questionList[i];
  quiz(q.que ,q.ans);
}

if(score === questionList.length){

  console.log("--------------------------------");
  console.log(chalk.yellow.underline.bold("Congrats"+"\n"+"Best Scorers"));
  console.log("--------------------------------");
  console.log(chalk.green("Prajakt"));
  console.log(chalk.green(user));
}else{
  console.log(chalk.yellow.underline("Your total Score is:"+ score+"\n"));
  console.log(chalk.green("Prajakt is best scorer"));
}