import PropType from 'prop-types';

const Rocket = ({ rocket }) => {
  const { rocketName, description, flickrImages } = rocket;
  return (
    <div className="Rocket">
      {rocketName}
      {description}
      {flickrImages[0]}
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
