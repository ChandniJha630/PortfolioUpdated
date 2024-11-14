import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import socialLinks from '../Data/social.json'; // Adjust the path to your social.json file
import { Link } from 'react-router-dom'; // Assuming you are using React Router for routing
import { LinkedIn, GitHub, Code, Article, YouTube, Subscriptions, Book, Instagram, Twitter } from '@mui/icons-material';

const iconComponents = {
  LinkedIn: LinkedIn,
  GitHub: GitHub,
  Code: Code,
  Article: Article,
  YouTube: YouTube,
  Subscriptions: Subscriptions,
  Book: Book,
  Instagram: Instagram,
  Twitter: Twitter,
};

function Contact() {
  const form = useRef();
  const [submit, setSubmitStatus] = useState('Submit');

  const sendEmail = (e) => {
    setSubmitStatus('Submitted');
    e.preventDefault();
    emailjs.sendForm(process.env.SERVICE, process.env.TEMPLATE, form.current, process.env.USER)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div
      className="min-h-screen p-0 flex lg:block lg:p-10 items-center justify-center lg:m-2.5"
    >
      <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6"> {/* Added padding here */}
        {/* <h2 className="text-3xl font-semibold text-white mb-6">Contact Us</h2> */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300"
          >
            {submit}
          </button>
        </form>
        </div>
        <div className="mt-6 px-10 mx-5 space-y-4"> {/* Reduced margin top */}
          {Array.from({ length: Math.ceil(socialLinks.length / 3) }, (_, rowIndex) => (
            <div key={rowIndex} className="flex justify-around space-x-4"> {/* Added spacing between icons */}
              {socialLinks.slice(rowIndex * 3, rowIndex * 3 + 3).map((socialLink, index) => {
                const IconComponent = iconComponents[socialLink.icon];
                return (
                  <Link
                    key={index}
                    to={socialLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition duration-300"
                  >
                    <IconComponent style={{ color: 'white', fontSize: '32px' }} /> {/* Increased icon size */}
                  </Link>
                );
              })}
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default Contact;