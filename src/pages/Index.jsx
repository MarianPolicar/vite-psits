import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { Button } from '../components/ui/button';

const Index = () => {
  const [showLogin, setShowLogin] = React.useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to PSITS</h1>
        <div className="flex justify-center space-x-4 mb-6">
          <Button
            onClick={() => setShowLogin(true)}
            variant={showLogin ? "default" : "outline"}
          >
            Login
          </Button>
          <Button
            onClick={() => setShowLogin(false)}
            variant={!showLogin ? "default" : "outline"}
          >
            Sign Up
          </Button>
        </div>
        {showLogin ? <Login /> : <SignUp />}
        <div className="text-center mt-4">
          <Link to="/home" className="text-blue-500 hover:underline">
            Continue to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
