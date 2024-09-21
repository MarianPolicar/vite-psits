import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    emailjs.sendForm(
      'service_g3x763o', // Replace with your EmailJS Service ID
      'template_xnqgfgb', // Replace with your EmailJS Template ID
      form.current,
      'nqjGG_OT15eMo8cpm'   // Replace with your EmailJS Public Key
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.error('Error:', error.text);
        alert('Failed to send message.');
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 pt-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-primary">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Get in Touch</h2>
            <p className="mb-6 text-muted-foreground">Have questions or want to get involved? Reach out to us!</p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-primary" />
                <span>policar.m0411@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-primary" />
                <span>+639162019871</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-primary" />
                <span>Datu Ingkal Street Kidapawan City, North Cotabato</span>
              </li>
            </ul>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Send Us a Message</h2>
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
  <div>
    <Input
      {...register('name', { required: 'Name is required' })}
      placeholder="Your Name"
      className="w-full"
      name="name"  
    />
    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
  </div>
  <div>
    <Input
      {...register('email', { 
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address"
        }
      })}
      placeholder="Your Email"
      className="w-full"
      name="email"  
    />
    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
  </div>
  <div>
    <Textarea
      {...register('message', { required: 'Message is required' })}
      placeholder="Your Message"
      className="w-full"
      rows={4}
      name="message"  
    />
    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
  </div>
  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 transition-colors duration-300">
    Send Message
  </Button>
</form>

          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5751694915396!2d125.08903121744384!3d7.0597339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8a4f4a1d6a7a7%3A0x7c4a7f6a2a6a6a6a!2sDatu%20Ingkal%20St%2C%20Kidapawan%20City%2C%20Cotabato%2C%20Philippines!5e0!3m2!1sen!2sus!4v1647834687325!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
