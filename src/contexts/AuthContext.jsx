import React, { createContext, useContext, useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import bcrypt from 'bcryptjs';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Simulated database
let users = [
  { id: 1, name: 'Admin User', username: 'admin', password: bcrypt.hashSync('admin12345', 10), role: 'admin' },
];

let enrolledStudents = [];

const generateToken = () => {
  return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
};

const login = async (credentials) => {
  const user = users.find(u => u.username === credentials.username);
  if (user && await bcrypt.compare(credentials.password, user.password)) {
    const token = generateToken();
    if (user.role === 'student') {
      enrollStudent(user);
    }
    return { user: { id: user.id, name: user.name, username: user.username, role: user.role }, token };
  }
  throw new Error('Invalid credentials');
};

const signup = async (userData) => {
  if (users.some(u => u.username === userData.username)) {
    throw new Error('User already exists');
  }
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = { id: users.length + 1, ...userData, password: hashedPassword, role: 'student' };
  users.push(newUser);
  const token = generateToken();
  enrollStudent(newUser);
  return { user: { id: newUser.id, name: newUser.name, username: newUser.username, role: newUser.role }, token };
};

const enrollStudent = (user) => {
  if (!enrolledStudents.some(s => s.id === user.id)) {
    enrolledStudents.push({
      id: user.id,
      name: user.name,
      username: user.username,
      enrollmentDate: new Date().toISOString().split('T')[0]
    });
  }
};

const logout = async () => {
  // Simulating an asynchronous logout process
  await new Promise(resolve => setTimeout(resolve, 500));
  return true;
};

const getAllUsers = () => {
  return users.filter(user => user.role !== 'admin').map(({ id, name, username, role }) => ({ id, name, username, role }));
};

const getEnrolledStudents = () => {
  return enrolledStudents;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      if (token && storedUser) {
        return { user: JSON.parse(storedUser) };
      }
      return null;
    },
  });

  useEffect(() => {
    if (session) setUser(session.user);
  }, [session]);

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    },
  });

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      setUser(data.user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setUser(null);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  });

  const value = {
    user,
    login: loginMutation.mutate,
    signup: signupMutation.mutate,
    logout: logoutMutation.mutate,
    isLoading: loginMutation.isLoading || signupMutation.isLoading || logoutMutation.isLoading,
    getAllUsers,
    getEnrolledStudents,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
