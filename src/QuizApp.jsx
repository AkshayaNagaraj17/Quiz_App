import { useRef, useState } from "react"
import { data } from "./assets/data"
function QuizApp()
{
    const [index,setIndex]=useState(0)
    const [question,setQuestion]=useState(data[index])
    const [lock,setLock]=useState(false)
    const Option1=useRef(null)
    const Option2=useRef(null)
    const Option3=useRef(null)
    const Option4=useRef(null)
    const op_array=[Option1,Option2,Option3,Option4]
    function next()
    {
        setQuestion(data[index+1])
        setIndex(index+1)
    }
    function check(e,ans)
    {
       if(lock===false)
        {
        if (question.ans===ans)
            {
                e.target.classList.add("bg-green-500","text-white")
                setLock(true)
            }
            else{
                e.target.classList.add("bg-red-500","text-white")
                setLock(true)
                op_array[question.ans-1].current.classList.add("bg-green-500","text-white")
            }
       }
    }

    return(
        <>
       
        <div className=" bg- rounded-md bg-neutral-200 flex flex-col items-center justify-center m-20 p-5">
            <h1 className="font-bold m-10 text-purple-950 text-2xl">Quiz App</h1>
            <hr />
            <h1>{index+1}.{question.question}</h1>
            <ul>
                <li ref={Option1} onClick={(e)=>check(e,1)}className="pr-20 pl-20 mt-5 border border-black rounded-md p-2">{question.option1}</li>
                <li  ref={Option2}  onClick={(e)=>check(e,2)}className="pr-20 pl-20 mt-5 border border-black rounded-md p-2">{question.option2}</li>
                <li  ref={Option3}  onClick={(e)=>check(e,3)} className="pr-20 pl-20 mt-5 border border-black rounded-md p-2">{question.option3}</li>
                <li  ref={Option4}  onClick={(e)=>check(e,4)} className="pr-20 pl-20 mt-5 border border-black rounded-md p-2">{question.option4}</li>
            </ul>


            <button onClick={next}className="border rounded-lg bg-purple-950 pl-5 pr-5 text-white pt-1 pb-1 m-3">Next</button>
            <p>{index+1} out of {data.length}</p>
        </div>

      
        </>
    )
}
export default QuizApp