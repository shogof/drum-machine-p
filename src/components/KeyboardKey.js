import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const KeyboardKey = ({
  play,
  deactivateAudio,
  sound: {
    id,
    key,
    url,
    keyCode,
  },
}) => {
  const handleKeydown = (e) => {
    if (keyCode === e.keyCode) {
      const audio = document.getElementById(key);
      play(key, id);
      deactivateAudio(audio);
    }
  };

useEffect(() => {
  document.addEventListener('keydown', handleKeydown);
  return () => document.removeEventListener('keydown', handleKeydown);
}, [handleKeydown, keyCode, play, deactivateAudio]);  

  return (
    <button
    id={keyCode}
    className="drum-pad"
    onClick={() => play(key, id)}
    type="button" >
    <audio
      className="clip"
      src={url}
      id={key}
      aria-label={`Audio clip for ${key}`}
    />
    {key}
  </button>
  );
};

KeyboardKey.propTypes = {
  play: PropTypes.func.isRequired,
  deactivateAudio: PropTypes.func.isRequired,
  sound: PropTypes.shape({
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    keyCode: PropTypes.number.isRequired,
  }).isRequired,
};

export default KeyboardKey;
