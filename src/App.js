import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Geolocation from "./Components/Geolocation";
import RootLayout from "./layouts/RootLayout";
import LocationsList from "./pages/LocationsList";
import WorldMap from "./pages/WorldMap";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Geolocation />} />
      <Route path="locations-list" element={<LocationsList />} />
      <Route path="world-map" element={<WorldMap />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
