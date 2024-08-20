import React, { useEffect, useCallback } from 'react';
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
  const handleKeydown = useCallback((e) => {
    if (keyCode === e.keyCode) {
      const audio = document.getElementById(key);
      play(key, id);
      deactivateAudio(audio);
    }
  }, [keyCode, key, play, id, deactivateAudio]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  return (
    <button
      id={keyCode}
      className="drum-pad"
      onClick={() => play(key, id)}
      type="button">
      <audio
        className="clip"
        src={url}
        id={key}
        aria-label={`Audio clip for ${key}`}>
        <track kind="metadata" />
      </audio>
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
