import PropType from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';

const Rocket = ({ rocket }) => {
  const { rocketName, description, flickrImages } = rocket;
  return (
    <div className="Rocket">
      <Row>
        <Col>
          <Image src={flickrImages[0]} fluid thumbnail />
        </Col>
        <Col xs={9}>
          <h5 className="h5">{rocketName}</h5>
          <p>{description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropType.shape({
    rocketName: PropType.string.isRequired,
    description: PropType.string.isRequired,
    flickrImages: PropType.arrayOf(PropType.string.isRequired).isRequired,
  }).isRequired,
};
