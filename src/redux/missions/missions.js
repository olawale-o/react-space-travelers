export const JOIN_MISSION = 'space/missions/JOINMISSION';
export const LOAD_MISSIONS = 'space/missions/LOADMISSIONS';

const initialState = [];

export const joinMission = (payload) => (
  {
    type: JOIN_MISSION,
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
    case JOIN_MISSION: {
      const selectedMission = state.find(({ id }) => action.payload === id);
      selectedMission.reserved = !selectedMission.reserved;
      return [...state];
    }
    case LOAD_MISSIONS:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default missionsReducer;
