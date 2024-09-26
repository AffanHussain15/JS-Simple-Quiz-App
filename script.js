var question = [
    "2-2 is?",
    "2x2 is?",
    "3+7 is?",
    "Which is the Biggest city of Pakistan?",
    "Which is the Capital of Pakistan?"
];
var answer = [
    "0",
    "4",
    "10",
    "Karachi",
    "Islamabad"
];

var correctanswer = 0;
var wronganswer = 0;

for (var i = 0; i < question.length; i++){
    var useranswer = prompt(question[i])

    if ( useranswer === answer[i]){
        correctanswer++
    }else {
        wronganswer++
    }
}

var totalscore = correctanswer;

if(totalscore === 5){
    alert("5 out of " + totalscore + ": A+")
}else if(totalscore >= 4){
    alert( "5 out of "+ totalscore + ": A")
}else if(totalscore >= 3){
    alert("5 out of " + totalscore + ": B")
}else if(totalscore >= 2){
    alert("5 out of " + totalscore + ": C")
}else if(totalscore >= 1){
    alert("5 out of " + totalscore + ": D")
}else {
    alert("F")
}