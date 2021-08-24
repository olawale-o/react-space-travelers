export const SAVE_MISSION = 'space/rockets/SAVEROCKET';

const initialState = [];

export const createMission = (payload) => (
  {
    type: SAVE_MISSION,
    payload,
  }
);

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MISSION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
