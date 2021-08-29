import rocketsReducer, { reserveRocket } from '../redux/rockets/rockets';

describe('Rockets', () => {
  test('Should return initial state', () => {
    const initState = [];
    expect(rocketsReducer(undefined,{})).toEqual(initState);
  });

  test('Should handle a rocket booking', () => {
    const initState = [
      {
        id: '1',
        rocketName: 'Falcon 9',
        description: 'description',
        flickrImages: 'images',
      },
      {
        id: '2',
        rocketName: 'Falcon 1',
        description: 'description',
        flickrImages: 'images',
      }
    ];
    const rocket = {
      id: '1',
      rocketName: 'Falcon 9',
      description: 'description',
      flickrImages: 'images',
      reserved: false,
    };
    const expected = [
      {
        id: '1',
        rocketName: 'Falcon 9',
        description: 'description',
        flickrImages: 'images',
        reserved: true,
      },
      {
        id: '2',
        rocketName: 'Falcon 1',
        description: 'description',
        flickrImages: 'images',
      },
    ];
    expect(rocketsReducer(initState,reserveRocket(rocket.id))).toEqual(expected);
    expect(rocketsReducer(initState,reserveRocket(rocket.id))).toHaveLength(2);
  });
});