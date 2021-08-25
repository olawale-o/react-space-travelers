import PropType from 'prop-types';

const Rocket = ({ rocket }) => {
  const { rocket_name, description, flickr_images } = rocket;
  return (
    <div className="Rocket">
      {rocket_name}
      {description}
      {flickr_images}
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropType.shape({
    rocket_name: PropType.string.isRequired,
    description: PropType.string.isRequired,
    flickr_images: PropType.string.isRequired,
  }).isRequired,
};
