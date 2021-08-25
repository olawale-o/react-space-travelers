import { fetchAllMissions } from '../../utils/utils';
import { loadMissions } from './missions';

const getMissions = () => (
  async function getMissions(dispatch) {
    const allMissions = await fetchAllMissions();
    const missions = allMissions.map((mission) => ({
      id: mission.id,
      missionName: mission.mission_name,
      description: rocket.description,
    }));
    dispatch(loadMissions(missions));
  }
);

export default getMissions;
