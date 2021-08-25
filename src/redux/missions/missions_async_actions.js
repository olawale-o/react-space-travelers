import { fetchAllMissions } from '../../utils/utils';
import { loadMissions } from './missions';

const getMissions = () => (
  async function getMissions(dispatch) {
    const allMissions = await fetchAllMissions();
    const missions = allMissions.map((mission) => ({
      id: mission.mission_id,
      missionName: mission.mission_name,
      description: mission.description,
    }));
    dispatch(loadMissions(missions));
  }
);

export default getMissions;
