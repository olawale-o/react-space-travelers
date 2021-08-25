// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import missionSelector from '../redux/missions/missionsSelector';
// import getMissions from '../redux/missions/missions_async_actions';
import Mission from './Mission';

const Missions = () => {
  // const dispatch = useDispatch();
  const missions = useSelector(missionSelector);
  // useEffect(() => {
  //   console.log('called missions');
  //   if (missions.length < 1) {
  //     dispatch(getMissions());
  //   }
  // }, []);
  const missionComps = missions.map((mission) => <Mission key={mission.id} mission={mission} />);
  return (
    <div className="Missions">
      {missionComps}
    </div>
  );
};

export default Missions;
