import Nav from "./components/nav";
import HeroImage from './components/HeroImage';

import Image from 'react-bootstrap/Image'

function App() {
  return (
    <div>
      <Nav/>
      <HeroImage/>
      <h1>THE STOCKS AND BONDING ACADEMY</h1>
      <Image src="media/citty.webp"/>
    </div>
  );
}

export default App;