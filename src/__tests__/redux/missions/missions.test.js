import missionsReducer, { joinMission } from '../../../redux/missions/missions';

describe('Missions', () => {
  test('Should return initial state', () => {
    const initState = [];
    expect(missionsReducer(undefined, {})).toEqual(initState);
  });

  test('Should join mission', () => {
    const initState = [
      {
        id: '1',
        missionName: 'Thaicom',
        description: 'description',
      },
      {
        id: '2',
        missionName: 'Telstar',
        description: 'description',
      },
    ];
    const mission = {
      id: '1',
      missionName: 'Thaicom',
      description: 'description',
      reserved: true,
    };
    const expected = [
      {
        id: '1',
        missionName: 'Thaicom',
        description: 'description',
        reserved: true,
      },
      {
        id: '2',
        missionName: 'Telstar',
        description: 'description',
      },
    ];
    expect(missionsReducer(initState, joinMission(mission.id))).toEqual(expected);
    expect(missionsReducer(initState, joinMission(mission.id))).toHaveLength(2);
  });
});
