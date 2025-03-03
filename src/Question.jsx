import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Question = () => {
    let temp = [
        {
            name: 'Maths',
            questions: [
                {
                    question: 'Which number is known as neither prime nor composite?',
                    options: ['1', '2', '0', '4'],
                    answer: 2
                },
                {
                    question: 'Which number is known as the greatest number of 1 digit?',
                    options: ['6', '9', '10', '12'],
                    answer: 1
                },
                {
                    question: 'Which number is known as the smallest number of 3 digits?',
                    options: ['0', '1', '100', '101'],
                    answer: 2
                },
                {
                    question: 'What is the product of 9 and 3?',
                    options: ['3', '9', '27', '12'],
                    answer: 2
                },
                {
                    question: 'Which angle measures less than 90°?',
                    options: ['Obtuse', 'Reflex', 'Acute', 'Straight'],
                    answer: 2
                },
                {
                    question: 'What is the formula to find the perimeter of a rectangle?',
                    options: ['2(l + b)', '4(l + b)', 'l + b', 'l x b'],
                    answer: 0
                },
                {
                    question: 'What is the formula to find the perimeter of a square?',
                    options: ['4l', '2l', 'l²', 'l x b'],
                    answer: 0
                },
                {
                    question: 'How many angles are there in a triangle?',
                    options: ['10', '4', '6', '3'],
                    answer: 3
                },
                {
                    question: 'What is the sum of -18 and -8?',
                    options: ['26', '-26', '24', '10'],
                    answer: 1
                },
                {
                    question: 'What is the product of -2 and -4?',
                    options: ['-8', '8', '6', '2'],
                    answer: 1
                },
                {
                    question: 'How many weeks are there in a year?',
                    options: ['62', '52', '42', '72'],
                    answer: 1
                },
                {
                    question: 'What is the value of 18 + 25?',
                    options: ['45', '38', '43', '39'],
                    answer: 2
                },
                {
                    question: 'A man puts even number of candies in a jar. How many candies did he put in a jar?',
                    options: ['231', '311', '500', '517'],
                    answer: 2
                },
                {
                    question: 'How many sides does a hexagon have?',
                    options: ['6', '5', '4', '7'],
                    answer: 0
                },
                {
                    question: 'Which figure has 5 corners?',
                    options: ['Triangle', 'Hexagon', 'Square', 'Pentagon'],
                    answer: 3
                },
                {
                    question: 'What is the double of 50?',
                    options: ['100', '80', '60', '120'],
                    answer: 0
                },
                {
                    question: 'What is the place value of 0 in the number 2013?',
                    options: ['Ones', 'Tens', 'Hundreds', 'Thousands'],
                    answer: 2
                },
                {
                    question: 'The cost of a pencil is Rs. 12. What is the cost of 10 pencils?',
                    options: ['Rs. 122', 'Rs. 112', 'Rs. 120', 'None of the above'],
                    answer: 2
                },
                {
                    question: 'The note having the picture of rhinoceros is?',
                    options: ['Rs. 5', 'Rs. 500', 'Rs. 1000', 'Rs. 100'],
                    answer: 3
                },
                {
                    question: 'If you round off 63 to the nearest 10, what will be the answer?',
                    options: ['70', '60', '62', '64'],
                    answer: 1
                },
                {
                    question: 'How many grams does 1 kilogram have?',
                    options: ['500 grams', '250 grams', '750 grams', '1000 grams'],
                    answer: 3
                },
                {
                    question: 'How many minutes does an hour have?',
                    options: ['60', '3600', '59', '24'],
                    answer: 0
                }

            ]
        },
        {
            name: 'English And Grammar',
            questions: [
                {
                    question: 'When was Helen Keller born?',
                    options: ['June 27, 1880', 'September 13, 1990', 'May 05, 2025', 'December 20, 2009'],
                    answer: 0
                },
                {
                    question: 'What is the synonym of "cannot see"?',
                    options: ['Deaf', 'Blind', 'Dumb', 'Autism'],
                    answer: 1
                },
                {
                    question: 'What is the exact height of Mt. Everest?',
                    options: ['8848 m', '8238 m', '8848.86 m', '8555 m'],
                    answer: 2
                },
                {
                    question: 'Which is the world\'s smallest bird?',
                    options: ['Humming Bird', 'Sparrow', 'Eagle', 'Love birds'],
                    answer: 0
                },
                {
                    question: 'What is the antonym of the word "ugly"?',
                    options: ['Dislike', 'Open', 'Worst', 'Beautiful'],
                    answer: 3
                },
                {
                    question: 'The word "Sports" refers to the:',
                    options: ['Painting', 'Games', 'Dance', 'Singing'],
                    answer: 1
                },
                {
                    question: 'Salvador Dali was a famous:',
                    options: ['Artist', 'Painter', 'Mountaineer', 'Dancer'],
                    answer: 1
                },
                {
                    question: 'The plural form of "Child" is:',
                    options: ['Childs', 'Childes', 'Children', 'All of the above'],
                    answer: 2
                },
                {
                    question: 'The plural form of "Deer" is:',
                    options: ['Deer', 'Deers', 'Core', 'All of the above'],
                    answer: 0
                },
                {
                    question: 'The female form of "actor" is:',
                    options: ['Actress', 'Waitress', 'Widow', 'Madam'],
                    answer: 0
                },
                {
                    question: 'What is the sound of "bee" called?',
                    options: ['Meow', 'Moo', 'Bark', 'Buzz'],
                    answer: 3
                },
                    {
                        question: 'What is the sound of "Duck" called?',
                        options: ['Bell', 'Quack', 'Cuckoo', 'Scream'],
                        answer: 1
                    },
                    {
                        question: 'What is the female of "buck" called?',
                        options: ['Doe', 'Mare', 'Bitch', 'She-goat'],
                        answer: 0
                    },
                    {
                        question: 'What is the past participle of the word "write"?',
                        options: ['Written', 'Write', 'Wrote', 'Writes'],
                        answer: 0
                    },
                    {
                        question: 'What is the past tense of the word "drive"?',
                        options: ['drived', 'drove', 'draves', 'droved'],
                        answer: 1
                    },
                    {
                        question: 'Choose the correct spelling.',
                        options: ['Engeneer', 'Enginear', 'Engineer', 'Engaineer'],
                        answer: 2
                    },
                    {
                        question: 'Choose the correct spelling.',
                        options: ['Wonderful', 'Onderful', 'Wunderful', 'Wounderful'],
                        answer: 0
                    },
                    {
                        question: 'The word "wealthy" refers to:',
                        options: ['Poor', 'Educated', 'Uneducated', 'Rich'],
                        answer: 3
                    },
                    {
                        question: "It's made of plastic. It's long and thin. You can write with it.",
                        options: ['Pencil', 'Pen', 'Remote', 'Pipe'],
                        answer: 1
                    },
                    {
                        question: 'The word "Affirmative" means:',
                        options: ['Question', 'Positive', 'Negative', 'Short form'],
                        answer: 1
                    },
                    {
                        question: 'The word "Interrogative" means:',
                        options: ['Short form', 'Passive', 'Questions', 'None of the above'],
                        answer: 2
                    },
                    {
                        question: 'In English, "Upper case" refers to:',
                        options: ['Small letters', 'Capital letters', 'Exclamation mark', 'Question mark'],
                        answer: 1
                    }
            ]
        },
        {
            name: 'Computer And Health',
            questions: [
                {
                    question: 'Which device does not belong to input device?',
                    options: ['Scanner', 'Keyboard', 'Plotter', 'Microphone'],
                    answer: 2
                },
                {
                    question: 'Which is not the component of CPU?',
                    options: ['Register', 'GB', 'CU', 'ALU'],
                    answer: 1
                },
                {
                    question: 'Which is a processing device?',
                    options: ['Mouse', 'Printer', 'CPU', 'Keyboard'],
                    answer: 2
                },
                {
                    question: 'How many keys are there in a standard keyboard?',
                    options: ['98', '101', '104', '210'],
                    answer: 1
                },
                {
                    question: 'Which device is a primary memory device?',
                    options: ['CPU', 'Keyboard', 'RAM', 'Monitor'],
                    answer: 2
                },
                {
                    question: 'Which memory is volatile?',
                    options: ['RAM', 'CD', 'DVD', 'Hard disk'],
                    answer: 0
                },
                {
                    question: 'Which one is the latest technology monitor?',
                    options: ['LCD', 'CRT', 'LED', 'Plasma'],
                    answer: 3
                },
                {
                    question: 'Which printer uses toner to print?',
                    options: ['Dot Matrix', 'Ink Jet', 'Laser', 'Thermal'],
                    answer: 2
                },
                {
                    question: 'Which one is the standard internet protocol?',
                    options: ['TCP', 'HTTP', 'WWW', 'FTP'],
                    answer: 1
                },
                {
                    question: 'Which one is the single page of PowerPoint?',
                    options: ['Slide', 'Theme', 'Animation', 'Word Art'],
                    answer: 0
                },
                {
                    question: 'What is the movement of text and pictures within the slide called?',
                    options: ['MS Word', 'Animation', 'Theme', 'Font'],
                    answer: 1
                },
                {
                    question: 'Which nutrient is the main source of energy?',
                    options: ['Minerals', 'Proteins', 'Vitamins', 'Carbohydrates'],
                    answer: 3
                },
                {
                    question: 'What is the recommended daily intake of water for adults?',
                    options: ['1 liter', '2 liters', '3 liters', '4 liters'],
                    answer: 1
                },
                {
                    question: 'What is the time period of menstruation?',
                    options: ['5 - 6 days', '7 - 8 days', '4 - 5 days', '10 - 11 days'],
                    answer: 2
                },
                {
                    question: 'What is another name for cavities?',
                    options: ['Tooth decay', 'Tooth brush', 'Tooth loss', 'All of the above'],
                    answer: 0
                },
                {
                    question: 'Which of the following germs is present in impure water?',
                    options: ['Silk worm', 'Bacteria', 'Fire fish', 'Salt'],
                    answer: 1
                },
                {
                    question: 'What should be the temperature of water to disinfect contaminated water?',
                    options: ['80°C', '100°C', '95°C', '105°C'],
                    answer: 1
                },
                {
                    question: 'Which food item may cause constipation?',
                    options: ['Radish', 'Noodle', 'Milk', 'Eggs'],
                    answer: 1
                },
                {
                    question: 'Which nutrient heals the cut and wound of the body?',
                    options: ['Carbohydrates', 'Protein', 'Fat', 'Minerals'],
                    answer: 1
                },
                {
                    question: 'How much water does the human body contain?',
                    options: ['70%', '71%', '80%', '75%'],
                    answer: 0
                },
                {
                    question: 'In which disease does the human body turn black?',
                    options: ['Kala-azar', 'Pneumonia', 'Malaria', 'All of the above'],
                    answer: 0
                },
                {
                    question: 'How many players are there in a team of dodgeball?',
                    options: ['11 players', '10 players', '6 players', '8 players'],
                    answer: 2
                }
            ]
        },
        {
            name: 'Science',
            questions: [
                {
                    question: 'Which of the following is an output device?',
                    options: ['Mouse', 'Joystick', 'Printer', 'Keyboard'],
                    answer: 2
                },
                {
                    question: 'Which is the physical form of a computer called?',
                    options: ['Software', 'Hardware', 'Input device', 'Output device'],
                    answer: 1
                },
                {
                    question: 'What kind of device is a pen drive?',
                    options: ['Storage', 'Processing', 'Software', 'Output'],
                    answer: 0
                },
                {
                    question: 'Which of the following is the main source of heat?',
                    options: ['Heater', 'Fire', 'Sun', 'Gas'],
                    answer: 2
                },
                {
                    question: 'What is the use of light energy for plants?',
                    options: ['Vision', 'Photosynthesis', 'Respiration', 'Excretion'],
                    answer: 1
                },
                {
                    question: 'Which one is the renewable source of energy?',
                    options: ['Coal', 'Biogas', 'Petrol', 'Diesel'],
                    answer: 1
                },
                {
                    question: 'Which one is an example of invertebrates?',
                    options: ['Amoeba', 'Cat', 'Frog', 'All of the above'],
                    answer: 0
                },
                {
                    question: 'Which one is a viviparous animal?',
                    options: ['Rabbit', 'Crow', 'Crocodile', 'Snake'],
                    answer: 0
                },
                {
                    question: 'Which one is the male part of a flower?',
                    options: ['Gynoecium', 'Androecium', 'Calyx', 'Corolla'],
                    answer: 1
                },
                {
                    question: 'What is the colour of the calyx of a flower?',
                    options: ['Green', 'Red', 'Blue', 'White'],
                    answer: 0
                },
                {
                    question: 'Which plant has two cotyledons in its seeds?',
                    options: ['Wheat', 'Soyabeans', 'Maize', 'Paddy'],
                    answer: 1
                },
                {
                    question: 'Which of the following plants has a hollow stem?',
                    options: ['Bamboo', 'Rose', 'Sal', 'Mustard'],
                    answer: 0
                },
                {
                    question: 'Which of the following is a non-flowering plant?',
                    options: ['Mushroom', 'Mango', 'Orange', 'Rose'],
                    answer: 0
                },
                {
                    question: 'Which is the largest planet in the solar system?',
                    options: ['Earth', 'Saturn', 'Neptune', 'Jupiter'],
                    answer: 3
                },
                {
                    question: 'Which heavenly body revolves around a planet?',
                    options: ['Satellite', 'Baby planet', 'Asteroid', 'Meteor'],
                    answer: 0
                },
                {
                    question: 'Which one is the only satellite of Earth?',
                    options: ['Sun', 'Planet', 'Moon', 'Star'],
                    answer: 2
                },
                {
                    question: 'How many satellites are there on planet Jupiter?',
                    options: ['0', '92', '14', '83'],
                    answer: 1
                },
                {
                    question: 'What is the spinning movement of Earth on its own axis called?',
                    options: ['Revolution', 'Rotation', 'Hemisphere', 'Orbital plane'],
                    answer: 1
                },
                {
                    question: 'The animals which contain only one cell are called?',
                    options: ['Multicellular', 'Unicellular', 'Vertebrates', 'Invertebrates'],
                    answer: 1
                },
                {
                    question: 'The process of emerging out of a baby from an egg is called?',
                    options: ['Warming', 'Breaking', 'Hatching', 'Producing'],
                    answer: 2
                },
                {
                    question: 'Which stage of a butterfly is covered by a cocoon?',
                    options: ['Adult', 'Larva', 'Pupa', 'Egg'],
                    answer: 2
                },
                {
                    question: 'Which of the following is a desert plant?',
                    options: ['Cactus', 'Water Lily', 'Orange', 'Pear'],
                    answer: 0
                }]}
            
    ];
    
    const navigate = useNavigate();
    const [categories, setCategories] = useState([{ name: '', questions: [] }]);

    const addCategory = () => {
        setCategories([...categories, { name: '', questions: [] }]);
    };

    const addQuestion = (categoryIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].questions.push({ question: '', options: ['', '', '', ''], answer: null });
        setCategories(newCategories);
    };

    const handleCategoryChange = (e, categoryIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].name = e.target.value;
        setCategories(newCategories);
    };

    const handleQuestionChange = (e, categoryIndex, questionIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].questions[questionIndex].question = e.target.value;
        setCategories(newCategories);
    };

    const handleOptionChange = (e, categoryIndex, questionIndex, optionIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].questions[questionIndex].options[optionIndex] = e.target.value;
        setCategories(newCategories);
    };

    const handleCorrectAnswerSelect = (categoryIndex, questionIndex, optionIndex) => {
        const newCategories = [...categories];
        newCategories[categoryIndex].questions[questionIndex].answer = optionIndex;
        setCategories(newCategories);
    };

    const start = () => {
        navigate('/KBC/home', { state: { data: categories } });
    }
    const load =()=>
    {
        setCategories(temp);
    }
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className='flex w-full justify-center items-center'>
                <h1 className='text-[2rem] font-bold  text-gray-800 py-5 mb-4'>NOBLE QUIZ COMPETITION</h1>
                <button className='text-[1.2rem] absolute right-20 border-black border-2 text-center py-1 px-2 rounded-md' onClick={load} >Load Template</button>
            </div>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                {categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-6 border border-gray-300 p-4 rounded-lg">
                        <input
                            type="text"
                            placeholder="Category Name"
                            value={category.name}
                            onChange={(e) => handleCategoryChange(e, categoryIndex)}
                            className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                        />
                        {category.questions.map((question, questionIndex) => (
                            <div key={questionIndex} className="mb-6 border border-gray-200 p-4 rounded-lg">
                                <input
                                    type="text"
                                    placeholder="Question"
                                    value={question.question}
                                    onChange={(e) => handleQuestionChange(e, categoryIndex, questionIndex)}
                                    className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                                />
                                <div className="space-y-3">
                                    {question.options.map((option, optionIndex) => (
                                        <div key={optionIndex} className="flex items-center">
                                            <input
                                                type="radio"
                                                name={`correctAnswer-${categoryIndex}-${questionIndex}`}
                                                checked={question.answer === optionIndex}
                                                onChange={() => handleCorrectAnswerSelect(categoryIndex, questionIndex, optionIndex)}
                                                className="mr-2"
                                            />
                                            <input
                                                type="text"
                                                placeholder={`Option ${optionIndex + 1}`}
                                                value={option}
                                                onChange={(e) => handleOptionChange(e, categoryIndex, questionIndex, optionIndex)}
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={() => addQuestion(categoryIndex)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Add Question
                        </button>
                    </div>
                ))}
                <button
                    onClick={addCategory}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Add Category
                </button>
            </div>
            <div className="flex justify-center py-5 text-white">
            <button className='text-[1.2rem] bg-[#3f22a6]  text-center py-1 px-2 rounded-md' onClick={start} >Start Quiz</button>
            </div>
        </div>
    );
};

export default Question;
