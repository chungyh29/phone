
import './App.css';
import Background from './components/Background'
import Model from './components/Iphone';
import Table from './components/Table';
import {useState, Suspense, useRef} from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import {useSpring} from 'react-spring/three';
import * as THREE from 'three';
import {getMousePos} from './components/utils';



function App() {
  const [active, setActive] = useState(false);
  const mouse=useRef({x:0, y:0})
  const {position,rotation} = useSpring( {
    position: active ? [1.05,1.5,-0.5] : [-1,3,0],
    rotation: active ? [-Math.PI/2,0,0] : [0,0,0]
  })

  const changePosition = () => {
    setActive(!active)
  }

  const MoveCamera = () => {

    const dummy = new THREE.Vector3()
    useFrame((state) => {
      const step = 0.03
      state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, active ? 30 : 40, step)
      state.camera.position.lerp(dummy.set(active ? -0.5 : -1, active ? 3 : 4.5, active ? 5 : 15), step)
      state.camera.lookAt(dummy.set(active ? 0.8 : 2 ,active ? 1.5 : 0, active ? 0 : 0))
      state.camera.updateProjectionMatrix()
    })
    return null
  }


  return (
    <>
      <Canvas 
        camera={{position: [-1,4.5,15], 
                fov:40}}
        onMouseMove={(e) => (mouse.current = getMousePos(e))}
      
      >
        <MoveCamera />
        <ambientLight intensity={0.3}/>
        <pointLight intensity={0.5} position={[1.5,3,5]} />
        <Suspense fallback="loading">      
        <Background pos={[5,-6,-5]} rot={[-Math.PI/2, 0,0]}/>
          <Model pos={position} rot={rotation} mouse={mouse} onClick={changePosition}/>
          <Table />
        </Suspense>
        {/* <OrbitControls/> */}
        {/* <axesHelper /> */}
      </Canvas>  
    </>
  );
}

export default App;
