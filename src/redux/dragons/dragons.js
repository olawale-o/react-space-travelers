export const SAVE_DRAGON = 'space/rockets/SAVEROCKET';

const initialState = [];

export const createDragon = (payload) => (
  {
    type: SAVE_DRAGON,
    payload,
  }
);

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DRAGON:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default dragonsReducer;
