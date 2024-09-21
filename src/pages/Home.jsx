import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Users, Calendar, Handshake, ArrowRight, Code, Rocket, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 animate-fade-in-down">
              Welcome to <span className="text-yellow-400">PSITS</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-12 animate-fade-in-up max-w-3xl mx-auto">
              Empowering IT students to shape the future of technology through collaboration, innovation, and excellence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse"
            >
              Get Involved
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto p-8">
        <div className="text-center py-16">
          <h2 className="text-5xl font-bold mb-16 text-blue-800 dark:text-blue-300">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Users size={60} className="text-blue-500" />}
              title="Community Building"
              description="Join a vibrant community of IT enthusiasts where collaboration and teamwork are the foundation of our success."
              color="blue"
            />
            <FeatureCard
              icon={<Calendar size={60} className="text-green-500" />}
              title="Events & Workshops"
              description="Attend cutting-edge events, workshops, and hackathons that enhance your skills and provide hands-on learning experiences."
              color="green"
            />
            <FeatureCard
              icon={<Handshake size={60} className="text-purple-500" />}
              title="Professional Growth"
              description="Develop professionally through mentorship, networking, and exposure to industry experts and emerging technologies."
              color="purple"
            />
          </div>
        </div>

        <div className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white p-16 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Join PSITS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ReasonCard
              icon={<Code size={40} />}
              title="Skill Development"
              description="Enhance your coding skills through workshops and projects."
            />
            <ReasonCard
              icon={<Rocket size={40} />}
              title="Career Opportunities"
              description="Connect with industry leaders and potential employers."
            />
            <ReasonCard
              icon={<Zap size={40} />}
              title="Innovation"
              description="Work on cutting-edge projects and stay ahead in tech."
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description, color }) => (
  <div className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-b-4 border-${color}-500`}>
    <div className="mb-6 text-center">{icon}</div>
    <h3 className={`text-2xl font-semibold mb-4 text-${color}-700 dark:text-${color}-300`}>{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const ReasonCard = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="mb-4 inline-block p-4 bg-white dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-300">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-200">{description}</p>
  </div>
);

export default Home;
