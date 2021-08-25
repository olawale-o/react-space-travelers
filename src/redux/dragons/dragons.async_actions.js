import { fetchAllDragons } from '../../utils/utils';
import { loadDragons } from './dragons';

const getDragons = () => (
  async function getDragons(dispatch) {
    const allDragons = await fetchAllDragons();
    const missions = allDragons.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      flickrImages: dragon.flickr_images,
    }));
    dispatch(loadDragons(missions));
  }
);

export default getDragons;
