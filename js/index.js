/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'What is the square root of 4',
      o: ['1', '2', '3', '4'],
      a: 1,
    },
    {
      q: 'What is the biggest animal on Earth',
      o: ['Giraffe', 'Elephant', 'Blue Whale', 'Great White Shark'],
      a: 2,
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

// Calculate the score
const calculateScore = () => {
  let score = 0;
  quizArray.map((quizItem, index) => {
    for (let i = 0; i < 4; i++) {
      //highlight the li if it is the correct answer
      let li = `li_${index}_${i}`;
      let r = `radio_${index}_${i}`;
      liElement = document.querySelector('#' + li);
      radioElement = document.querySelector('#' + r);
      
      if (quizItem.a == i) {
        //change background color of li element here
        liElement.style.background = "green";
      }

      if (radioElement.checked) {
        // code for task 1 goes here
        if( quizItem.a == i ) {
          score += 1;
      }
    }
  }
    document.querySelector('#score').innerHTML = `You answered ${score} questions correctly! `; 
  });
};

// call the displayQuiz function
  displayQuiz();

// Submit button & score calculation
btnSubmit.addEventListener('click', calculateScore);

//Reset button
 btnReset.addEventListener('click', resetWindow);
 function resetWindow() {
   window.location.href = "./index.html";
 };

 //Countdown timer
document.getElementById('time').innerHTML = 01 + ":" + 02;
function timer() {
  let currentTime = document.getElementById('time').innerHTML;
  let countDown = currentTime.split(/[:]+/);
  let min = countDown[0];
  let sec = secondsCount((countDown[1] - 1));
  if(sec == 59){
    min = min - 1
  }
  if(min<0){
    btnSubmit.click();
    return
  }
  document.getElementById('time').innerHTML = min + ":" + sec;
  setTimeout(timer, 1000);
}
function secondsCount(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec
  };
  if (sec < 0) {
    sec = "59"
  };
  return sec;
}

//Call the timer function
timer();
});

