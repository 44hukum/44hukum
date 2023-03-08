import React, {useRef, useState} from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Cylinder3d(props){
  const ref = useRef();
  const [hovered, hover]=useState(false)
  const [clicked, click] = useState(false)

  useFrame((state, delta)=> (ref.current.rotation.x += 0.01))

  return (
    <mesh {...props} ref={ref} scale={clicked ? 1.5:1}
    onClick={(event) => hover(true)}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    > 
      <cylinderGeometry args={[2,2,2]} />
      <meshStandardMaterial wireframe={props.wireframe} color={hovered ? "hotpink": "orange"} />
    </mesh>
  );
}
function App() {
  return (
    <>
      <Canvas>
      <ambientLight />
        	<pointLight position={[10, 10, 10]} />
        <Cylinder3d position={[-1.2, 1, 0]}/>
        <Cylinder3d position={[1.2, 1, 0]}/>
        <Cylinder3d position={[1.4, 1, 0]}/>
        <Cylinder3d position={[-1.4, 1, 0]}/>


        <Cylinder3d position={[-2.2, 0, 0]}/>
        <Cylinder3d position={[2.2, 0, 0]}/>
        <Cylinder3d position={[2.4, 0, 0]}/>
        <Cylinder3d position={[-2.4, 0, 0]}/>
      </Canvas>

      <h1 style={{'color':'white'}}>
      Hello world

      </h1>
    </>
    );
}

export default App;
