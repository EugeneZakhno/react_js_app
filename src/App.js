import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Scene from "./Scene";
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
            castShadow={0}
        />

        <Suspense fallback={null}>
        <Scene />
        </Suspense>
        </Canvas>
        );

export default App;
