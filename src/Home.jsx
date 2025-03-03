import React, { useState } from 'react';
import { User, LogIn, Book, FileText, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeForm, setActiveForm] = useState('login');

  const LoginForm = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input 
            type="password" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );

  const SignupForm = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input 
            type="password" 
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Create a password"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="h-6 w-6 text-gray-500" />
              </button>
              <h1 className="ml-4 text-xl font-semibold text-gray-900">
                Automatic Exam Grading System
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsSignupOpen(false);
                  setActiveForm('login');
                }}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </button>
              <button 
                onClick={() => {
                  setIsSignupOpen(true);
                  setIsLoginOpen(false);
                  setActiveForm('signup');
                }}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                <User className="h-4 w-4 mr-2" />
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transform fixed lg:relative lg:translate-x-0 z-40 w-64 h-screen bg-white border-r transition-transform duration-200 ease-in-out`}>
          <nav className="mt-5 px-2">
            <div className="space-y-1">
              <a href="#" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 bg-gray-100">
                <Book className="mr-3 h-6 w-6 text-gray-500" />
                MCQ Questions
              </a>
              <a href="#" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-100">
                <FileText className="mr-3 h-6 w-6 text-gray-500" />
                Subjective Questions
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {(isLoginOpen || isSignupOpen) ? (
              <div className="flex justify-center items-center">
                {activeForm === 'login' ? <LoginForm /> : <SignupForm />}
              </div>
            ) : (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Welcome to Automatic Exam Grading System
                </h2>
                <p className="text-gray-600 mb-6">
                  Streamline your grading process with our automated system. Handle both MCQ and Objective questions efficiently.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">MCQ Questions</h3>
                    <p className="text-gray-600 mb-4">
                      Grade multiple choice questions automatically with our intelligent system.
                    </p>
                    <Link to='/mcq' className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Start Grading MCQs
                    </Link>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Subjective Questions</h3>
                    <p className="text-gray-600 mb-4">
                      Evaluate objective-type questions with our advanced grading algorithms.
                    </p>
                    <Link to='/addDB'  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Start Grading Objectives
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;