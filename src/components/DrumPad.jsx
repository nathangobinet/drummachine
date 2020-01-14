import React from 'react';
import PropTypes from 'prop-types';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    };

    this.handlePointer = this.handlePointer.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.soundEnded = this.soundEnded.bind(this);
    this.playSound = this.playSound.bind(this);
    this.setVolume = this.setVolume.bind(this);
  }

  componentDidMount() {
    const { letter } = this.props;
    document.addEventListener('keydown', this.handleKey);
    const audio = document.getElementById(letter);
    audio.onended = this.soundEnded;
    this.setVolume();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  setVolume() {
    const { letter, volume } = this.props;
    const audio = document.getElementById(letter);
    if (audio) {
      audio.volume = volume;
    }
  }

  handlePointer(evt) {
    const { editDescritpion, description } = this.props;
    editDescritpion(description);
    this.playSound(evt.currentTarget.lastChild);
  }

  soundEnded() {
    const { loop, letter } = this.props;
    if (!loop) this.stopSound(document.getElementById(letter));
  }

  stopSound(audio) {
    const sound = audio;
    sound.pause();
    sound.currentTime = 0;
    this.state.playing = false;
    sound.parentNode.classList.remove('active');
  }

  handleKey(evt) {
    const { letter } = this.props;
    if (evt.key === letter.toLowerCase()) {
      this.playSound(document.getElementById(letter));
    }
  }

  playSound(audio) {
    const { playing } = this.state;
    const { loop } = this.props;
    if (!playing) {
      this.state.playing = true;
      audio.play();
      audio.parentNode.classList.add('active');
    } else {
      this.stopSound(audio);
      if (!loop) this.playSound(audio);
    }
  }

  render() {
    const {
      letter, src, loop, type, description, volume,
    } = this.props;
    this.setVolume(volume);
    return (
      <div className="col-4 pad-container">
        <button
          id={description}
          onPointerDown={this.handlePointer}
          type="button"
          className={`drum-pad ${type}`}
        >
          <span>{letter}</span>
          <audio id={letter} loop={loop} className="clip" src={src}>
            <track kind="captions" label="No caption available" />
          </audio>
        </button>
      </div>
    );
  }
}

DrumPad.propTypes = {
  loop: PropTypes.bool,
  letter: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  editDescritpion: PropTypes.func.isRequired,
};

DrumPad.defaultProps = {
  loop: false,
};

export default DrumPad;
