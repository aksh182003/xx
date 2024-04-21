import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './willow-official-music-video.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 1500);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
      Dear love, <br />
      Being in a LDR has really taught me patience and how good things take time, patience and work.<br/>
      Couples don't realize that being able to go get groceries together or just meet after dinner and have ice-cream or go for an impromptu walk — all these
"super basic" things are a luxury for those people in a long distance relationship<br/>
I get through each day waiting for the day that being able to make you breakfast or watch a movie and having egg fried rice together will be a part of life.
But this isn't a sad post — this is a post to tell you that our brave hearts will be rewarded with a forever together.<br/>
Long distance does seem like a lot of work & after having done that for so many years - I promise you it is— but
If we get through this distance and time nothing will break us apart,
Till then fill our love tanks with video calls, virtual shopping, flying kisses - until that one day date - we never have to say good bye again and you're forever one.
I promise you, long distance is worth it.<br/>
 It's magic.<br/>
~kizzie

      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
