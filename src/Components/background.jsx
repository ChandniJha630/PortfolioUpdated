import IntroVideo1 from '../assets/IntroVideo.mp4';
import ConnectedButtons from './connectedButtons';
function Background(){ 
  return(
    <div className=' max-h-screen w-full'>
     <video src={IntroVideo1} autoPlay loop muted className='bg-video absolute top-0'/>
     <ConnectedButtons/>
    </div>
  );
}
export default Background;