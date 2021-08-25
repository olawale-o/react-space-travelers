import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import {
  Row, Col, Image, Button, Badge,
} from 'react-bootstrap';
import { reserveRocket } from '../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    id, rocketName, description, flickrImages, reserved,
  } = rocket;

  const reserve = (rocket) => {
    dispatch(reserveRocket(rocket));
  };

  return (
    <div className="Rocket">
      <Row>
        <Col>
          <Image src={flickrImages[0]} fluid thumbnail />
        </Col>
        <Col xs={9}>
          <h5 className="h5">{rocketName}</h5>
          <p>
            {reserved && <Badge bg="success">Reserved</Badge>}
            &nbsp;
            {description}
          </p>
          {!reserved && (
          <Button
            variant="primary"
            onClick={() => reserve(id)}
          >
            Reserve Rocket
          </Button>
          )}
          {reserved && (
          <Button
            variant="outline-secondary"
            onClick={() => reserve(id)}
          >
            Cancel Reservation
          </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropType.shape({
    id: PropType.number.isRequired,
    rocketName: PropType.string.isRequired,
    description: PropType.string.isRequired,
    reserved: PropType.bool,
    flickrImages: PropType.arrayOf(PropType.string.isRequired).isRequired,
  }).isRequired,
};
