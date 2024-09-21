import React from 'react';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
      <SignUp />
      <p className="mt-4">
        Already have an account? <Link to="/" className="text-blue-500 hover:underline">Login here</Link>
      </p>
    </div>
  );
};

export default SignUpPage;