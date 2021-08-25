import fetchAllRockets from '../../utils/utils';
import { loadRockets } from './rockets';

const getRockets = () => (
  async function getRockets(dispatch) {
    const allRockets  =  await fetchAllRockets();
    console.log(allRockets);
    dispatch(loadRockets(allRockets));
  }
);

export default getRockets;
