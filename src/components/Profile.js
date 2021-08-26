import { useSelector, useDispatch } from 'react-redux';
import {
  Col, Container, Row, ListGroup, Button, Nav,
} from 'react-bootstrap';
import rocketsSelector from '../redux/rockets/rocketsSelector';
import missionsSelector from '../redux/missions/missionsSelector';
import dragonsSelector from '../redux/dragons/dragonsSelector';
import { reserveRocket } from '../redux/rockets/rockets';
import { joinMission } from '../redux/missions/missions';
import { reserveDragon } from '../redux/dragons/dragons';

const Profile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(rocketsSelector);
  const missions = useSelector(missionsSelector);
  const dragons = useSelector(dragonsSelector);
  const reserve = (rocket) => {
    dispatch(reserveRocket(rocket));
  };

  const joinmission = (id) => {
    dispatch(joinMission(id));
  };

  const dragonReserve = (id) => {
    dispatch(reserveDragon(id));
  };

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true)
    .map((rocket) => (
      <ListGroup.Item key={rocket.id}>
        {rocket.rocketName}
        <Nav.Link href="/home" style={{ display: 'inline-block' }}>Active</Nav.Link>
        <div>
          {rocket.reserved && (
          <Button
            variant="outline-secondary"
            onClick={() => reserve(rocket.id)}
          >
            Cancel Reservation
          </Button>
          )}
        </div>
      </ListGroup.Item>
    ));

  const joinedMissions = missions.filter((mission) => mission.reserved === true)
    .map((mission) => (
      <ListGroup.Item key={mission.id}>
        {mission.missionName}
        <Nav.Link href="/home" style={{ display: 'inline-block' }}>Active</Nav.Link>
        <div>
          {mission.reserved && (
          <Button
            variant="outline-danger"
            onClick={() => joinmission(mission.id)}
          >
            Leave Mission
          </Button>
          )}
        </div>
      </ListGroup.Item>
    ));

  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true)
    .map((dragon) => (
      <ListGroup.Item key={dragon.id}>
        {dragon.name}
        <Nav.Link href="/home" style={{ display: 'inline-block' }}>Active</Nav.Link>
        <div>
          {dragon.reserved && (
          <Button
            variant="outline-danger"
            onClick={() => dragonReserve(dragon.id)}
          >
            Cancel Reservation
          </Button>
          )}
        </div>
      </ListGroup.Item>
    ));
  return (
    <div className="Profile">
      <Container>
        <Row>
          <Col>
            <h6 className="h6">My Missions</h6>
            <ListGroup>
              {!joinedMissions.length && 'No Missions'}
              {joinedMissions}
            </ListGroup>
          </Col>
          <Col>
            <h6 className="h6">My Rockets</h6>
            <ListGroup>
              {!reservedRockets.length && 'No Rockets'}
              {reservedRockets}
            </ListGroup>
          </Col>
          <Col>
            <h6 className="h6">My Dragons</h6>
            <ListGroup>
              {!reservedDragons.length && 'No Dragons'}
              {reservedDragons}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
