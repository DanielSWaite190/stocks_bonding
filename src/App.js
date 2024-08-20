import Image from 'react-bootstrap/Image'
import Nav from "./components/nav";

function App() {
  return (
    <div>
      <Nav/>
      <h1>THE STOCKS AND BONDING ACADEMY</h1>
      <Image src={require("./media/citty.webp")} fluid/>
    </div>
  );
}

export default App;