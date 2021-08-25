export const RESERVE_DRAGON = 'space/dragons/RESERVEDRAGON';
export const LOAD_DRAGONS = 'space/dragons/LOADDRAGONS';

const initialState = [];

export const reserveDragon = (payload) => (
  {
    type: RESERVE_DRAGON,
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
    case RESERVE_DRAGON: {
      const selectedDragon = state.find(({ id }) => action.payload === id);
      selectedDragon.reserved = !selectedDragon.reserved;
      return [...state];
    }
    case LOAD_DRAGONS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default dragonsReducer;
