import server_url from "./server_url";

const weatherFetch = async (lat, lon) => {
  const api_url = `${server_url}/weather/${lat},${lon}`;
  const res = await fetch(api_url);
  const data = await res.json();
  return data;
};

export default weatherFetch;
