export const RESERVE_ROCKET = 'space/rockets/RESERVEROCKET';
export const LOAD_ROCKETS = 'space/rockets/LOADROCKETS';

const initialState = [];

export const reserveRocket = (payload) => (
  {
    type: RESERVE_ROCKET,
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
    case RESERVE_ROCKET: {
      const selectedRocket = state.find((rocket) => action.payload === rocket.id);
      selectedRocket.reserved = !selectedRocket.reserved;
      return [...state];
    }
    case LOAD_ROCKETS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default rocketsReducer;
