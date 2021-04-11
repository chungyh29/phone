import React from 'react'
import * as THREE from 'three'
import {useLoader, useThree} from 'react-three-fiber'

const Background = ({rot,pos}) => {

  const floor1 = useLoader(THREE.TextureLoader, '/textures/floor_wood.jpg')

  if(floor1){
      floor1.wrapS = THREE.RepeatWrapping;
      floor1.wrapT = THREE.RepeatWrapping;
      // floor1.offset.set(5, 5);
      floor1.repeat.set(0.2, 3.5);
  }
  const{scene} = useThree();
  const color1 = new THREE.Color('rgb(0,162,232)')
  scene.background = color1;

  return ( 
    <>
      <mesh rotation={rot} position={pos}>
        <planeGeometry args={[65,30]}/>
        <meshStandardMaterial map={floor1}/>
      </mesh>
    </>
  )
}

Background.defaultProps = {
  rot: [-Math.PI/2,0,0],
  pos: [0,0,0]
}

export default Background
