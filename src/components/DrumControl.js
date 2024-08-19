import React from 'react';
import PropTypes from 'prop-types';

const DrumControl = ({
  stop,
  name,
  power,
  volume,
  handleVolumeChange,
  changeSoundGroup,
}) => (
  <div className="control">
    <button
      onClick={stop}
      type="button"
    >
      {power ? 'Turn Power OFF' : 'Turn Power ON'}
    </button>
    <h2>
      Volume:
      <br />
      {Math.round(volume * 100)}
      %
    </h2>
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={handleVolumeChange}
      disabled={!power}
    />
    <h2 id="display">
      {name}
    </h2>
    <button
      onClick={changeSoundGroup}
      type="button"
    >
      Change Sounds Group
    </button>
  </div>
);

DrumControl.propTypes = {
  stop: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  power: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  handleVolumeChange: PropTypes.func.isRequired,
  changeSoundGroup: PropTypes.func.isRequired,
};

export default DrumControl;
