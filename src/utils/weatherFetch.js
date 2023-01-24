const weatherFetch = async (lat, lon) => {
  const api_url = `http://localhost:4000/weather/${lat},${lon}`;
  const res = await fetch(api_url);
  const data = await res.json();
  return data;
};

export default weatherFetch;
