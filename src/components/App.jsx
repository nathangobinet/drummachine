/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import DrumPad from './DrumPad';

// TODO: Import components then connect them to props

const mapStateToProps = (options) => ({
  volume: options.volume,
});


const DrumPadContainer = connect(mapStateToProps, null)(DrumPad);

const App = () => (
  <div id="drum-machine" className="container">
    <div className="row">
      <div className="col-12">
        <h1>Drum Machine</h1>
      </div>
      <div className="col-md-8">
        <div className="row no-gutters">
          <DrumPadContainer type="note" letter="Q" src="ressources/sounds/C.wav" />
          <DrumPadContainer type="note" letter="W" src="ressources/sounds/D.wav" />
          <DrumPadContainer type="note" letter="E" src="ressources/sounds/G.wav" />
        </div>
        <div className="row no-gutters">
          <DrumPadContainer type="kick" letter="A" src="ressources/sounds/Kick.wav" />
          <DrumPadContainer type="kick" letter="S" src="ressources/sounds/Bass.wav" />
          <DrumPadContainer type="note" letter="D" src="ressources/sounds/A.wav" />
        </div>
        <div className="row no-gutters">
          <DrumPadContainer type="kick" letter="Z" src="ressources/sounds/Snare.wav" />
          <DrumPadContainer type="kick" letter="X" src="ressources/sounds/Clap.wav" />
          <DrumPadContainer type="note" letter="C" src="ressources/sounds/R.wav" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="menu-container">
          <div className="menu">
            <div className="row">
              <div className="col-12 p-2 p-md-4 text-center">
                <div id="display" className="m-auto">
                  Bass
                </div>
              </div>
              <div className="col-12 p-2 p-md-4">
                <div className="volume m-auto">
                  <label className="mb-0" htmlFor="formControlRange">
                    Volume
                  </label>
                  <input type="range" className="custom-range" id="formControlRange" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
