(this["webpackJsonpreact-three-iphone"]=this["webpackJsonpreact-three-iphone"]||[]).push([[0],{56:function(e,t,r){},57:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var a=r(1),o=r.n(a),s=r(51),i=r.n(s),m=(r(56),r(11)),n=(r(57),r(2)),c=r(16),l=r(4),j=function(e){var t=e.rot,r=e.pos,a=Object(c.c)(n.TextureLoader,"/textures/floor_wood.jpg");a&&(a.wrapS=n.RepeatWrapping,a.wrapT=n.RepeatWrapping,a.repeat.set(.2,3.5));var o=Object(c.e)().scene,s=new n.Color("rgb(0,162,232)");return o.background=s,Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("mesh",{rotation:t,position:r,children:[Object(l.jsx)("planeGeometry",{args:[65,30]}),Object(l.jsx)("meshStandardMaterial",{map:a})]})})};j.defaultProps={rot:[-Math.PI/2,0,0],pos:[0,0,0]};var g=j,h=r(14),p=r(46),b=r(28),y=r(8);function u(e){var t=Object(a.useRef)(),r=Object(p.a)("/cute_pug_waffles/scene.gltf"),o=r.nodes,s=r.materials;return Object(l.jsx)("group",Object(y.a)(Object(y.a)({ref:t},e),{},{position:e.pos,dispose:null,children:Object(l.jsxs)("group",{rotation:[-Math.PI/2,0,0],children:[Object(l.jsx)("mesh",{geometry:o.mesh_0.geometry,material:s.material_14}),Object(l.jsx)("mesh",{geometry:o.mesh_1.geometry,material:s.material_13}),Object(l.jsx)("mesh",{geometry:o.mesh_2.geometry,material:s.material_12}),Object(l.jsx)("mesh",{geometry:o.mesh_3.geometry,material:s.material_11}),Object(l.jsx)("mesh",{geometry:o.mesh_4.geometry,material:s.material_10}),Object(l.jsx)("mesh",{geometry:o.mesh_5.geometry,material:s.material_9}),Object(l.jsx)("mesh",{geometry:o.mesh_6.geometry,material:s.material_8}),Object(l.jsx)("mesh",{geometry:o.mesh_7.geometry,material:s.material_7}),Object(l.jsx)("mesh",{geometry:o.mesh_8.geometry,material:s.material_6}),Object(l.jsx)("mesh",{geometry:o.mesh_9.geometry,material:s.material_5}),Object(l.jsx)("mesh",{geometry:o.mesh_10.geometry,material:s.material_4}),Object(l.jsx)("mesh",{geometry:o.mesh_11.geometry,material:s.material_4}),Object(l.jsx)("mesh",{geometry:o.mesh_12.geometry,material:s.defaultMat_0}),Object(l.jsx)("mesh",{geometry:o.mesh_13.geometry,material:s.defaultMat}),Object(l.jsx)("mesh",{geometry:o.mesh_14.geometry,material:s.material_3}),Object(l.jsx)("mesh",{geometry:o.mesh_15.geometry,material:s.material_2}),Object(l.jsx)("mesh",{geometry:o.mesh_16.geometry,material:s.material_1}),Object(l.jsx)("mesh",{geometry:o.mesh_17.geometry,material:s.material_0})]})}))}p.a.preload("/cute_pug_waffles/scene.gltf");var O=function(e,t){var r=0,a=window.innerWidth;return e<=a/2&&(r=t*((a/2-e)/(a/2)*100)/100*-1),e>a/2&&(r=t*((e-a/2)/(a/2)*100)/100),{x:r}};function x(e){var t=e.mouse,r=Object(h.a)(e,["mouse"]),o=Object(a.useRef)(),s=Object(a.useRef)(),i=Object(a.useRef)(),j=Object(a.useState)(!1),g=Object(m.a)(j,2),y=g[0],x=g[1],d=Object(a.useState)(!1),_=Object(m.a)(d,2),f=_[0],M=_[1],v=Object(b.useSpring)({from:{emissiveVal:0,opacityVal:0},to:{emissiveVal:y?16711680:0,opacityVal:y?0:.4},loop:{reverse:!0}}),C=v.emissiveVal,P=v.opacityVal,w=Object(p.a)("/iphone.glb"),R=w.nodes,I=w.materials,T=Object(c.e)(),S=T.scene,E=T.gl,k=Object(a.useMemo)((function(){return[new n.WebGLRenderTarget(90,180,{format:n.RGBFormat,stencilBuffer:!1})]}),[]),B=Object(m.a)(k,1)[0];Object(c.b)((function(){E.setRenderTarget(B),E.render(S,o.current),E.setRenderTarget(null),y&&F(t,s.current)})),Object(a.useEffect)((function(){o.current.updateProjectionMatrix()}),[]),Object(a.useEffect)((function(){var e;if(y)return e=setTimeout((function(){s.current.visible=y}),500),function(){return clearTimeout(e)};s.current.visible=y}),[y]),Object(a.useEffect)((function(){document.body.style.cursor=f?"pointer":"auto"}));var F=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40,a=O(e.current.x,r);t.rotation.yD=n.MathUtils.lerp(t.rotation.yD||0,a.x,.1),t.rotation.y=n.Math.degToRad(t.rotation.yD)-.7};return Object(l.jsxs)(b.a.group,{ref:i,dispose:null,position:r.pos,rotation:r.rot,onClick:function(e){e.stopPropagation(),x(!y),r.onClick(),console.log(y)},onPointerOver:function(){return M(!0)},onPointerOut:function(){return M(!1)},children:[Object(l.jsx)("perspectiveCamera",{fov:80,aspect:.5,position:[.45,.9,-.1],near:.5,far:25,ref:o}),Object(l.jsx)("object3D",{ref:s,position:[.2,1,.22],scale:[.3,.3,.3],rotation:[Math.PI/2,-.7,0],children:Object(l.jsx)(u,{})}),Object(l.jsxs)("group",{position:[.1,1,-.08],rotation:[Math.PI/2,0,0],scale:[.01,.01,.01],children:[Object(l.jsxs)("group",{position:[24.8,-5.5,-98.56],children:[Object(l.jsx)("mesh",{material:I["schwarz glass"],geometry:R.Cube001.geometry}),Object(l.jsxs)("mesh",{position:[2.5,14.8,98.5],rotation:[-Math.PI/2,0,0],children:[Object(l.jsx)("planeBufferGeometry",{args:[90,180],attach:"geometry"}),Object(l.jsx)("meshStandardMaterial",{map:B.texture,attach:"material",opacity:.9,metalness:.6,roughness:0})]}),Object(l.jsxs)("mesh",{position:[2.5,8,98],rotation:[-Math.PI/2,0,0],children:[Object(l.jsx)("planeBufferGeometry",{args:[130,250],attach:"geometry"}),Object(l.jsx)(b.a.meshStandardMaterial,{opacity:P,transparent:!0,emissive:C})]})]}),Object(l.jsx)("group",{position:[-113.54,2.64,124.1],children:Object(l.jsxs)("group",{position:[0,5.22,0],children:[Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Mesh040.geometry}),Object(l.jsx)("mesh",{material:I["schwarz glass"],geometry:R.Mesh040_1.geometry}),Object(l.jsx)("mesh",{material:I["Mat.009"],geometry:R.Mesh040_2.geometry})]})}),Object(l.jsxs)("group",{position:[18.54,2.64,114.47],children:[Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cylinder_12_2.geometry,position:[-.56,-1.27,-2.81]}),Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Extrude_5_3.geometry,position:[-132.08,0,9.63],children:Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cap_2_7.geometry,position:[131.55,-1.24,-11.18]})})]}),Object(l.jsxs)("group",{position:[39.09,2.64,114.47],children:[Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cylinder_12.geometry,position:[-.56,-1.27,-2.81]}),Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Extrude_5_2.geometry,position:[-132.08,0,9.63],children:Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cap_2_6.geometry,position:[131.55,-1.24,-11.18]})})]}),Object(l.jsxs)("group",{position:[65.66,-9.77,-83.68],rotation:[0,0,-.06],children:[Object(l.jsxs)("mesh",{material:I["Mat.3"],geometry:R.Extrude.geometry,position:[-.68,3.41,8.74],children:[Object(l.jsx)("mesh",{material:I["Mat.4"],geometry:R.Cap_1_3.geometry,position:[.28,.61,1.54],rotation:[0,0,-3.09]}),Object(l.jsx)("mesh",{material:I["Mat.5"],geometry:R.Cap_2_3.geometry,position:[.28,.61,1.54],rotation:[0,0,-3.09]})]}),Object(l.jsxs)("mesh",{material:I["Mat.007"],geometry:R.Extrude_1.geometry,position:[-27.18,15.8,-20.85],children:[Object(l.jsx)("mesh",{material:I["Mat.7"],geometry:R.Cap_1_4.geometry,position:[.18,.38,1.95],rotation:[0,0,-3.09]}),Object(l.jsx)("mesh",{material:I["Mat.8"],geometry:R.Cap_2_4.geometry,position:[.18,.38,1.95],rotation:[0,0,-3.09]})]}),Object(l.jsxs)("mesh",{material:I.Mat,geometry:R.Extrude_5.geometry,position:[-.68,3.41,-14.33],children:[Object(l.jsx)("mesh",{material:I["Mat.1"],geometry:R.Cap_1_2.geometry,position:[.28,.61,3.11],rotation:[0,0,-3.09]}),Object(l.jsx)("mesh",{material:I["Mat.2"],geometry:R.Cap_2_2.geometry,position:[.28,.61,3.11],rotation:[0,0,-3.09]})]}),Object(l.jsxs)("mesh",{material:I["Mat.6"],geometry:R.Extrude_7.geometry,position:[18.48,-67.19,215.71],children:[Object(l.jsx)("mesh",{material:I["Mat.6"],geometry:R.Cap_1.geometry,position:[-19.02,70.3,-216.12],rotation:[0,0,-3.07]}),Object(l.jsx)("mesh",{material:I["Mat.6"],geometry:R.Cap_2.geometry,position:[-19.02,70.3,-216.12],rotation:[0,0,-3.07]})]})]}),Object(l.jsxs)("mesh",{material:I.Metallic,geometry:R.Extrude_1_2.geometry,position:[-19.17,2.64,-34.69],children:[Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cap_2_10.geometry,position:[-8.06,-1.55,-1.87]}),Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Rounding_4.geometry,position:[-8.06,-1.55,-1.87],children:Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cap_1_10.geometry})})]}),Object(l.jsxs)("mesh",{material:I["schwarz glass"],geometry:R.Extrude_2.geometry,position:[65.58,-5.83,-82.95],children:[Object(l.jsx)("mesh",{material:I["schwarz glass"],geometry:R.Cap_1_5.geometry,position:[-.37,1.22,-1.19]}),Object(l.jsx)("mesh",{material:I["schwarz glass"],geometry:R.Rounding.geometry,position:[-.37,1.22,-1.19],children:Object(l.jsx)("mesh",{material:I["schwarz glass"],geometry:R.Cap_2_5.geometry})})]}),Object(l.jsxs)("mesh",{material:I.Metallic,geometry:R.Extrude_2_2.geometry,position:[-19.17,2.64,-55.64],children:[Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cap_2_11.geometry,position:[-8.06,-1.55,-1.87]}),Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Rounding_5.geometry,position:[-8.06,-1.55,-1.87],children:Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cap_1_11.geometry})})]}),Object(l.jsxs)("mesh",{material:I.Metallic,geometry:R.Extrude_3.geometry,position:[-24.69,2.64,-75.38],children:[Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cap_2_9.geometry,position:[-2.8,-2.21,-1.87]}),Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Rounding_3.geometry,position:[-2.8,-2.21,-1.87],children:Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cap_1_9.geometry})})]}),Object(l.jsxs)("mesh",{material:I.Metallic,geometry:R.Extrude_4.geometry,position:[76.44,2.64,-46.24],children:[Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cap_1_8.geometry,position:[-10.58,-1.55,-1.87]}),Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Rounding_2.geometry,position:[-10.58,-1.55,-1.87],children:Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Cap_2_8.geometry})})]}),Object(l.jsx)("mesh",{material:I.Metallic,geometry:R.Sweep.geometry,position:[-113.54,2.64,124.1]})]})]})}p.a.preload("/iphone.glb");var d=function(e){var t=e.pos,r=e.textureMaterial,a=e.rot;return Object(l.jsx)("mesh",{material:r,position:t,rotation:a,children:Object(l.jsx)("cylinderBufferGeometry",{args:[.3,.2,6,12]})})},_=function(e){var t=1.5,r=10,o=Object(c.c)(n.TextureLoader,"/textures/wood.jpg");o&&(o.wrapS=n.RepeatWrapping,o.wrapT=n.RepeatWrapping,o.offset.set(-.5,0),o.repeat.set(.1,.1));var s=Object(c.c)(n.TextureLoader,"/textures/ar_pets.svg"),i=Object(c.d)(),m=Object(a.useMemo)((function(){var e=new n.Shape;return e.moveTo(1,0),e.lineTo(9,0),e.absarc(9,1,1,3*Math.PI/2,0,!1),e.lineTo(r,9),e.absarc(9,9,1,0,Math.PI/2,!1),e.lineTo(1,r),e.absarc(1,9,1,Math.PI/2,Math.PI,!1),e.lineTo(0,1),e.absarc(1,1,1,Math.PI,1.5*Math.PI,!1),e}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("group",{position:e.pos,rotation:e.rot,children:[Object(l.jsxs)("mesh",{children:[Object(l.jsx)("extrudeBufferGeometry",{attach:"geometry",args:[m,{bevelEnabled:!1,steps:2,depth:.5}]}),Object(l.jsx)("meshStandardMaterial",{attach:"material",ref:i,map:o})]}),[[t,t,-3],[r-t,t,-3],[r-t,r-t,-3],[t,r-t,-3]].map((function(e,t){return Object(l.jsx)(d,{pos:e,rot:[Math.PI/2,0,0],textureMaterial:i.current},t)})),Object(l.jsxs)("mesh",{position:[t,t,.501],children:[Object(l.jsx)("planeGeometry",{args:[.6,.6]}),Object(l.jsx)("meshStandardMaterial",{map:s})]})]})})};_.defaultProps={pos:[0,0,0],rot:[-Math.PI/2,0,0]};var f=_;var M=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),r=t[0],o=t[1],s=Object(a.useRef)({x:0,y:0}),i=Object(b.useSpring)({position:r?[1.05,1.5,-.5]:[-1,3,0],rotation:r?[-Math.PI/2,0,0]:[0,0,0]}),j=i.position,h=i.rotation,p=function(){var e=new n.Vector3;return Object(c.b)((function(t){t.camera.fov=n.MathUtils.lerp(t.camera.fov,r?30:40,.03),t.camera.position.lerp(e.set(r?-.5:-1,r?3:4.5,r?5:15),.03),t.camera.lookAt(e.set(r?.8:2,r?1.5:0,0)),t.camera.updateProjectionMatrix()})),null};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(c.a,{camera:{position:[-1,4.5,15],fov:40},onMouseMove:function(e){return s.current=function(e){return{x:e.clientX,y:e.clientY}}(e)},children:[Object(l.jsx)(p,{}),Object(l.jsx)("ambientLight",{intensity:.3}),Object(l.jsx)("pointLight",{intensity:.5,position:[1.5,3,5]}),Object(l.jsxs)(a.Suspense,{fallback:"loading",children:[Object(l.jsx)(g,{pos:[5,-6,-5],rot:[-Math.PI/2,0,0]}),Object(l.jsx)(x,{pos:j,rot:h,mouse:s,onClick:function(){o(!r)}}),Object(l.jsx)(f,{})]})]})})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,67)).then((function(t){var r=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),a(e),o(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),v()}},[[65,1,2]]]);
//# sourceMappingURL=main.ed539551.chunk.js.map