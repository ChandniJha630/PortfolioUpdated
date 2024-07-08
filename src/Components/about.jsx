import React, { Suspense, lazy } from 'react';

const Avatar = lazy(() => import('./avatar'));
const Timeline = lazy(() => import('./timeline'));
const Overview = lazy(() => import('./Overview'));
const Skills = lazy(() => import('./skills'));

const About = () => {
  return (
    <div className='top-0 '>
      <div className='w-full top-0 -z-10 max-h-fit '>
        <div className="w-full flex justify-around lg:block">
          <div className='px-10 my-10 w-1/2'>
            <Suspense fallback={<div>Loading Avatar and Timeline...</div>}>
              <Avatar />
              <Timeline />
            </Suspense>
          </div>
          <div className='w-1/2 h-screen justify-evenly'>
            <Suspense fallback={<div>Loading Overview...</div>}>
              <Overview />
            </Suspense>
          </div>
        </div>
      </div>
      <div className=''>
        <Suspense fallback={<div>Loading Skills...</div>}>
          <Skills />
        </Suspense>
      </div>
    </div>
  );
};

export default About;
