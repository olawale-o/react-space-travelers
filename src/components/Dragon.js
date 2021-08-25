import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import {
  Row, Col, Image, Button, Badge,
} from 'react-bootstrap';
import { reserveDragon } from '../redux/dragons/dragons';

const Dragon = ({ dragon }) => {
  const dispatch = useDispatch();
  const {
    name, type, flickrImages, reserved, id,
  } = dragon;
  const reserve = (id) => {
    dispatch(reserveDragon(id));
  };
  return (
    <div className="Dragon">
      <Row>
        <Col>
          <Image src={flickrImages[0]} fluid thumbnail />
        </Col>
        <Col xs={9}>
          <h5 className="h5">{name}</h5>
          <p>
            {reserved && <Badge bg="success">Reserved</Badge>}
            &nbsp;
            {type}
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

export default Dragon;

Dragon.propTypes = {
  dragon: PropType.shape({
    id: PropType.string.isRequired,
    name: PropType.string.isRequired,
    type: PropType.string.isRequired,
    reserved: PropType.bool,
    flickrImages: PropType.arrayOf(PropType.string.isRequired).isRequired,
  }).isRequired,
};
