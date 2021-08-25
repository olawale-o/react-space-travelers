import PropType from 'prop-types';

const Mission = ({ mission }) => {
  const { missionName, description } = mission;
  return (
    <div className="Mission">
      {missionName}
      {description}
    </div>
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
