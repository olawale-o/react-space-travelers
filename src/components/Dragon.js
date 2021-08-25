import PropType from 'prop-types';

const Dragon = ({ dragon }) => {
  const { name, type, flickrImages } = dragon;
  return (
    <div className="Dragon">
      {name}
      {type}
      {flickrImages}
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
