import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  // let data = [
  //     {
  //         name: 'Science',
  //         questions: [
  //             {
  //                 question: 'Triton is the largest Satellite of which planet?',
  //                 options: ['Saturn', 'Jupiter', 'Mercury', 'Venus'],
  //                 answer: '0'
  //             },
  //             {
  //                 question: 'What is the smallest planet in our solar system?',
  //                 options: ['Earth', 'Mars', 'Mercury', 'Venus'],
  //                 answer: '2'

  //             },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: 'Jupiter'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the largest planet in our solar system?',
  //             options: ['Jupiter', 'Saturn', 'Earth', 'Venus'],
  //             answer: '0'
  //         },
  //         {
  //             question: 'What is the hottest planet in our solar system?',
  //             options: ['Venus', 'Earth', 'Mars', 'Mercury'],
  //             answer: '0'
  //         }
  //         ]
  //         },
  //         {
  //         name: 'Mathematics',
  //         questions: [
  //             {
  //                 question: 'What is the value of pi?',
  //                 options: ['3.14', '3.142', '3.1416', '3.14159'],
  //                 answer: '3'
  //             },
  //             {
  //                 question: 'What is the value of e?',
  //                 options: ['2.718', '2.7182', '2.71828', '2.718281'],
  //                 answer: '3'
  //             },
  //             {
  //                 question: 'What is the value of phi?',
  //                 options: ['1.618', '1.6182', '1.61828', '1.618281'],
  //                 answer: '0'
  //             }
  //         ]
  //         },
  //         {
  //             name: 'Geography',
  //             questions:[
  //                 {
  //                 question: 'What is the capital of Nepal?',
  //                 options: ['Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur'],
  //                 answer: '0'
  //                 },
  //                 {
  //                     question: 'Which is the largest continent by area?',
  //                     options: ['Africa', 'Asia', 'Europe', 'North America'],
  //                     answer: '1'
  //                 },
  //                 {
  //                     question: 'Which country has the largest population?',
  //                     options: ['India', 'USA', 'China', 'Russia'],
  //                     answer: '2'
  //                 },
  //                 {
  //                     question: 'Which is the longest river in the world?',
  //                     options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
  //                     answer: '1'
  //                 }
  //             ]
  //         }
  // ]
  const location = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = location.state ? location.state.data : [];
    console.log(data);
    setData(data);
  }, [location]);

  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState(null);
  const [index, setIndex] = useState(0);
  const [next, setNext] = useState(false);
  const [completed, setCompleted] = useState({});
  const [running, setRunning] = useState(false); // Timer running state
  const [categoryTimes, setCategoryTimes] = useState({}); // Store seconds for each category.
const [runningTime, setRunningTime] = useState(0); // Current time for the timer.
const [runningCategory, setRunningCategory] = useState(null); // Track the running category.

const handleSetTime = (catIndex, time) => {
  setCategoryTimes((prevTimes) => ({
    ...prevTimes,
    [catIndex]: time, // Update time for the specific category.
  }));
};

const select = (question, catIndex, quesIndex) => {
    if (categoryTimes[catIndex] <= 0) {
        alert("Please enter a valid time greater than 0.");
        return;
      }
  if (!categoryTimes[catIndex]) {
    alert(`Please set time for the "${data[catIndex].name}" category first.`);
    return;
  }

  setSelected({ question: question, catIndex, quesIndex });
    setCategory(data[catIndex]);

  // Start the timer with the category's time if not already running.
    setRunningTime(categoryTimes[catIndex]);
    setRunningCategory(catIndex);
    setRunning(true);
};
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setRunningTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setRunning(false);
            playSound(); // Play sound when time reaches 0
            const buttons = document.querySelectorAll(".option");
            buttons[selected.question.answer].style.backgroundColor = "green";
            setNext(true);
            markAsCompleted();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  // Play sound function
  const playSound = () => {
    const audio = new Audio("https://www.myinstants.com/media/sounds/se_objsn_trickbjump_ng.mp3");
    audio.play();
  };


  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  const checkAnswer = (e, i) => {
    if (i == selected.question.answer) {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "red";
      const buttons = document.querySelectorAll(".option");
    buttons[selected.question.answer].style.backgroundColor = "green";
    const audio = new Audio("https://www.myinstants.com/media/sounds/se_objsn_trickbjump_ng.mp3");
    audio.play();
    }
    markAsCompleted();  
    setRunning(false);
    setNext(true);
  };


  const markAsCompleted = () => {
    const { catIndex, quesIndex } = selected;
    setCompleted((prev) => ({
      ...prev,
      [catIndex]: { ...(prev[catIndex] || {}), [quesIndex]: true },
    }));
  };

  const back = () => {
    setSelected(null);
    setCategory(null);
    setNext(false);
    setTime(0);
  };

  return (
    <div className="h-screen flex-col flex bg-black text-white">
      <div className="flex w-full justify-center">
        <h1 className="text-[2rem] font-bold py-5 mb-2">
          NOBLE QUIZ COMPETITION
        </h1>
      </div>
      {!selected && (
        <div className="flex flex-col items-center justify-center">
          {data.map((category, catIndex) => (
            <div key={catIndex} className="mb-5">
                <div className="flex justify-center items-center">
              <h2 className="text-[1.5rem] font-bold text-center">
                {category.name}
              </h2>
              <input
              value={categoryTimes[catIndex] || ""}
               onChange={(e) => handleSetTime(catIndex, Number(e.target.value))} 
               type="number" 
               className=" text-center bg-black text-white border-2 w-[5rem] mx-3 pl-2
                border-white rounded-sm" placeholder="Set Sec" />
                </div>


              <div className="flex-auto overflow-x-auto w-[80rem] py-4">
                {category.questions.map((question, quesIndex) => (
                  <button
                    key={quesIndex}
                    className={`text-[1.2rem] text-center w-[3rem] py-2 px-4 rounded-sm border-2 mx-1 my-1 ${
                      completed[catIndex]?.[quesIndex]
                        ? "bg-red-800 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={completed[catIndex]?.[quesIndex]} // Disable button if completed.
                    onClick={() => select(question, catIndex, quesIndex)}
                  >
                    {quesIndex + 1}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {selected && (
        <div className="h-full flex-col flex">
             <div className="text-center">
      <div className=" text-[4rem] font-mono ">{runningTime}</div>
      <div className=" text-[2rem] font-mono ">Seconds</div>
      
    </div>
          <h2 className="text-[1.5rem] font-bold text-center mb-5">
            {category.name}
          </h2>
          <div className="flex justify-center items-center">
            <h1 className="text-[1.5rem] text-center bg-[#1d1756] w-[80rem] py-3 px-5 rounded-full border-2">
              {selected.question.question}
            </h1>
          </div>
          <div className="flex flex-col justify-between items-center my-5">
            <div className="grid grid-cols-2 gap-x-[10rem] gap-y-6 w-[80rem]">
              {selected.question.options.map((option, index) => (
                <button
                  key={index}
                  className="text-[1.4rem] text-left option bg-[#1d1756] w-[35rem] py-2 px-7 rounded-full border-2"
                  onClick={(e) => {
                    checkAnswer(e, index);
                  }}
                >
                  {`${String.fromCharCode(65 + index)}. ${option}`}
                </button>
              ))}
            </div>
          </div>
              {
                next &&
          <div className="flex absolute bottom-10 right-20 justify-center py-5 text-white">
            <button
              className="text-[1.2rem] border-2 text-center py-1 px-2 rounded-md"
              onClick={back}
              >
              Back to Categories
            </button>
          </div>
            }
        </div>
      )}
    </div>
  );
};
export default Home;
