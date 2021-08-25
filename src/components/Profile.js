import { useSelector } from 'react-redux';
import {
  Col, Container, Row, ListGroup,
} from 'react-bootstrap';
import rocketsSelector from '../redux/rockets/rocketsSelector';
import missionsSelector from '../redux/missions/missionsSelector';
import dragonsSelector from '../redux/dragons/dragonsSelector';

const Profile = () => {
  const rockets = useSelector(rocketsSelector);
  const missions = useSelector(missionsSelector);
  const dragons = useSelector(dragonsSelector);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true)
    .map((rocket) => (<ListGroup.Item key={rocket.id}>{rocket.rocketName}</ListGroup.Item>));

  const joinedMissions = missions.filter((mission) => mission.reserved === true)
    .map((mission) => (<ListGroup.Item key={mission.id}>{mission.missionName}</ListGroup.Item>));

  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true)
    .map((dragon) => (<ListGroup.Item key={dragon.id}>{dragon.name}</ListGroup.Item>));

  return (
    <div className="Profile">
      <Container>
        <Row>
          <Col>
            <h6 className="h6">My Missions</h6>
            <ListGroup>
              {reservedRockets}
            </ListGroup>
          </Col>
          <Col>
            <h6 className="h6">My Dragons</h6>
            <ListGroup>
              {reservedDragons}
            </ListGroup>
          </Col>
          <Col>
            <h6 className="h6">My Rockets</h6>
            <ListGroup>
              {joinedMissions}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
