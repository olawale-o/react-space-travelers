export const fetchAllRockets = async () => {
  const ROCKETS_URI = 'https://api.spacexdata.com/v3/rockets';
  const response = await fetch(ROCKETS_URI);
  return response.json();
};

export const fetchAllMissions = async () => {
  const MISSIONS_URI = 'https://api.spacexdata.com/v3/missions';
  const response = await fetch(MISSIONS_URI);
  return response.json();
};
