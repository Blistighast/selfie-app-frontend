
const Geolocation = () => {

  const postData = async (lat, lon) => {
    const data = { lat, lon }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const resp = await fetch("http://localhost:4000/api", options)
    const json = await resp.json()
    console.log(json)
  }


  const handleClick = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        postData(lat, lon)
      });
    } else {
      console.log("geolocation not available");
    }
  }

  return (
    <div className="geolocation">
      <p className="latitude"> Latitude: {}</p>
      <p className="longitude"> Longitude: {}</p>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Geolocation