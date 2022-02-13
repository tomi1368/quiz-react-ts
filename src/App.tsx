import "./App.scss"
import QuestionCard from "./components/QuestionCard/QuestionCard"
import useQuiz from "./hooks/useQuiz"

const App = () => {

  const {quiz,pickAnswer,quizRequest,score,number,userAnserws,checkAnswer,loading,gameOver,nextQuestion} = useQuiz()
  return (
    <div className="bg">
      <div className="title">
      <h1>REACT TS QUIZ</h1>
      {(gameOver)
        &&
        <button className="title-btn" onClick={()=>quizRequest()}>Start</button>
      
      }
      {!gameOver && <h3>Score: {score}</h3>}
      {loading && <p>Loading...</p>}
      </div>
      {
        !loading && !gameOver && (
      <QuestionCard 
      questionNum={number + 1} 
      totalQuestions={quiz.length} 
      question={quiz[number].question} 
      answers={quiz[number].answers}
      userAnswer={userAnserws ? userAnserws[number] : undefined}
      callback={checkAnswer}
      pick={pickAnswer}
      />
      )
    }
    {(!gameOver && !loading && userAnserws.length === number + 1 && number !== 5 - 1) &&
      <div className="next">  
        <button className="next-btn" onClick={nextQuestion}>Next Question</button>
      </div>
    }
    { userAnserws.length === 5 &&
    <div className="next">   
      <button className="next-btn" onClick={()=>quizRequest()} >Restart</button>
    </div>
    }
    </div>
  )
}

export default App
