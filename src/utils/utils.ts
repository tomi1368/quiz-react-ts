export type Question ={ 
    category:string,
    correct_answer:string,
    difficulty:string,
    question:string,
    incorrect_answers:string[],
    type:string
}


export type QuestionState = Question & {answers:string[]}


export type AnswerObject = {
    question:string,
    answer:string,
    correct:boolean,
    correctAnswer:string
}

export const questionRandom = (questions:string[]) : string[] => [...questions].sort(()=> Math.random() - 0.5)