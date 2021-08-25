import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import rocketsSelector from '../redux/rockets/rocketsSelector';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector(rocketsSelector);
  const rocketComps = rockets.map((rocket) => <Rocket rocket={rocket} key={rocket.id} />);
  return (
    <div className="Rockets">
      <Container>
        {rocketComps}
      </Container>
    </div>
  );
};

export default Rockets;
