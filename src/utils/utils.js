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

export const fetchAllDragons = async () => {
  const DRAGONS_URI = 'https://api.spacexdata.com/v3/dragons';
  const response = await fetch(DRAGONS_URI);
  return response.json();
};
