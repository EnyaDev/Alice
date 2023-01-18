import "./App.css";
import Card from "./Components/NavBar/Card";
import NavBar from "./Components/NavBar/NavBar";
import Flex from "./Components/Flex/Flex";

function App() {
  return (
    <div>
      <NavBar />
      <Flex>
      <Card
        img="/img/Blue Lolinot.jpg"
        title="Dress"
        price={300}
        description="Lolita Blue Dress"
      />

      <Card
        img="https://i.pinimg.com/originals/cf/28/43/cf2843169130133b07556b04cbb94532.jpg"
        title="Slevees"
        price={150}
        description="Mangas de Encaje hecho a mano"
      />

      <Card
        img="https://i.ebayimg.com/images/g/V2cAAOSw6fBhP~Qu/s-l500.jpg"
        title="Boots"
        price={450}
        description="Killer Leather Boots"
      />
      </Flex>
    </div>
  );
}

export default App;
