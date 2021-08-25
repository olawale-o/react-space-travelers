import PropType from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';

const Dragon = ({ dragon }) => {
  const { name, type, flickrImages } = dragon;
  return (
    <div className="Dragon">
      <Row>
        <Col>
          <Image src={flickrImages[0]} fluid thumbnail />
        </Col>
        <Col xs={9}>
          <h5 className="h5">{name}</h5>
          <p>{type}</p>
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
    flickrImages: PropType.arrayOf(PropType.string.isRequired).isRequired,
  }).isRequired,
};
