import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';
import Volume from './Volume';

const Menu = (props) => {
  const { description, volume, editVolume } = props;
  return (
    <div className="menu-container">
      <div className="menu">
        <div className="row">
          <div className="col-12 p-2 p-md-4 text-center">
            <Description description={description} />
          </div>
          <div className="col-12 p-2 p-md-4">
            <Volume volume={volume} editVolume={editVolume} />
          </div>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  description: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  editVolume: PropTypes.func.isRequired,
};

export default Menu;
