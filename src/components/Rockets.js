import { useSelector } from 'react-redux';
import rocketsSelector from '../redux/rockets/rocketsSelector';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector(rocketsSelector);
  const rocketComps = rockets.map((rocket) => <Rocket rocket={rocket} key={rocket.id} />);
  return (
    <div className="Rockets">
      {rocketComps}
    </div>
  );
};

export default Rockets;
