import PropType from 'prop-types';
import { Badge, Button } from 'react-bootstrap';

const Mission = ({ mission }) => {
  const { missionName, description } = mission;
  return (
    <tr>
      <td>{missionName}</td>
      <td style={{ width: '55%' }}>{description}</td>
      <td style={{ verticalAlign: 'middle' }}><Badge bg="secondary">NOT A MEMBER</Badge></td>
      <td style={{ verticalAlign: 'middle' }}>
        <Button variant="outline-secondary">Join mission</Button>
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
  }).isRequired,
};
