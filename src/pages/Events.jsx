import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ChevronLeft, ChevronRight, Users, Clock } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    title: '11th PSITS Regional Convention',
    date: 'April 28-29, 2023',
    location: ' KCC Convention Center, General Santos City',
    description: '11th PSITS Regional Convention with the Theme: "Innovative Technologies: Navigating the Future Through Convergence." ',
    image: 'https://scontent.fceb1-4.fna.fbcdn.net/v/t39.30808-6/344572013_2266409546893663_3700529104002531482_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFACBCfYxCy4wYXkO7t_i9WoV7jnDbOp6WhXuOcNs6npT-mJ8UgNFC7bG5cCSiHB8NR2YTAp7B5OWG6Wox07P7E&_nc_ohc=XmUKfjKkFCMQ7kNvgFVkF3A&_nc_ht=scontent.fceb1-4.fna&_nc_gid=A8l5oAAUcMwISm4X3rOLzcf&oh=00_AYDo5WiLL6cR_AedxDPRGG70PI4V6lj40KxmZUjvBOpSrA&oe=66F46087',
    attendees: 500,
    duration: '2 days',
  },
  {
    id: 2,
    title: 'Innotechsphere Workshop',
    date: 'November 17, 2023',
    location: 'Notre Dame of Kidapawan College, Student Center',
    description: 'Ignite the future at "InnoTechSphere 2023" – NDKC PSITS Seminar and Workshop!',
    image: 'https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/445436756_420634354121693_2930507022597947671_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEFEQV7oYbx-mn2z1lJ8eW2RQklONiFH1tFCSU42IUfW81DZoo-CAWspdakR5y_rSsNdHLlOaBQqKohyYNlYhEc&_nc_ohc=pH-xQiVoz7UQ7kNvgFNgmT3&_nc_ht=scontent.fceb1-1.fna&_nc_gid=ALgt6qa-5krAZN15VQ3AW_4&oh=00_AYChkYi01S8xp1m9LMmchLLP6l1MO9v9_AOrLbRKta2XaQ&oe=66F447F8',
    attendees: 200,
    duration: '1 day',
  },
  {
    id: 3,
    title: '12th PSITS Regional Convention',
    date: 'May 4-6, 2024',
    location: 'RMMC MI - Ramon Magsaysay Memorial Colleges-Marbel, Inc.',
    description: '"Philippine Society of Information Technology Students" Regional Convention, themed "Innotech Gala: Elevating the Spirit of Innovation in a Symphony of IT Brilliance.',
    image: 'https://scontent.fceb1-5.fna.fbcdn.net/v/t39.30808-6/439973411_496477529374671_8843181174375944202_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH7J6RfR-VX6EiIp3GDKs6hS5RQGtMR2R1LlFAa0xHZHUpoawTRZC1cZgEtC3UnpLkbxy2n8l5BqOoy9ywn4ye2&_nc_ohc=R-swiew6tUcQ7kNvgEhAz2q&_nc_ht=scontent.fceb1-5.fna&_nc_gid=AMEbKo9ozgViJ9g3Vvug0jJ&oh=00_AYD60_hyKpwG9RyHM-zKLdP5KmCbhoMCFZmpWcra5s5R2Q&oe=66F43056',
    attendees: 600,
    duration: '3 days',

  },
];

const slideshowImages = [
  'https://scontent.fceb1-5.fna.fbcdn.net/v/t39.30808-6/439973411_496477529374671_8843181174375944202_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH7J6RfR-VX6EiIp3GDKs6hS5RQGtMR2R1LlFAa0xHZHUpoawTRZC1cZgEtC3UnpLkbxy2n8l5BqOoy9ywn4ye2&_nc_ohc=R-swiew6tUcQ7kNvgEhAz2q&_nc_ht=scontent.fceb1-5.fna&_nc_gid=AMEbKo9ozgViJ9g3Vvug0jJ&oh=00_AYD60_hyKpwG9RyHM-zKLdP5KmCbhoMCFZmpWcra5s5R2Q&oe=66F43056',
  'https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/440273388_410374545147674_486714210427363307_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG5srlxSWZF_Undr7ny6X5sKdW5YVACotsp1blhUAKi20i98Bq6WLw9eqOewWQIOTAkAWgH1PvNhFIbsImpiKBp&_nc_ohc=1vefZprh2TUQ7kNvgFeJfbv&_nc_ht=scontent.fceb1-2.fna&oh=00_AYAN-7Z9hk2IYeDUX3noN_hw7_Wgii3oQttL1vIq1KuC0Q&oe=66F439C5',
  'https://scontent.fceb1-4.fna.fbcdn.net/v/t39.30808-6/440155202_410371838481278_4309286310993739521_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHAYfl4mo7D07w0lGpuEp0pR5RZJvjQhkRHlFkm-NCGRK3mUFszPAdTm7ngBRUXE1rricTecLbKCK2GYB5PTyY_&_nc_ohc=7iA8hvJy710Q7kNvgEQYGAT&_nc_ht=scontent.fceb1-4.fna&_nc_gid=A0chsQZM_WDk5BqutgDWY20&oh=00_AYCnOcWVyLKHicux--5mXk8aCOQm7gxiGrgCICCbOjDaEg&oe=66F45481',
  'https://scontent.fceb1-4.fna.fbcdn.net/v/t39.30808-6/344572013_2266409546893663_3700529104002531482_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFACBCfYxCy4wYXkO7t_i9WoV7jnDbOp6WhXuOcNs6npT-mJ8UgNFC7bG5cCSiHB8NR2YTAp7B5OWG6Wox07P7E&_nc_ohc=XmUKfjKkFCMQ7kNvgFVkF3A&_nc_ht=scontent.fceb1-4.fna&_nc_gid=A8l5oAAUcMwISm4X3rOLzcf&oh=00_AYDo5WiLL6cR_AedxDPRGG70PI4V6lj40KxmZUjvBOpSrA&oe=66F46087'

];

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideshowImages.length) % slideshowImages.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 pt-20">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">PSITS Events</h1>

        {/* Slideshow */}
        <div className="relative w-full h-[500px] mb-16 overflow-hidden rounded-3xl shadow-2xl">
          {slideshowImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slideshow ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventsData.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 rounded-3xl">
              <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">{event.title}</h2>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-green-500" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <Users className="w-5 h-5 mr-2 text-yellow-500" />
                  <span>{event.attendees} Attendees</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                  <Clock className="w-5 h-5 mr-2 text-purple-500" />
                  <span>{event.duration}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
