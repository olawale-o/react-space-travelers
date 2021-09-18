import dragonsReducer, { reserveDragon } from '../../../redux/dragons/dragons';

describe('Dragons', () => {
  test('Should return initial state', () => {
    const initState = [];
    expect(dragonsReducer(undefined, {})).toEqual(initState);
  });

  test('Should handle a rocket booking', () => {
    const initState = [
      {
        id: '1',
        name: 'Dragon 1',
        type: 'description',
        flickrImages: 'images',
      },
      {
        id: '2',
        rocketName: 'Dragon 2',
        description: 'description',
        flickrImages: 'images',
      },
    ];
    const dragon = {
      id: '1',
      rocketName: 'Dragon 1',
      description: 'description',
      flickrImages: 'images',
      reserved: true,
    };
    const expected = [
      {
        id: '1',
        name: 'Dragon 1',
        type: 'description',
        flickrImages: 'images',
        reserved: true,
      },
      {
        id: '2',
        rocketName: 'Dragon 2',
        description: 'description',
        flickrImages: 'images',
      },
    ];
    expect(dragonsReducer(initState, reserveDragon(dragon.id))).toEqual(expected);
    expect(dragonsReducer(initState, reserveDragon(dragon.id))).toHaveLength(2);
  });
});
