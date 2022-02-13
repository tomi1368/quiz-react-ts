import {AnswerObject} from "../../utils/utils"
import "./QuestionCard.scss"
interface Question{
    question: string,
    answers:string[],
    callback:any,
    userAnswer:AnswerObject | undefined,
    questionNum:number,
    totalQuestions:number,
    pick:boolean
}

const QuestionCard:React.FC<Question> = ({pick,question,answers,callback,userAnswer,questionNum,totalQuestions}) => {
  return (
    <div className="ans">
        <p>Question : {questionNum} / {totalQuestions}</p>
        <h3>{question}</h3>
        <div className="answer">
            {answers.map((el,i)=>{
                return(
                    <div>
                        <button className="answer-btn" style={{outline: userAnswer?.answer === el ? "3px solid #fff" : "none" ,background: pick ? (userAnswer?.correctAnswer === el ? "linear-gradient(to right, #56ab2f, #a8e063)" : "linear-gradient(to right, #ed213a, #93291e)") : "linear-gradient(to right, #606c88, #3f4c6b)"  }}  disabled={userAnswer ? true : false} value={el} onClick={callback} >{el}</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default QuestionCard