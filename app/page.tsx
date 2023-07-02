import Image from "next/image";
import Container from "./components/Container";
import Searchbar from "./components/Searchbar";
import WeatherForecast from "./components/WeatherForecast";
import TodayHighlight from "./components/TodayHighlight";

export default function Home() {
  return (
    <main className=" flex h-screen ">
      <Searchbar />
      <Container>
        <WeatherForecast />
        <TodayHighlight />
      </Container>
    </main>
  );
}
