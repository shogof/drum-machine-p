import React from 'react';

const DrumControl = ({ stop, name, power, volume, handleVolumeChange, changeSoundGroup }) => (
  <div className="control">
    <button onClick={stop}>{power ? 'Turn Power OFF' : 'Turn Power ON'}</button>
    <h2>Volume: {Math.round(volume * 100)}%</h2>
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={handleVolumeChange}
      disabled={!power} // Disable volume control if power is off
    />
    <h2 id="display">{name}</h2>
    <button onClick={changeSoundGroup}>Change Sounds Group</button>
  </div>
);

export default DrumControl;
