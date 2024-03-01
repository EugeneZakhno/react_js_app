import logo from './logo.svg';
import scene from './scene.bin';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={scene} className="App-logo" alt="Scene" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org"  target="_blank" rel="noopener noreferrer">
          Изучайте реакт и возвращайтесь к нам.
        </a>
      </header>
    </div>
  );
}

import {Suspense) from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls) from "@react-three/drei";
import Scene from "./models/Scene";
const App = () => (
    <Canvas camera={{position: [0, 2, 5], zoom: 1}}>
      <OrbitControls />
      <color attach="background" args={["lightblue"]} />
      <hemisphereLight intensity={0.35} />
      <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
        />

        <Suspense fallback={null}>
        <Scene/>
        </Suspense>
        </Canvas>
        );

export default App;
