import React from 'react'
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
  // Access the passed state (if any)
  useEffect(() => {
    const data = location.state ? location.state.data : [];
    console.log(data)
    setData(data);
  }, [location]);
  

    const [index, setIndex] = useState(0);
    const [next, setNext] = useState(false);
    const checkAnswer = (e) => {
        if (e.target.textContent.slice(3) === data[index].answer) {
            e.target.style.backgroundColor = 'green'
        } else {
            e.target.style.backgroundColor = 'red'
        }
        setNext(true)
    }
    const nextQuestion = () => {
        setIndex(index + 1)
        document.querySelectorAll('.option').forEach(option => {
            option.style.backgroundColor = '#1d1756'
        })
        setNext(false)
    }
  return (
    <div className='h-screen bg-black text-white'>
      <div className='h-[24rem] flex justify-center items-center'><img className='h-[20rem] w-auto' src="/logo.png" alt="" />
      {
            next && index<data.length-1 && <button className='text-[1.5rem] absolute right-32  text-center py-1 px-2 rounded-md border-2' onClick={nextQuestion}>Next</button>
      }
      </div>
      {}
      {
        data?.length > 0 && 
        (<div>
        <div className='flex justify-center items-center'>
            <h1 className='text-[1.5rem] text-center bg-[#1d1756] w-[80rem] py-3 px-5 rounded-full border-2'>{data[index].question}</h1>
        </div>
        <div className='flex flex-col justify-between items-center my-5'>
            <div className=' flex justify-between w-[80rem]'>
            <button className='text-[1.4rem] text-left option bg-[#1d1756] w-[35rem] py-2 px-7 rounded-full border-2' onClick={checkAnswer}>A. {data[index].options[0]}</button>
            <button className='text-[1.4rem] text-left option bg-[#1d1756] w-[35rem] py-2 px-7 rounded-full border-2' onClick={checkAnswer}>B. {data[index].options[1]}</button>
            </div>
            <div className='flex justify-between w-[80rem] my-4'>

            <button className='text-[1.4rem] text-left option bg-[#1d1756] w-[35rem] py-2 px-7 rounded-full border-2' onClick={checkAnswer}>C. {data[index].options[2]}</button>
            <button className='text-[1.4rem] text-left option bg-[#1d1756] w-[35rem] py-2 px-7 rounded-full border-2' onClick={checkAnswer}>D. {data[index].options[3]}</button>
            </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default Home
