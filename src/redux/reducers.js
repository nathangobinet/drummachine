const EDITVOLULME = 'EDITVOLULME';

function editVolume(volume) {
  return {
    volume,
  };
}

function getDefaultOption() {
  return {
    volume: 1,
  };
}

function editVolumeAction(volume) {
  return {
    type: EDITVOLULME,
    volume,
  };
}

const rootReducer = (options = getDefaultOption, action) => {
  switch (action.type) {
    case EDITVOLULME:
      return editVolume(action.volume);
    default:
      return options;
  }
};

export { rootReducer, editVolumeAction };
