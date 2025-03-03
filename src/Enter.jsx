import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Enter = () => {
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(1);
    const [category, setCategory] = useState(1);
    const navigate = useNavigate();
    const click = (e) => {
        const inputElement = e.target.nextElementSibling;
        const currentColor = inputElement.style.backgroundColor;

        // Toggle between green and black
        inputElement.style.backgroundColor = currentColor === 'green' ? 'black' : 'green';
    }
    const extract = () => {
        const questions = document.querySelectorAll('input[type="text"]');
        const questionData = [];
        for (let i = 0; i < questions.length; i += 5) {
            const question = questions[i].value;
            const options = [];
            let answer;
            for (let j = i + 1; j < i + 5; j++) {
                options.push(questions[j].value);
                if(questions[j].style.backgroundColor === 'green') {
                    console.log("green")
                   answer=questions[j].value;
                }
            }
            questionData.push({ question, options, answer });
        }
        console.log(questionData);
        setData(questionData);
        navigate('/KBC/home',{ state: { data:questionData } });
    }
  return (
    <div className='bg-black text-white min-h-screen'>
      <div className='h-[16rem] flex justify-center items-center'><img className='h-[12rem] w-auto' src="/logo.png" alt="" />
        <button className='text-[1.2rem] bg-[#3f22a6] absolute right-20 text-center py-1 px-2 rounded-md' onClick={extract}>Start Quiz</button>
      
      </div>
      <h1 className='text-center text-[1.7rem] font-bold'>Add questions Here:</h1>
      <div className='flex-col justify-center items-center py-1'>
      <div className="flex justify-center w-full">
      <input className="bg-black border border-gray-500 rounded-md text-xl py-1 w-[30rem] px-3" type="text" placeholder='Category Name' />
      </div>
      {Array.from({ length: number }).map((_, i) => (
        <div key={i} className="flex justify-center text-[1rem] items-center">
          <div className="text-center flex-col justify-center flex items-center">
            <h1>{i + 1}.</h1>
          </div>
          <div className="flex flex-col px-4 py-1 mt-5">
            <input
              type="text"
              className="bg-black border border-gray-500 rounded-md text-xl py-1 w-[80rem] px-3" placeholder='Enter Question'
            />
            <div className="flex justify-between mt-4">
              <div className='flex items-center'>
                <h1 className="pr-1" onClick={click}>A.</h1>
                <input
                  type="text"
                  className="bg-black border border-gray-500 rounded-md w-[15rem] text-[1.2rem] px-3 py-1"
                />
              </div>
              <div className='flex items-center'>
                <h1 className="pr-1"onClick={click}>B.</h1>
                <input
                  type="text"
                  className="bg-black border border-gray-500 rounded-md w-[15rem] text-[1.2rem] px-3 py-1"
                />
              </div>
              <div className='flex items-center'>
                <h1 className="pr-1"onClick={click}>C.</h1>
                <input
                  type="text"
                  className="bg-black border border-gray-500 rounded-md w-[15rem] text-[1.2rem] px-3 py-1"
                />
              </div>
              <div className='flex items-center'>
                <h1 className="pr-1"onClick={click}>D.</h1>
                <input
                  type="text"
                  className="bg-black border border-gray-500 rounded-md w-[15rem] text-[1.2rem] px-3 py-1"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='flex justify-center pt-4'>
        <button className='text-[1.2rem] bg-[#3f22a6] text-center py-1 px-2 rounded-md' onClick={()=>{
            setNumber(number+1)
        }}>Add Next</button>
      </div>
      </div>
    </div>
  )
}
export default Enter
