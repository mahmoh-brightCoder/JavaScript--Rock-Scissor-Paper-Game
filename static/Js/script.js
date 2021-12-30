// chalange 1: your age in days is

//console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhh")

function ageInDays(){
    var birthYear = prompt("Enter your birth year my freind....!");
    var daysInAge = (2022-birthYear ) * 365;

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are  ' + daysInAge + ' years of days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);



    //console.log(daysInAge);


}  


function reset(){
    document.getElementById('ageInDays').remove();
}

function catGenerete(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-generetor');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"  ;
    image.width = 150;
    image.height = 150;
    div.appendChild(image);

}

function rpsGame(yourChoice){

    console.log(yourChoice);
    
    //console.log(yourChoice.src);

  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
   botChoice = numberToChoice(randomToRpsInt());
   console.log('computer Choice: ', botChoice);
   

   results = decideWinner(humanChoice,botChoice); // [0,1] human lose or [0.5,0.5] for draw [1,0] for Human win
   console.log(' this is result : ', results);

    message = finalMessage(results) // {'message' : "You Won", 'color' : 'green'}
    console.log(message);
   rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randomToRpsInt(){
    return Math.floor(Math.random() * 3 );
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){

    var rspDatabase = {

        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock': 1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    };

    var yourScore = rspDatabase[yourChoice][computerChoice];
    var computerScore = rspDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}


function finalMessage([yourScore, computerScore]){

    if(yourScore === 0){
        return {'message': 'You lost', 'color': 'red'};

    }else if(yourScore === 0.5){

        return {'message': 'You tied', 'color': 'yellow'};
    }else {

        return {'message': 'You Won', 'color': 'green'};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){

    var imagesDatabase = {

        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src, 
    };

    // imagesDatabase['rock']

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height = 150 width = 200  style = 'box-shadow: 0px 10px 50px rgba(37,50,233,1)' >" ;
    messageDiv.innerHTML = "<h1 style='color: " +finalMessage['color'] + "; font-size: 60px; padding: 30px; ' >" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height = 150 width = 200  style = 'box-shadow: 0px 10px 50px rgba(243,38,24,1)' >" ;
    

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
