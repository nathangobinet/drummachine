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
        <h1>Drum Machine 1.2</h1>
      </div>
      <div className="col-md-8">
        <div className="row no-gutters">
          <DrumPadContainer description="Do #3" type="note" letter="Q" src="ressources/sounds/C.wav" />
          <DrumPadContainer description="Re #3" type="note" letter="W" src="ressources/sounds/D.wav" />
          <DrumPadContainer description="Sol #3" type="note" letter="E" src="ressources/sounds/G.wav" />
        </div>
        <div className="row no-gutters">
          <DrumPadContainer description="Melody Loop" loop type="loop" letter="A" src="ressources/sounds/MeloLoop.wav" />
          <DrumPadContainer description="Kick" type="kick" letter="S" src="ressources/sounds/Kick.wav" />
          <DrumPadContainer description="Do #2" type="note" letter="D" src="ressources/sounds/R.wav" />
        </div>
        <div className="row no-gutters">
          <DrumPadContainer description="Drump loop" loop type="loop" letter="Z" src="ressources/sounds/DumbLoop.wav" />
          <DrumPadContainer description="Clap" type="kick" letter="X" src="ressources/sounds/Clap.wav" />
          <DrumPadContainer description="Snare" type="kick" letter="C" src="ressources/sounds/Snare.wav" />
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
