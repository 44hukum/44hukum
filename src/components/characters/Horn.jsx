import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core/OrbitControls";

import React, { Suspense, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/test.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.move.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.04}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="LP_Eyes_ring"
            geometry={nodes.LP_Eyes_ring.geometry}
            material={materials.Demon_MAT}
            skeleton={nodes.LP_Eyes_ring.skeleton}
          />
          <skinnedMesh
            name="LP_lower_armor_horns"
            geometry={nodes.LP_lower_armor_horns.geometry}
            material={materials.Demon_MAT}
            skeleton={nodes.LP_lower_armor_horns.skeleton}
          />
          <skinnedMesh
            name="LP_Lower_shoes"
            geometry={nodes.LP_Lower_shoes.geometry}
            material={materials.Demon_MAT}
            skeleton={nodes.LP_Lower_shoes.skeleton}
          />
          <skinnedMesh
            name="LP_shoulder1"
            geometry={nodes.LP_shoulder1.geometry}
            material={materials.Demon_MAT}
            skeleton={nodes.LP_shoulder1.skeleton}
          />
          <skinnedMesh
            name="LP_shoulder2"
            geometry={nodes.LP_shoulder2.geometry}
            material={materials.Demon_MAT}
            skeleton={nodes.LP_shoulder2.skeleton}
          />
          <skinnedMesh
            name="LP_shoulder_rings"
            geometry={nodes.LP_shoulder_rings.geometry}
            material={materials.Demon_MAT}
            skeleton={nodes.LP_shoulder_rings.skeleton}
          />
          <skinnedMesh
            name="LP_Upper_body"
            geometry={nodes.LP_Upper_body.geometry}
            material={materials.Demon_MAT}
            skeleton={nodes.LP_Upper_body.skeleton}
          />
          <skinnedMesh
            name="LP_upper_cloth"
            geometry={nodes.LP_upper_cloth.geometry}
            material={materials.Demon_MAT}
            skeleton={nodes.LP_upper_cloth.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/test.glb");

function Horn() {
  return (
    <div
      id="app"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <h1 style={{color: "white"}}> Life is Hard, keep learning</h1>
      <Canvas>
        <OrbitControls />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Final_Renderer() {
  return (
    <div id="canvas-container">
      <Canvas>
      <ambientLight intensity={0.1} />
        <directionalLight color='green' position={[0,0,5]} />
      <mesh>
        <boxGeometry args={[2,2,2]}/>
        <meshStandardMaterial />
      <Horn />
      </mesh>

      </Canvas>

    </div>
  );
}


export default Final_Renderer;
