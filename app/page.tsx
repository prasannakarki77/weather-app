import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import { WeatherProvider } from "./context/WeatherContext";

export default function Home() {
  return (
    <WeatherProvider>
      <main className=" flex h-screen ">
        <Searchbar />
        <Container />
      </main>
    </WeatherProvider>
  );
}
