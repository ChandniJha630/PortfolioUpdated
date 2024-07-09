import IntroVideo1 from '../assets/IntroVideo.mp4';
import ConnectedButtons from './connectedButtons';
function Background(){ 
  return(
    <div className=' max-h-screen w-full home'>
     <video src={IntroVideo1} autoPlay loop muted className='bg-video cover absolute top-0'/>
     <ConnectedButtons/>
    </div>
  );
}
export default Background;