import './App.css';
import Character from './components/Character';
import Levels from './components/Levels';

import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <>
      <ParallaxProvider scrollAxis="horizontal">
        <Levels />
      </ParallaxProvider>

      <Character />
    </>
  );
}
 
export default App;
