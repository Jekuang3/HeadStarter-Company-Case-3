import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map.tsx";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCxt55wcO16ooGKnJtsWaPjJmINLvsAU8A",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

export default App;
