import React from "react";
import './index.scss';

const questions = [
  {
    title: 'Що люблять принцеси?',
    variants: ['квіти', 'подорожі', 'смачну їжу'],
    correct: 0,
  },
  {
    title: 'У кого з принцес довге волосся? ',
    variants: ['Тіана', 'Рапунцель', 'Попелюшка'],
    correct: 1,
  },
  {
    title: 'Хто з принцес був прибиральницею?',
    variants: ['Тіана', 'Рапунцель', 'Попелюшка'],
    correct: 2,
  },
];
function Game({ step, question, onClickVariant }) {
  console.log(step, question)
  const percentage = Math.round((step / questions.length) * 100);
  console.log(percentage);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
        ))

        }
      </ul>
    </>
  );
}
function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="Result" />
      <h2>Ти відповіла правильно на  {correct} питання з {questions.length} Ти чудова принцеса! </h2>
      <a href="/">
        <button>Спробувати знову</button>
      </a>

    </div>
  );
}


function App() {
  const [step, setStep] = React.useState(0);
  const question = questions[step];
  const [correct, setCorrect] = React.useState(0);
  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="App">
      {
        step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant} />) :
          (<Result correct={correct} />)
      }



    </div>
  );
}

export default App;
