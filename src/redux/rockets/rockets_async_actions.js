import { fetchAllRockets } from '../../utils/utils';
import { loadRockets } from './rockets';

const getRockets = () => (
  async function getRockets(dispatch) {
    const allRockets = await fetchAllRockets();
    const rockets = allRockets.map((rocket) => ({
      id: rocket.id,
      rocketName: rocket.rocket_name,
      description: rocket.description,
      flickrImages: rocket.flickr_images,
    }));

    dispatch(loadRockets(rockets));
  }
);

export default getRockets;
