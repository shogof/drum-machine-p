import React from 'react';
import KeyboardKey from './KeyboardKey';

const Keyboard = ({ sounds, play, power, deactivateAudio }) => (
  <div className="keyboard">
    {sounds.map((sound) => (
      <KeyboardKey 
        key={sound.keyCode} 
        sound={power ? sound : { ...sound, url: "#" }} 
        play={play} 
        deactivateAudio={deactivateAudio} 
      />
    ))}
  </div>
);

export default Keyboard;
