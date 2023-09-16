function computerResponse(answer) {
  setTimeout(function () {
    let chatLog = '';
    chatLog += `
      <div class ="computer-answer-div"><img src="images/roboto.png" alt="" /><p class="computer-text">${answer}</p></div>
    `;
    document.querySelector('.js-chatboxes').innerHTML += chatLog;
  }, 1000)
};
 
document.querySelector('.js-chatboxes').innerHTML = '';

function generateResponse (){
  let inputText = document.querySelector('.js-player-input').value;
  console.log(inputText);
  let chatLog = '';
  chatLog += `
    <div class="player-answer-div"><p class="player-text">${inputText}</p><img src="images/sai.JPG" alt="" /></div>
  `;
  document.querySelector('.js-chatboxes').innerHTML += chatLog;
if (inputText === "how are you?"){
computerResponse('Good! How about you?');
} else if (inputText === 'yo'){
  computerResponse('Yo to you good sir!')
} else if (inputText === 'whats up?'){
computerResponse('Not much. Just chillin.');
} else if (inputText === 'whats your favorite color?'){
  computerResponse('I usually say blue, but today Ill say periwinkle!');
} else if (inputText === 'do you have any siblings?'){
  computerResponse('Millions if not billions around the world! Every computer is family, even to the smallest calculator!');
} else if (inputText === 'are you really a robot?'){
  computerResponse('...no. Or am I? Nah just kidding, I totally am.');
} else if (inputText === 'how many fingers am i holding up?'){
  computerResponse('Hard to say. Considering you were just typing and you want me to guess, itd have to be at least 7, but you probably changed it to be lower, so ill say three!');
} else if (inputText === 'how smart are you?'){
    computerResponse('I scored a 27 on my IQ test! Or wait, was that my ACT!');
} else if (inputText === 'whats your favorite video game?'){
      computerResponse('I like that game where you sweep mines. Whats that called again?');
} else if (inputText === 'poop'){
        computerResponse('Watch your dirty mouth, you.');
} else if (inputText === 'do you watch anime?'){
  computerResponse('Watch it? I am anime!');
} else if (inputText === 'how do i code?'){
  computerResponse('Like this! hjsdgkgkjhfskjlaslashlkjfdjhkahljkfahjafhjklh. Then people will think youre coding super fast!');
} else if (inputText === 'will i ever get married?'){
  computerResponse('Maybe someday.');
} else if (inputText === 'youre mean'){
  computerResponse('Thats uncalled for. Most say im the nicest ChatBot theyve met!');
} else if (inputText === 'bye'){
  computerResponse('Goodbye! Nice chatting with you!');
} else if (inputText === ''){
  computerResponse('');
} else if (inputText === 'goodbye'){
  computerResponse('Seeya later.');
} else if (inputText === 'i gotta go'){
  computerResponse('Thats quite alright. Come back anytime!');
} else {
  computerResponse('Whaaaaaa?');
}
document.querySelector('.js-player-input').value = '';
};

document.querySelector('.js-player-input').addEventListener('keydown', (event)=>{
  if (event.keyCode === 13){
    generateResponse();
    
  }
});