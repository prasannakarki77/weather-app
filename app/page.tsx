import Image from "next/image";
import Container from "./components/Container";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <main className=" flex h-screen ">
      <Searchbar />
      <Container>
        {" "}
        <h1 className=" text-white ">weather</h1>
      </Container>
    </main>
  );
}
