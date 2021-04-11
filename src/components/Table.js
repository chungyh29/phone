import React, {useMemo} from 'react'
import * as THREE from 'three'
import { useLoader,useResource } from 'react-three-fiber'

const TableLeg = ({pos, textureMaterial, rot}) => {
  return(
    <mesh 
      material={textureMaterial} 
      position={pos}
      rotation={rot}>
      <cylinderBufferGeometry args={[0.3,0.2,6,12]}/>
    </mesh>

  )

}
const Table = (props) => {
  const radius = 1.00 //radius of table corner
  const inner = 1.50 //distance of table leg from table edge
  const le = 10.00 //table length

  //Texture for the table top
  const texture = useLoader(THREE.TextureLoader, '/textures/wood.jpg')
  if(texture){
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set(-0.5, 0);
    texture.repeat.set(0.1, 0.1);
  }
  const QRTexture = useLoader(THREE.TextureLoader, '/textures/ar_pets.svg')
  const refMaterial = useResource()

  const topXsection = useMemo(() => {
    const topXsection = new THREE.Shape();
    topXsection.moveTo(radius,0)
    topXsection.lineTo(le-radius,0)
    topXsection.absarc(le-radius,radius,radius,3*Math.PI/2, 0, false)
    topXsection.lineTo(le,le-radius)
    topXsection.absarc(le-radius, le-radius, radius,0, Math.PI/2, false )
    topXsection.lineTo(radius,le)
    topXsection.absarc(radius, le-radius, radius,Math.PI/2, Math.PI, false )
    topXsection.lineTo(0,radius)
    topXsection.absarc(radius, radius, radius, Math.PI, 3/2*Math.PI, false)
    return topXsection
  })
  const extrudeSettings = {
    bevelEnabled: false,
    steps:2,
    depth:0.5,
  }
  return (
    <>
      <group position={props.pos} rotation={props.rot}>
        {/* Table top */}
        <mesh>
          <extrudeBufferGeometry attach="geometry" args={[topXsection, extrudeSettings]}/>
          <meshStandardMaterial attach= "material" ref={refMaterial} map={texture}/>
        </mesh>
         {/* Table leg */}
         {[[inner, inner,-3], [le-inner, inner, -3],[le-inner,le-inner,-3], [inner,le-inner,-3]].map((pos,index) => <TableLeg 
          key={index}
          pos={pos} 
          rot={[Math.PI/2,0,0]}
          textureMaterial = {refMaterial.current}
         />)}
         {/* QR code */}
         <mesh position={[inner,inner,0.501]}>
          <planeGeometry args={[0.6,0.6]} />
          <meshStandardMaterial map={QRTexture}  />
         </mesh>
      </group>
    </>
  )
}

Table.defaultProps  = {
  pos:[0,0,0],
  rot:[-Math.PI/2,0,0]
}

export default Table
