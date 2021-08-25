import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { joinMission } from '../redux/missions/missions';

const Mission = ({ mission }) => {
  const dispatch = useDispatch();
  const {
    missionName, description, id, reserved,
  } = mission;

  const joinmission = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <tr>
      <td>{missionName}</td>
      <td style={{ width: '55%' }}>{description}</td>
      <td style={{ verticalAlign: 'middle' }}>
        {!reserved && (
        <Badge bg="secondary">NOT A MEMBER</Badge>
        )}
        {reserved && (
        <Badge bg="success">Active member</Badge>
        )}
      </td>
      <td style={{ verticalAlign: 'middle' }}>
        {!reserved && (
        <Button
          variant="outline-secondary"
          onClick={() => joinmission(id)}
        >
          Join Mission
        </Button>
        )}
        {reserved && (
        <Button
          variant="outline-danger"
          onClick={() => joinmission(id)}
        >
          Leave Mission
        </Button>
        )}
      </td>
    </tr>
  );
};

export default Mission;

Mission.propTypes = {
  mission: PropType.shape({
    id: PropType.string.isRequired,
    missionName: PropType.string.isRequired,
    description: PropType.string.isRequired,
    reserved: PropType.bool,
  }).isRequired,
};
