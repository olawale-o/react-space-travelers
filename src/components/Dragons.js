// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import getDragons from '../redux/dragons/dragons.async_actions';
import dragonsSelector from '../redux/dragons/dragonsSelector';
import Dragon from './Dragon';

const Dragons = () => {
  // const dispatch = useDispatch();
  const dragons = useSelector(dragonsSelector);
  // useEffect(() => {
  //   console.log('called dragons');
  //   if (dragons.length < 1) {
  //     dispatch(getDragons());
  //   }
  // }, []);
  const dragonComps = dragons.map((dragon) => <Dragon key={dragon.id} dragon={dragon} />);
  return (
    <div className="Dragons">
      {dragonComps}
    </div>
  );
};

export default Dragons;
