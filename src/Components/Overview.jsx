import React from 'react'
import { Link } from 'react-router-dom';
export default function Overview() {
  return (
    <div className=' py-5 m-20 lg:m-0 lg:p-5  p-10 border rounded-md border-yellow-400 block lg:w-full lg:relative'>
          <p className='text-white text-left text-us'>
            Chandni Jha is a native Indian who introduces herself as just an Amateur Dreamer. <br /><br />
            She has honed a diverse set of skills in the Technology field from Machine Learning to web development, with qualifications as a Software Engineer. She has worked as the face of (Student Ambassador) Unstop, Hacker Earth, and Microsoft Learn. This shows her effective communication and leadership qualities. She has been a team leader of various projects and a female representative during her graduation period. The beautiful website you are surfing right now is even her brainchild, showcasing her UI-UX skills. <br /><br />
            Just like her Technical Interests, she owns a wide range of interests in her personal life as well. She is an expert in poetic expression with an interest in sketching, photography, cooking, handicrafts, designing, editing, creativity indeed. She has been a compiler of 12 books, and you must not miss out on her solo poetry book 
            <Link to="https://www.amazon.in/Rekhanjali-Chandni-Jha/dp/B0B8264DNW/ref=sr_1_14?keywords=chandni+jha+poetry&qid=1688485326&sr=8-14"> Rekhanjali
            </Link>. You can view her creative content on YouTube channels Quanta Bytes (Infotainment based) and Rhythm Of Thoughts (Poetry based). She has achieved a world record for a book based on "Saino Poetry" - 100 Sainos.
          </p>
          <Link to='https://docs.google.com/document/d/1x9d71MoSFUiOLlHA7FRrqvzbnzxfc8Ue/edit?usp=sharing&ouid=101045511593766091252&rtpof=true&sd=true'>
            <button className="buttonr mx-5 my-10 lg:my-2 lg:mx-2">
              View Resume
            </button>
          </Link>
        </div>
  )
}
