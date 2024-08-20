import React from 'react';
import PropTypes from 'prop-types';
import KeyboardKey from './KeyboardKey';

const Keyboard = ({
  sounds,
  play,
  power,
  deactivateAudio,
}) => (
  <div className="keyboard">
    {sounds.map((sound) => (
      <KeyboardKey 
        key= {sound.keyCode} 
        sound= {power ? sound : { ...sound, url: '#' }} 
        play= {play} 
        deactivateAudio= {deactivateAudio} 
      />
    ))}
  </div>
);

Keyboard.propTypes = {
  sounds: PropTypes.arrayOf(PropTypes.shape({
    keyCode: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  play: PropTypes.func.isRequired,
  power: PropTypes.bool.isRequired,
  deactivateAudio: PropTypes.func.isRequired,
};

export default Keyboard;
