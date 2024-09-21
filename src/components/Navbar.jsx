import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Home, Info, Calendar, Phone, User, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 p-4 fixed w-full z-10 shadow-lg transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-white text-2xl font-bold flex items-center">
          PSITS
        </Link>
        <ul className="flex space-x-6 items-center">
          <NavItem to="/home" icon={<Home className="w-4 h-4 mr-1" />}>Home</NavItem>
          <NavItem to="/about" icon={<Info className="w-4 h-4 mr-1" />}>About</NavItem>
          <NavItem to="/events" icon={<Calendar className="w-4 h-4 mr-1" />}>Events</NavItem>
          <NavItem to="/contact" icon={<Phone className="w-4 h-4 mr-1" />}>Contact</NavItem>
          {user ? (
            <>
              {user.role === 'admin' && (
                <NavItem to="/dashboard" icon={<User className="w-4 h-4 mr-1" />}>Dashboard</NavItem>
              )}
              <li>
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="text-white hover:text-blue-200 flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <NavItem to="/login">Login</NavItem>
              <NavItem to="/signup">Sign Up</NavItem>
            </>
          )}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, children }) => (
  <li>
    <Link
      to={to}
      className="text-white hover:text-blue-200 transition-colors duration-200 flex items-center"
    >
      {icon}
      {children}
    </Link>
  </li>
);

export default Navbar;
