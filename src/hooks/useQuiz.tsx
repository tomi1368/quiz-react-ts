import { useState } from "react"
import axios from "axios"
import { Question, questionRandom, QuestionState, AnswerObject } from "../utils/utils"


const useQuiz = () => {
  const [quiz,setQuiz] = useState<QuestionState[] | []>([])
  const [loading,setLoading] = useState<boolean>(false)
  const [score,setScore] = useState<number>(0)
  const [number,setNumber] = useState<number>(0)
  const [userAnserws,setUserAnswers] = useState<AnswerObject[]>([])
  const [gameOver,setGameOver] = useState<boolean>(true)
  const [pickAnswer,setPickAnswer] = useState<boolean>(false)


  console.log(gameOver,number)


  const checkAnswer = (e:any)=>{
    const answer = e.target.value
    const correct = answer === quiz[number].correct_answer
    setPickAnswer(true)
    if(correct) setScore(state=>state + 1)
    const answerObject = {
        question: quiz[number].question,
        answer,
        correct,
        correctAnswer:quiz[number].correct_answer
    }
    setUserAnswers(state=>[...state,answerObject])
  }

  const nextQuestion = ()=>{
    setPickAnswer(false)
    number + 1 === 5 ? setGameOver(true) : setNumber(state => state + 1)

  }

   const quizRequest = async ()=>{
       try{
         setUserAnswers([])
         setLoading(true)
           setGameOver(false)
           let quizResponse = await axios.get("https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple")
           let orgAnswers = quizResponse.data.results.map((question:Question)=>{
               return{
                ...question,
                answers: questionRandom([...question.incorrect_answers,question.correct_answer])
               }
           })
           console.log(orgAnswers)
           setQuiz(orgAnswers)
           setPickAnswer(false)
           setScore(0)
           setNumber(0)
           setLoading(false)
       }catch(err){
           console.log(err)
       }   
   }



  return {
      quiz,
      checkAnswer,
      pickAnswer,
      nextQuestion,
      quizRequest,
      loading,
      score,
      number,
      userAnserws,
      gameOver
  }
}

export default useQuiz