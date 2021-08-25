export const SAVE_ROCKET = 'space/rockets/SAVEROCKET';
export const LOAD_ROCKETS = 'space/rockets/LOADROCKETS';

const initialState = [];

export const createRocket = (payload) => (
  {
    type: SAVE_ROCKET,
    payload,
  }
);

export const loadRockets = (payload) => (
  {
    type: LOAD_ROCKETS,
    payload,
  }
);

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ROCKET:
      return state.concat(action.payload);
    case LOAD_ROCKETS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default rocketsReducer;
