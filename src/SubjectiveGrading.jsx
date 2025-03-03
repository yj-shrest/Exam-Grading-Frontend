import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
const SubjectiveGrading = () => {
    const location = useLocation();
    const {databaseId} = location.state;
    console.log(databaseId);
    const [questionfile, setQuestionfile] = useState(null);
    const [answerfile, setAnswerfile] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [result, setResult] = useState(null); 
    const handleQuestionImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "application/pdf") {
            setQuestionfile(file);
        } else {
            alert("Please upload a PDF file.");
        }
    }
    const handleAnswerImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "application/pdf") {
            setAnswerfile(file);
        } else {
            alert("Please upload an image file.");
        }
    }

    const handleSubmit = async () => {
        setSubmitting(true);
        const formData = new FormData();
        formData.append("question", questionfile);
        formData.append("answer", answerfile);
        formData.append("database_name", databaseId);
        try {
            const response = await fetch(`http://localhost:5000/subjective`, {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            console.log(data);
            setResult(data.grade);
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }
  return (
    <div>
       {/* Question Image Upload */}
       <div className="max-w-4xl mx-auto p-6 mt-4">
        <div className='bg-white rounded-lg shadow-lg p-6'>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Subjective Question Grading</h2>
              <label className="block text-sm font-medium text-gray-700 mb-2 mt-2">
                Upload Question File
              </label>
              <div className="mt-1 flex flex-col space-y-4">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleQuestionImageChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
                </div>
              <label className="block text-sm font-medium text-gray-700 mb-2 mt-2">
                Upload Answer Image
              </label>
              <div className="mt-1 flex flex-col space-y-4">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleAnswerImageChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
                </div>
                <button
                onClick={handleSubmit}                
                disabled={submitting}
                className={`w-full flex justify-center py-2 px-4 border mt-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                  ${submitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {submitting ? 'Grading...' : 'Grade Subjective Answer'}
              </button>
              {result &&(<div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-medium text-green-900">Results</h3>
            {<div className="mt-2">
              <p className="text-xl font-bold text-green-700">
                {result}
              </p>
            </div>}
          </div>)}
            </div>
    </div>
    </div>

  )
}

export default SubjectiveGrading
