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
      <div id="display" className="col-12">
        <div className="row no-gutters">
          <DrumPadContainer letter="Q" src="ressources/sounds/Bass.wav" />
          <DrumPadContainer letter="W" src="ressources/sounds/Clap.wav" />
          <DrumPadContainer letter="E" src="ressources/sounds/Crash.wav" />
        </div>
        <div className="row no-gutters">
          <DrumPadContainer letter="A" src="ressources/sounds/Kick.wav" />
          <DrumPadContainer loop letter="S" src="ressources/sounds/MelodyLoop140BPM.wav" />
          <DrumPadContainer loop letter="D" src="ressources/sounds/MelodyLoop150BPM.wav" />
        </div>
        <div className="row no-gutters">
          <DrumPadContainer letter="Z" src="ressources/sounds/Snare.wav" />
          <DrumPadContainer loop letter="X" src="ressources/sounds/DrumLoop140BPM.wav" />
          <DrumPadContainer loop letter="C" src="ressources/sounds/DrumLoop150BPM.wav" />
        </div>
      </div>
    </div>
  </div>
);

export default App;
