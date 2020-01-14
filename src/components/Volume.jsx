import React from 'react';
import PropTypes from 'prop-types';

const Volume = (props) => {
  const { volume, editVolume } = props;
  return (
    <div className="volume m-auto">
      <input type="range" onChange={(evt) => editVolume(evt.currentTarget.value)} value={volume * 100} className="custom-range" />
    </div>
  );
};

Volume.propTypes = {
  volume: PropTypes.number.isRequired,
  editVolume: PropTypes.func.isRequired,
};

export default Volume;
