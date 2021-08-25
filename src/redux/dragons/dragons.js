export const SAVE_DRAGON = 'space/dragons/SAVEDRAGON';
export const LOAD_DRAGONS = 'space/dragons/LOADDRAGONS';

const initialState = [];

export const createDragon = (payload) => (
  {
    type: SAVE_DRAGON,
    payload,
  }
);

export const loadDragons = (payload) => (
  {
    type: LOAD_DRAGONS,
    payload,
  }
);

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DRAGON:
      return [...state, action.payload];
    case LOAD_DRAGONS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default dragonsReducer;
