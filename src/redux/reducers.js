const EDITVOLULME = 'EDITVOLULME';
const EDITDESCRIPTION = 'EDITDESCRIPTION';

function getDefaultOption() {
  return {
    volume: 1,
  };
}

function editVolume(volume) {
  return {
    volume,
  };
}

function editVolumeAction(volume) {
  return {
    type: EDITVOLULME,
    volume,
  };
}

function editDescription(description) {
  return {
    description,
  };
}

function editDescriptionAction(description) {
  return {
    type: EDITDESCRIPTION,
    description,
  };
}

const rootReducer = (options = getDefaultOption, action) => {
  switch (action.type) {
    case EDITVOLULME:
      return editVolume(action.volume);
    case EDITDESCRIPTION: 
      return editDescription(action.description);
    default:
      return options;
  }
};

export { rootReducer, editVolumeAction, editDescriptionAction };
