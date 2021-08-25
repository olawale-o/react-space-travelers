import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadDragons } from '../redux/dragons/dragons';
import dragonsSelector from '../redux/dragons/dragonsSelector';
import Dragon from './Dragon';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector(dragonsSelector);
  useEffect(() => {
    dispatch(loadDragons());
  }, []);
  const dragonComps = dragons.map((dragon) => <Dragon key={dragon.id} dragon={dragon} />);
  return (
    <div className="Dragons">
      {dragonComps}
    </div>
  );
};

export default Dragons;
