import React from 'react';
import { connect } from 'react-redux';
import { editDescriptionAction, editVolumeAction } from '../redux/reducers';
import DrumPad from './DrumPad';
import Menu from './Menu';

// TODO: Import components then connect them to props

const DrumPadMapStateToProps = (options) => ({
  volume: options.volume,
});

const MenuMapStateToProps = (options) => ({
  description: options.description,
  volume: options.volume,
});

const MenuMapDispatchToProps = (dispatch) => ({
  editVolume: (description) => {
    dispatch(editVolumeAction(description));
  },
});
const DrumPadMapDispatchToProps = (dispatch) => ({
  editDescritpion: (description) => {
    dispatch(editDescriptionAction(description));
  },
});

const DrumPadContainer = connect(
  DrumPadMapStateToProps,
  DrumPadMapDispatchToProps,
)(DrumPad);

const MenuContainer = connect(
  MenuMapStateToProps,
  MenuMapDispatchToProps,
)(Menu);

const App = () => (
  <div id="drum-machine" className="container">
    <div className="row">
      <div className="col-12">
        <h1>Drum Machine</h1>
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
        <MenuContainer />
      </div>
    </div>
  </div>
);

export default App;
