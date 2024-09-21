import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Lightbox } from 'react-modal-image';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Calendar, Briefcase, BookOpen, ArrowRight, Award, Zap, Globe } from 'lucide-react';

const About = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, photoIndex: 0 });

  const photos = [
"https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/445436756_420634354121693_2930507022597947671_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEFEQV7oYbx-mn2z1lJ8eW2RQklONiFH1tFCSU42IUfW81DZoo-CAWspdakR5y_rSsNdHLlOaBQqKohyYNlYhEc&_nc_ohc=pH-xQiVoz7UQ7kNvgFNgmT3&_nc_ht=scontent.fceb1-1.fna&_nc_gid=ALgt6qa-5krAZN15VQ3AW_4&oh=00_AYChkYi01S8xp1m9LMmchLLP6l1MO9v9_AOrLbRKta2XaQ&oe=66F447F8",
    "https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/440273388_410374545147674_486714210427363307_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG5srlxSWZF_Undr7ny6X5sKdW5YVACotsp1blhUAKi20i98Bq6WLw9eqOewWQIOTAkAWgH1PvNhFIbsImpiKBp&_nc_ohc=1vefZprh2TUQ7kNvgFeJfbv&_nc_ht=scontent.fceb1-2.fna&oh=00_AYAN-7Z9hk2IYeDUX3noN_hw7_Wgii3oQttL1vIq1KuC0Q&oe=66F439C5",
    "https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/439856853_410372868481175_8730754209956862335_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH3Bq0MNgwjx_HofvMWXIJkWKIiCnOTbxNYoiIKc5NvE5wB1puIBnjkgK2jsq0DqJDQITLh8ucF31UbaF5flPBu&_nc_ohc=qpYu-5mWXhoQ7kNvgE4Wp59&_nc_ht=scontent.fceb1-1.fna&_nc_gid=A0-23C8WD9-8pIluglJK7Q1&oh=00_AYAjI437rk8vqLCsTkWfotWs8RPopsreTuQSknwjoJMlbg&oe=66F4351C",
    "https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/440042065_410372818481180_5103464442569935949_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErxrRvo8XtKLlrPVOT9f5cQY2lOOE8Rq1BjaU44TxGrWiI9D2nsqGLoY6HaHTom9U4IHvE_6V1Ec38fTVOf-tq&_nc_ohc=0vhhzCWCQ-sQ7kNvgHk5AbD&_nc_ht=scontent.fceb1-2.fna&_nc_gid=Ardp8jNHcxOP4PD9cqQTrDg&oh=00_AYCC8w-IA-YqJ6SSPkHu5RBtlPUAATbxcVAu0qQnmlwSgg&oe=66F437F2",
    "https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/440291546_410372615147867_8389059481654836707_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGt_zqwT6XjFR-71NTe7Zu-3fSjrJj4lzvd9KOsmPiXO7enQLnUefTvwZI2ZRu42yc0e_U1FUYZRzH2wfcIQvBx&_nc_ohc=yFhWd_GoOJgQ7kNvgHqgFwq&_nc_ht=scontent.fceb1-2.fna&_nc_gid=AobPziNbQVIxYiO7ufMaeIB&oh=00_AYDO3Y9yap1fUNoUQijM6k9iEL1DBuR43zj_kQeJ5eCCSA&oe=66F444DA",
    "https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/440173506_410371855147943_1970878424544812977_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeESXV2xFScDjnaLDqYMZO_Dy8bNY3r30ObLxs1jevfQ5u-rV7lo_L6fZ-4eB_bX4p3CoaqfUiiOhPiFAX8aOGoo&_nc_ohc=3e9lEsmSRuoQ7kNvgGODI18&_nc_ht=scontent.fceb1-3.fna&oh=00_AYAS8T8z546VA68wHiREdBgBN-_2liFo20gw3V7l0_YN3g&oe=66F45AC0",
    "https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/439914914_410371751814620_5695873461121538547_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH-bQEdgjCPsn40Jz9QjHyTpkABKgAXd2GmQAEqABd3YWcI6vhp7cyCXs2xxqCF3BVKr40aOJb37KkV__hKVzNH&_nc_ohc=IUPHcmF2OL8Q7kNvgEd9AQf&_nc_ht=scontent.fceb1-3.fna&_nc_gid=ARf-KhVd1pduxYDZlG-gkBf&oh=00_AYBkQkIir-FfIJPiE1E8K4H6Uve70TNc3DspMEgu2yXp5w&oe=66F4383F",
    "https://scontent.fceb1-5.fna.fbcdn.net/v/t39.30808-6/431756712_378135015038294_270052279450483824_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGAwRRjPE9Y47usiU84KTOy51HkdXNA1EPnUeR1c0DUQ0yS14btYV-sP3A0WJGfUeLBlZut_ywUR25iPfa1Zpv8&_nc_ohc=cSa8R0OgdtUQ7kNvgElqlvt&_nc_ht=scontent.fceb1-5.fna&_nc_gid=AZENNOYOgZ4VdiSa93Ryg6t&oh=00_AYDgWEI_sBHKzAmCb-ozGXOlebLO6lLnXIJSsfBhNUmD_Q&oe=66F44FB1",
    "https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/307279353_113054418213023_126045914268214499_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF0bEDKnecbWrSpLC64KIDQKdPSLkbDFxQp09IuRsMXFBLDZM5IHRMcf2cgQZ7NAJbl3cvDFd9dKgzRw8fPMeZ4&_nc_ohc=LogAq-QFO8kQ7kNvgHCGk6d&_nc_ht=scontent.fceb1-2.fna&_nc_gid=ADUEl_IJcQkoCyQJREjWjJT&oh=00_AYAHPyGXJzoI1ADRxlbdoLhVfnslO2HI-WCUC0KwxLjHnQ&oe=66F45306",
    "https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/308796322_120462190805579_6722900398009313614_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEIDjbnyjGPGGVxhra-at6C5ya-qC2F_KjnJr6oLYX8qFMgbjSJ66CTbYL0j-sFulgeYQHX6GqCRw-3JT8mrNxn&_nc_ohc=3TRiugRqFCkQ7kNvgF-j2N6&_nc_ht=scontent.fceb1-3.fna&oh=00_AYBvNN8AtrVokXXbwGgHOlEwL3TSvk4dIwVh8Jgts1ELQg&oe=66F4735A",
    "https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/344849101_265839276009906_5995678249880861060_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGBLyoNwmzmScO3coKh9aSPzoSx_ZtDw2XOhLH9m0PDZbmFtrIdfvpTmes5qkoh6yz0OClcoeszExnJghBM8dLF&_nc_ohc=_dLFUKhWNJ4Q7kNvgHcnK3R&_nc_ht=scontent.fceb1-3.fna&oh=00_AYACzAssqpHA8FiHDoRsXuOmkq-W1sFpNSuBDfDVlhPhsw&oe=66F468B5",
    "https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/344801084_1286930832034569_2785540139413540975_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH8cjTZRXyNb3wbHufWxJ6t48GhhXrbkOvjwaGFetuQ6-Q5W4xXTTfcY0tTxBrMrSTdRrRpPkjFoCydJAtM2ZNM&_nc_ohc=YyIADYqsIjYQ7kNvgGOMM-X&_nc_ht=scontent.fceb1-3.fna&_nc_gid=AMs1aTUqxQBDj7siMAC_nLc&oh=00_AYBKIiUgbSC3XcP8fY1IeiHz7Tez8Ms9t5VAg0CNkMeITQ&oe=66F447A5",
    "https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/399766017_310357081816088_1822715666960902204_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGOulxwZ5T9jlqURgljfrqCxx12C5WAlfrHHXYLlYCV-gDlkH7LGpU0brjuP1Q6uwx5LiuF1wyaLrYaohTwkL98&_nc_ohc=cy7xqIn-3oMQ7kNvgGg6rtZ&_nc_ht=scontent.fceb1-1.fna&_nc_gid=Ai6NwqlOEMxpy1kcI-hQ4Un&oh=00_AYAHzeFJrFiy8tz2C52H0nmFlTKnpkuQ_8I4sgjwYhXpBQ&oe=66F44CC7",
    "https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/399690610_310357305149399_4377132435773178339_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF2eYkOiiYATw1k7kJ4Kt35Boar_QulxbsGhqv9C6XFuxNRZpIbuyuu1fx3Nw3Gpm3kg0pybuS5rS-sXVOJDhKf&_nc_ohc=W42gNKZfs9kQ7kNvgFhHdnG&_nc_ht=scontent.fceb1-1.fna&oh=00_AYA1toRjZyaWIddWw68p7nH_vWAyxJ3qbpiIXIbD3nmx6w&oe=66F4552D",
    "https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/403765719_310414678476995_2272826354400507835_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGumFyeKIZ50_o70uGtZjNimqbNHcHmWD6aps0dweZYPovy2ccFuLPX-Bz3NSaBq6na7FWQHzWhbyUNTT__ptHG&_nc_ohc=gRrRlJpG1zUQ7kNvgGBFqRZ&_nc_ht=scontent.fceb1-3.fna&oh=00_AYD1yAEuAmdzcg7e3VyJW_HRY9_8Krl6CyQ8fmjhIlbDuQ&oe=66F46D7E",
    "https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/399688858_310356811816115_5955417607036709884_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFCLtvWE_MGzuQgnIx62EGE6m0sXWpMzRjqbSxdakzNGFVEcAc_saKce4MJLbDlnZbdZ9nwmpMkGouGF5koFQv7&_nc_ohc=Mp947xAGAFcQ7kNvgF8oKHM&_nc_ht=scontent.fceb1-2.fna&_nc_gid=AlMq6-4Oyg9m7CfhPgjYrhp&oh=00_AYCAtPYROg-ddou3HkAL9P_c_lIMX7pUgYX1eqLIWPxfeg&oe=66F44DE7"

  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 md:p-8 pt-20">
        <h1 className="text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">About PSITS</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 mb-16 transition-all duration-300 hover:shadow-3xl transform hover:-translate-y-2">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
            The Philippine Society of Information Technology Students (PSITS) is a dynamic student-led organization that unites IT students across various universities. Our mission is to foster a collaborative learning environment that encourages the sharing of knowledge, skills, and experiences among aspiring IT professionals.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
            At PSITS, we are committed to enhancing the professional growth of our members through innovative workshops, cutting-edge seminars, and engaging community-building activities. Our goal is to prepare students for the ever-evolving challenges of the tech industry by providing opportunities for hands-on experience, networking, and exposure to emerging technologies.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Watch Our Promotional Video</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
            <iframe
              className="w-full h-full"
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FuiJ613Cmxq%2F&show_text=false&t=0"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </section>

        <section className="mb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h2 className="text-5xl font-bold mb-8 text-center">Get Involved</h2>
          <p className="text-2xl mb-10 text-center">
            Ready to join a thriving community of future IT leaders? Sign up today and start your journey with PSITS!
          </p>
          <div className="text-center">
            <Button asChild className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 text-xl py-4 px-10 rounded-full shadow-lg hover:shadow-xl">
              <Link to="https://ndkc.edu.ph/" className="inline-flex items-center">
                Join Now
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              To provide a dynamic platform for IT students to learn, innovate, and collaborate, thereby fostering the development of competent, ethical, and forward-thinking IT professionals ready to tackle the challenges of tomorrow.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              To be the leading organization that shapes future IT professionals, equipping them with cutting-edge skills, innovative mindsets, and a strong ethical foundation to thrive and lead in the rapidly evolving digital landscape.
            </p>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ObjectiveCard
              icon={<Users className="text-blue-500 w-12 h-12" />}
              title="Foster Collaboration"
              description="Create a vibrant community where IT students can share knowledge and ideas."
            />
            <ObjectiveCard
              icon={<Calendar className="text-green-500 w-12 h-12" />}
              title="Organize Events"
              description="Host cutting-edge workshops, seminars, and hackathons to enhance technical skills."
            />
            <ObjectiveCard
              icon={<Briefcase className="text-yellow-500 w-12 h-12" />}
              title="Build Networks"
              description="Connect students with industry leaders and potential employers."
            />
            <ObjectiveCard
              icon={<BookOpen className="text-red-500 w-12 h-12" />}
              title="Promote Ethics"
              description="Instill strong ethical practices and encourage continuous professional growth."
            />
          </div>
        </section>

        <section className="mb-20 bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Award className="w-12 h-12 text-yellow-500" />}
              title="Excellence"
              description="We strive for excellence in all our endeavors, pushing the boundaries of what's possible in IT."
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-blue-500" />}
              title="Innovation"
              description="We foster a culture of innovation, encouraging members to think creatively and develop groundbreaking solutions."
            />
            <FeatureCard
              icon={<Globe className="w-12 h-12 text-green-500" />}
              title="Global Perspective"
              description="We prepare our members for the global stage, with a focus on international trends and practices in IT."
            />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Join PSITS Today</h2>
          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Becoming a part of PSITS means joining a community of passionate IT students, accessing exclusive events and resources, and setting yourself up for a successful career in technology. Don't miss out on this opportunity to grow, learn, and connect!
            </p>
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300 text-lg py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105">
              <Link to="https://ndkc.edu.ph/" className="inline-flex items-center">
                Sign Up Now
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Connect With Us</h2>
          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-xl">Follow us on Facebook: <a href="https://www.facebook.com/ndkc-psits" className="text-blue-500 hover:underline">ndkc-psits</a></p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Stay updated with our latest events, workshops, and opportunities!</p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`PSITS Event ${index + 1}`}
                className="w-full h-48 object-cover cursor-pointer rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setLightbox({ isOpen: true, photoIndex: index })}
              />
            ))}
          </div>
        </section>

        {lightbox.isOpen && (
          <Lightbox
            medium={photos[lightbox.photoIndex]}
            large={photos[lightbox.photoIndex]}
            alt={`PSITS Event ${lightbox.photoIndex + 1}`}
            onClose={() => setLightbox({ isOpen: false, photoIndex: 0 })}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

const ObjectiveCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center space-y-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="text-4xl">{icon}</div>
    <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-center">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="text-4xl bg-white dark:bg-gray-800 p-3 rounded-full shadow-md">{icon}</div>
    <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
  </div>
);

export default About;