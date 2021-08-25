export const SAVE_MISSION = 'space/missions/SAVEMISSION';
export const LOAD_MISSIONS = 'space/missions/LOADMISSIONS';

const initialState = [];

export const createMission = (payload) => (
  {
    type: SAVE_MISSION,
    payload,
  }
);

export const loadMissions = (payload) => (
  {
    type: LOAD_MISSIONS,
    payload,
  }
);

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MISSION:
      return [...state, action.payload];
    case LOAD_MISSIONS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default missionsReducer;
