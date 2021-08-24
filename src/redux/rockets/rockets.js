export const SAVE_ROCKET = 'space/rockets/SAVEROCKET';

const initialState = [];

export const createRocket = (payload) => (
  {
    type: SAVE_ROCKET,
    payload,
  }
);

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ROCKET:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
