import React, { useState } from 'react';

const MCQGrading = () => {
  const [questionImage, setQuestionImage] = useState(null);
  const [answerImage, setAnswerImage] = useState(null);
  const [answerKey, setAnswerKey] = useState('');
  const [questionPreview, setQuestionPreview] = useState(null);
  const [answerPreview, setAnswerPreview] = useState(null);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleQuestionImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setQuestionImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setQuestionPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnswerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAnswerImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAnswerPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnswerKeyChange = (e) => {
    // Remove any whitespace and convert to uppercase
    const cleanedInput = e.target.value.replace(/\s/g, '').toUpperCase();
    setAnswerKey(cleanedInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!questionImage || !answerImage || !answerKey.trim()) {
      setError("Please upload both images and provide the answer key");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('questionImage', questionImage);
      formData.append('answerImage', answerImage);
      formData.append('answerKey', answerKey);
      console.log(questionImage, answerImage, answerKey);
      const response = await fetch('http://127.0.0.1:5000/mcq', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to grade MCQ');
      }

      const data = await response.json();
      setScore(data.score);
    } catch (err) {
      setError('Error grading MCQ. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">MCQ Grading</h2>
        
        <form onSubmit={handleSubmit} className=" space-y-6">
          {/* Question Image Upload */}
          <div className='flex gap-10 justify-center'>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Question Sheet Image
            </label>
            <div className="mt-1 flex flex-col space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleQuestionImageChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
              {questionPreview && (
                <div className="mt-2">
                  <img
                    src={questionPreview}
                    alt="Question Preview"
                    className="max-w-md h-auto rounded-lg border"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Answer Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Answer Sheet Image
            </label>
            <div className="mt-1 flex flex-col space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleAnswerImageChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
              {answerPreview && (
                <div className="mt-2">
                  <img
                    src={answerPreview}
                    alt="Answer Preview"
                    className="max-w-md h-auto rounded-lg border"
                  />
                </div>
              )}
            </div>
          </div>
          </div> 
          {/* Answer Key Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Answer Key
            </label>
            <div className="mt-1">
              <textarea
                value={answerKey}
                onChange={handleAnswerKeyChange}
                placeholder="Enter answer key (e.g., ABCDABCD)"
                rows={4}
                className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md p-2"
              />
              <p className="mt-1 text-sm text-gray-500">
                Enter the correct answers in sequence (e.g., ABCDABCD). Spaces will be automatically removed.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading || !questionImage || !answerImage || !answerKey.trim()}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                ${loading || !questionImage || !answerImage || !answerKey.trim()
                  ? 'bg-blue-300 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
              {loading ? 'Grading...' : 'Grade MCQ'}
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Result Display */}
        {score !== null && !error && (
          <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-medium text-green-900">Results</h3>
            <div className="mt-2">
              <p className="text-xl font-bold text-green-700">
                Score: {score}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MCQGrading;