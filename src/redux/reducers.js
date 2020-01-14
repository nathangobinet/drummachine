const EDITVOLULME = 'EDITVOLULME';
const EDITDESCRIPTION = 'EDITDESCRIPTION';

function getDefaultOption() {
  return {
    volume: 0.5,
    description: 'Waiting...',
  };
}

function editVolumeAction(volume) {
  return {
    type: EDITVOLULME,
    volume,
  };
}

function editDescriptionAction(description) {
  return {
    type: EDITDESCRIPTION,
    description,
  };
}

const rootReducer = (options = getDefaultOption(), action) => {
  switch (action.type) {
    case EDITVOLULME:
      return {
        description: options.description,
        volume: parseInt(action.volume, 10) / 100,
      };
    case EDITDESCRIPTION:
      return {
        description: action.description,
        volume: options.volume,
      };
    default:
      return options;
  }
};

export { rootReducer, editVolumeAction, editDescriptionAction };
