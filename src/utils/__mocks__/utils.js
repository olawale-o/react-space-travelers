const fetchAllRockets = () => {
  const rockets = [
    {
      id: '1',
      rocketName: 'Falcon 1',
      description: 'description',
      flickrImages: 'images',
    },
    {
      id: '2',
      rocketName: 'Falcon 9',
      description: 'description',
      flickrImages: 'images',
    },
  ];
  return new Promise((resolve) => resolve(rockets));
};

export default fetchAllRockets;
