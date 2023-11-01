
//COMPLETE JS CODE IS WRITTEN  BY ME WITHOUT ANY HELP FROM ANY TUTORIAL , SO EXPECT SOME BAD CODE PRACTICES



let QuizMockData=[

    {
        Question:'Which of the following keywords is used to define a variable in Javascript?',
        Options:{

            a:'var' ,
            b:' let',
            c:' Both A and B',
            d:' None of the above'
        },
        answer:'c'
    },
  
    {
        Question:'Upon encountering empty statements, what does the Javascript Interpreter do?',
        Options:{

            a:'  Throws an error' ,
            b:'Ignores the statements',
            c:'Gives a warning',
            d:'None of the above',
        },
        answer:'b'
    },
    {
        Question:'Which of the following methods can be used to display data in some form using Javascript?',
        Options:{

            a:'document.write()',
            b:' console.log()',
            c:'window.alert()',
            d:'All of the above'
        },
        answer:'d'
    },
    {
        Question:'How can a datatype be declared to be a constant type?',        
        Options:{

            a:' const' ,
            b:'var',
            c:'let',
            d:'constant'
        },
        answer:'a'
    },
    {
        Question:'Which of the following are closures in Javascript?',
        Options:{

            a:' Variables' ,
            b:'Functions',
            c:'Objects',
            d:' All of the above'
        },
        answer:'d'
    }
    
    
];

let start=document.querySelector('.start-quiz-btn');
let quizContent=document.querySelector('.quiz-content');

start.addEventListener('click',()=>{

    start.style.display='none';
    quizContent.style.display='block';
    setQuizContent();


})

let counter=0;
let correctQuestion=0;
let app=document.querySelector('.app');

function setQuizContent(){

    let question=document.createElement('h2');

    question.classList.add('question');
    
    quizContent.appendChild(question);
    question.innerText=`Q${counter+1}.`+ QuizMockData[counter].Question;
    let op1=document.createElement('button');
    op1.innerText=QuizMockData[counter].Options.a;
    op1.setAttribute('option','a');
    op1.setAttribute('question',counter);
    let op2=document.createElement('button');
    op2.innerText=QuizMockData[counter].Options.b;
    op2.setAttribute('option','b');
    op2.setAttribute('question',counter);
    let op3=document.createElement('button');
    op3.innerText=QuizMockData[counter].Options.c;
    op3.setAttribute('option','c');
    op3.setAttribute('question',counter);
    let op4=document.createElement('button');
    op4.innerText=QuizMockData[counter].Options.d;
    op4.setAttribute('option','d');
    op4.setAttribute('question',counter);
    op1.classList.add('ques-option');
    op2.classList.add('ques-option');
    op3.classList.add('ques-option');
    op4.classList.add('ques-option');
    quizContent.appendChild(op1);
    quizContent.appendChild(op2);
    quizContent.appendChild(op3);
    quizContent.appendChild(op4);
    let nxtButton=document.createElement('button');
    nxtButton.innerText='Next';
    nxtButton.classList.add('next-btn');
    app.appendChild(nxtButton);
   

    quizContent.addEventListener('click',clickOption);
    nxtButton.addEventListener('click',()=>{

        app.lastElementChild.remove();
        getNewQuestion();
    })

}

const clickOption= (e) =>{


    const questionNumber=Number(e.target.attributes.question.value);
    if(QuizMockData[questionNumber].answer===e.target.attributes.option.value){

        correctQuestion++;


    }
    e.target.classList.add('ques-option-clicked');
    quizContent.removeEventListener('click',clickOption);
    
    
}

function getNewQuestion(){

    counter++;
    quizContent.innerText='';
    quizContent.addEventListener('click',clickOption);
    if(counter<QuizMockData.length){

        setQuizContent();

    }
    else{

        app.innerText='';
        let score=document.createElement('h2');
        score.innerText=`Your Score is ${correctQuestion}/${QuizMockData.length}`;
        score.classList.add('final-score');
        app.appendChild(score);
       
    }

}






