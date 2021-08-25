const BASE_URI = 'https://api.spacexdata.com/v3/rockets';

const fetchAllRockets = async () => {
  const response = await fetch(BASE_URI);
  return response.json();
};

export default fetchAllRockets;
