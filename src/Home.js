import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCxt55wcO16ooGKnJtsWaPjJmINLvsAU8A",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
