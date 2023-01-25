import server_url from "./server_url";

const postData = async (lat, lon, weather, air) => {
  const data = { lat, lon, weather, air };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const resp = await fetch(`${server_url}/api`, options);
  // const resp = await fetch("http://localhost:4000/api", options);
  const json = await resp.json();
  return json;
};

export default postData;
