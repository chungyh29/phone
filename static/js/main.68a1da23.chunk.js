(this["webpackJsonpreact-three-iphone"]=this["webpackJsonpreact-three-iphone"]||[]).push([[0],{56:function(e,t,r){},57:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var a=r(1),o=r.n(a),i=r(51),s=r.n(i),m=(r(56),r(11)),n=(r(57),r(2)),c=r(16),j=r.p+"static/media/floor_wood.7277e788.jpg",l=r(4),g=function(e){var t=e.rot,r=e.pos,a=Object(c.c)(n.TextureLoader,j);a&&(a.wrapS=n.RepeatWrapping,a.wrapT=n.RepeatWrapping,a.repeat.set(.2,3.5));var o=Object(c.e)().scene,i=new n.Color("rgb(0,162,232)");return o.background=i,Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("mesh",{rotation:t,position:r,children:[Object(l.jsx)("planeGeometry",{args:[65,30]}),Object(l.jsx)("meshStandardMaterial",{map:a})]})})};g.defaultProps={rot:[-Math.PI/2,0,0],pos:[0,0,0]};var p=g,h=r(14),b=r(29),u=r(28),y=r(8),_=r.p+"static/media/cutePug.52dfe84a.glb";function O(e){var t=Object(a.useRef)(),r=Object(b.a)(_),o=r.nodes,i=r.materials;return Object(l.jsx)("group",Object(y.a)(Object(y.a)({ref:t},e),{},{dispose:null,children:Object(l.jsxs)("group",{rotation:[-Math.PI/2,0,0],children:[Object(l.jsx)("mesh",{geometry:o.Mesh_1.geometry,material:i.material_13}),Object(l.jsx)("mesh",{geometry:o.Mesh_2.geometry,material:i.material_12}),Object(l.jsx)("mesh",{geometry:o.Mesh_3.geometry,material:i.material_11}),Object(l.jsx)("mesh",{geometry:o.Mesh_4.geometry,material:i.material_10}),Object(l.jsx)("mesh",{geometry:o.Mesh_5.geometry,material:i.material_9}),Object(l.jsx)("mesh",{geometry:o.Mesh_6.geometry,material:i.material_8}),Object(l.jsx)("mesh",{geometry:o.Mesh_7.geometry,material:i.material_7}),Object(l.jsx)("mesh",{geometry:o.Mesh_8.geometry,material:i.material_6}),Object(l.jsx)("mesh",{geometry:o.Mesh_9.geometry,material:i.material_5}),Object(l.jsx)("mesh",{geometry:o.Mesh_10.geometry,material:o.Mesh_10.material}),Object(l.jsx)("mesh",{geometry:o.Mesh_11.geometry,material:o.Mesh_11.material}),Object(l.jsx)("mesh",{geometry:o.Mesh_12.geometry,material:i.defaultMat_0}),Object(l.jsx)("mesh",{geometry:o.Mesh_13.geometry,material:i.defaultMat}),Object(l.jsx)("mesh",{geometry:o.Mesh_14.geometry,material:i.material_3}),Object(l.jsx)("mesh",{geometry:o.Mesh_15.geometry,material:i.material_2}),Object(l.jsx)("mesh",{geometry:o.Mesh_16.geometry,material:i.material_1}),Object(l.jsx)("mesh",{geometry:o.Mesh_17.geometry,material:i.material_0}),Object(l.jsx)("mesh",{geometry:o.Mesh_0.geometry,material:i.material_14})]})}))}b.a.preload(_);var x=function(e,t){var r=0,a=window.innerWidth;return e<=a/2&&(r=t*((a/2-e)/(a/2)*100)/100*-1),e>a/2&&(r=t*((e-a/2)/(a/2)*100)/100),{x:r}},d=r.p+"static/media/iphone.5f8062a5.glb";function f(e){var t=e.mouse,r=Object(h.a)(e,["mouse"]),o=Object(a.useRef)(),i=Object(a.useRef)(),s=Object(a.useRef)(),j=Object(a.useState)(!1),g=Object(m.a)(j,2),p=g[0],y=g[1],_=Object(a.useState)(!1),f=Object(m.a)(_,2),M=f[0],C=f[1],v=Object(u.useSpring)({from:{emissiveVal:0,opacityVal:0},to:{emissiveVal:p?16711680:0,opacityVal:p?0:.4},loop:{reverse:!0}}),P=v.emissiveVal,E=v.opacityVal,R=Object(b.a)(d),I=R.nodes,S=R.materials,T=Object(c.e)(),w=T.scene,k=T.gl,B=Object(a.useMemo)((function(){return[new n.WebGLRenderTarget(90,180,{format:n.RGBFormat,stencilBuffer:!1})]}),[]),F=Object(m.a)(B,1)[0];Object(a.useEffect)((function(){o.current.updateProjectionMatrix()}),[]),Object(a.useEffect)((function(){var e;if(p)return e=setTimeout((function(){i.current.visible=p}),500),function(){return clearTimeout(e)};i.current.visible=p}),[p]),Object(a.useEffect)((function(){document.body.style.cursor=M?"pointer":"auto"}));return Object(c.b)((function(){k.setRenderTarget(F),k.render(w,o.current),k.setRenderTarget(null),p&&function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:40,a=x(e.current.x,r);t.rotation.yD=n.MathUtils.lerp(t.rotation.yD||0,a.x,.1),t.rotation.y=n.Math.degToRad(t.rotation.yD)-.7}(t,i.current)})),Object(l.jsxs)(u.a.group,{ref:s,dispose:null,position:r.pos,rotation:r.rot,onClick:function(e){e.stopPropagation(),y(!p),r.onClick()},onPointerOver:function(){return C(!0)},onPointerOut:function(){return C(!1)},children:[Object(l.jsx)("perspectiveCamera",{fov:80,aspect:.5,position:[.45,.9,-.1],near:.5,far:25,ref:o}),Object(l.jsx)("object3D",{ref:i,position:[.2,1,.22],scale:[.3,.3,.3],rotation:[Math.PI/2,-.7,0],children:Object(l.jsx)(O,{})}),Object(l.jsxs)("group",{position:[.1,1,-.08],rotation:[Math.PI/2,0,0],scale:[.01,.01,.01],children:[Object(l.jsxs)("group",{position:[24.8,-5.5,-98.56],children:[Object(l.jsx)("mesh",{geometry:I.Cube001.geometry,material:I.Cube001.material}),Object(l.jsxs)("mesh",{position:[2.5,14.8,98.5],rotation:[-Math.PI/2,0,0],children:[Object(l.jsx)("planeBufferGeometry",{args:[90,180],attach:"geometry"}),Object(l.jsx)("meshStandardMaterial",{map:F.texture,attach:"material",opacity:.9,metalness:.6,roughness:0})]}),Object(l.jsxs)("mesh",{position:[2.5,8,98],rotation:[-Math.PI/2,0,0],children:[Object(l.jsx)("planeBufferGeometry",{args:[130,250],attach:"geometry"}),Object(l.jsx)(u.a.meshStandardMaterial,{opacity:E,transparent:!0,emissive:P})]})]}),Object(l.jsx)("group",{position:[-113.54,2.64,124.1],children:Object(l.jsxs)("group",{position:[0,5.22,0],children:[Object(l.jsx)("mesh",{geometry:I.Mesh040.geometry,material:I.Mesh040.material}),Object(l.jsx)("mesh",{geometry:I.Mesh040_1.geometry,material:I.Mesh040_1.material}),Object(l.jsx)("mesh",{geometry:I.Mesh040_2.geometry,material:S["Mat.009"]})]})}),Object(l.jsxs)("group",{position:[18.54,2.64,114.47],children:[Object(l.jsx)("mesh",{geometry:I.Cylinder_12_2.geometry,material:I.Cylinder_12_2.material,position:[-.56,-1.27,-2.81]}),Object(l.jsx)("mesh",{geometry:I.Extrude_5_3.geometry,material:I.Extrude_5_3.material,position:[-132.08,0,9.63],children:Object(l.jsx)("mesh",{geometry:I.Cap_2_7.geometry,material:I.Cap_2_7.material,position:[131.55,-1.24,-11.18]})})]}),Object(l.jsxs)("group",{position:[39.09,2.64,114.47],children:[Object(l.jsx)("mesh",{geometry:I.Cylinder_12.geometry,material:I.Cylinder_12.material,position:[-.56,-1.27,-2.81]}),Object(l.jsx)("mesh",{geometry:I.Extrude_5_2.geometry,material:I.Extrude_5_2.material,position:[-132.08,0,9.63],children:Object(l.jsx)("mesh",{geometry:I.Cap_2_6.geometry,material:I.Cap_2_6.material,position:[131.55,-1.24,-11.18]})})]}),Object(l.jsxs)("group",{position:[65.66,-9.77,-83.68],rotation:[0,0,-.06],children:[Object(l.jsxs)("mesh",{geometry:I.Extrude.geometry,material:S["Mat.3"],position:[-.68,3.41,8.74],children:[Object(l.jsx)("mesh",{geometry:I.Cap_1_3.geometry,material:S["Mat.4"],position:[.28,.61,1.54],rotation:[0,0,-3.09]}),Object(l.jsx)("mesh",{geometry:I.Cap_2_3.geometry,material:S["Mat.5"],position:[.28,.61,1.54],rotation:[0,0,-3.09]})]}),Object(l.jsxs)("mesh",{geometry:I.Extrude_1.geometry,material:S["Mat.007"],position:[-27.18,15.8,-20.85],children:[Object(l.jsx)("mesh",{geometry:I.Cap_1_4.geometry,material:S["Mat.7"],position:[.18,.38,1.95],rotation:[0,0,-3.09]}),Object(l.jsx)("mesh",{geometry:I.Cap_2_4.geometry,material:S["Mat.8"],position:[.18,.38,1.95],rotation:[0,0,-3.09]})]}),Object(l.jsxs)("mesh",{geometry:I.Extrude_5.geometry,material:S.Mat,position:[-.68,3.41,-14.33],children:[Object(l.jsx)("mesh",{geometry:I.Cap_1_2.geometry,material:S["Mat.1"],position:[.28,.61,3.11],rotation:[0,0,-3.09]}),Object(l.jsx)("mesh",{geometry:I.Cap_2_2.geometry,material:S["Mat.2"],position:[.28,.61,3.11],rotation:[0,0,-3.09]})]}),Object(l.jsxs)("mesh",{geometry:I.Extrude_7.geometry,material:I.Extrude_7.material,position:[18.48,-67.19,215.71],children:[Object(l.jsx)("mesh",{geometry:I.Cap_1.geometry,material:I.Cap_1.material,position:[-19.02,70.3,-216.12],rotation:[0,0,-3.07]}),Object(l.jsx)("mesh",{geometry:I.Cap_2.geometry,material:I.Cap_2.material,position:[-19.02,70.3,-216.12],rotation:[0,0,-3.07]})]})]}),Object(l.jsxs)("mesh",{geometry:I.Extrude_1_2.geometry,material:I.Extrude_1_2.material,position:[-19.17,2.64,-34.69],children:[Object(l.jsx)("mesh",{geometry:I.Cap_2_10.geometry,material:I.Cap_2_10.material,position:[-8.06,-1.55,-1.87]}),Object(l.jsx)("mesh",{geometry:I.Rounding_4.geometry,material:I.Rounding_4.material,position:[-8.06,-1.55,-1.87],children:Object(l.jsx)("mesh",{geometry:I.Cap_1_10.geometry,material:I.Cap_1_10.material})})]}),Object(l.jsxs)("mesh",{geometry:I.Extrude_2.geometry,material:I.Extrude_2.material,position:[65.58,-5.83,-82.95],children:[Object(l.jsx)("mesh",{geometry:I.Cap_1_5.geometry,material:I.Cap_1_5.material,position:[-.37,1.22,-1.19]}),Object(l.jsx)("mesh",{geometry:I.Rounding.geometry,material:I.Rounding.material,position:[-.37,1.22,-1.19],children:Object(l.jsx)("mesh",{geometry:I.Cap_2_5.geometry,material:I.Cap_2_5.material})})]}),Object(l.jsxs)("mesh",{geometry:I.Extrude_2_2.geometry,material:I.Extrude_2_2.material,position:[-19.17,2.64,-55.64],children:[Object(l.jsx)("mesh",{geometry:I.Cap_2_11.geometry,material:I.Cap_2_11.material,position:[-8.06,-1.55,-1.87]}),Object(l.jsx)("mesh",{geometry:I.Rounding_5.geometry,material:I.Rounding_5.material,position:[-8.06,-1.55,-1.87],children:Object(l.jsx)("mesh",{geometry:I.Cap_1_11.geometry,material:I.Cap_1_11.material})})]}),Object(l.jsxs)("mesh",{geometry:I.Extrude_3.geometry,material:I.Extrude_3.material,position:[-24.69,2.64,-75.38],children:[Object(l.jsx)("mesh",{geometry:I.Cap_2_9.geometry,material:I.Cap_2_9.material,position:[-2.8,-2.21,-1.87]}),Object(l.jsx)("mesh",{geometry:I.Rounding_3.geometry,material:I.Rounding_3.material,position:[-2.8,-2.21,-1.87],children:Object(l.jsx)("mesh",{geometry:I.Cap_1_9.geometry,material:I.Cap_1_9.material})})]}),Object(l.jsxs)("mesh",{geometry:I.Extrude_4.geometry,material:I.Extrude_4.material,position:[76.44,2.64,-46.24],children:[Object(l.jsx)("mesh",{geometry:I.Cap_1_8.geometry,material:I.Cap_1_8.material,position:[-10.58,-1.55,-1.87]}),Object(l.jsx)("mesh",{geometry:I.Rounding_2.geometry,material:I.Rounding_2.material,position:[-10.58,-1.55,-1.87],children:Object(l.jsx)("mesh",{geometry:I.Cap_2_8.geometry,material:I.Cap_2_8.material})})]}),Object(l.jsx)("mesh",{geometry:I.Sweep.geometry,material:I.Sweep.material,position:[-113.54,2.64,124.1]})]})]})}b.a.preload(d);var M=r.p+"static/media/wood.9936b523.jpg",C=r.p+"static/media/ar_pets.dd892f3c.svg",v=function(e){var t=e.pos,r=e.textureMaterial,a=e.rot;return Object(l.jsx)("mesh",{material:r,position:t,rotation:a,children:Object(l.jsx)("cylinderBufferGeometry",{args:[.3,.2,6,12]})})},P=function(e){var t=1.5,r=10,o=Object(c.c)(n.TextureLoader,M);o&&(o.wrapS=n.RepeatWrapping,o.wrapT=n.RepeatWrapping,o.offset.set(-.5,0),o.repeat.set(.1,.1));var i=Object(c.c)(n.TextureLoader,C),s=Object(c.d)(),m=Object(a.useMemo)((function(){var e=new n.Shape;return e.moveTo(1,0),e.lineTo(9,0),e.absarc(9,1,1,3*Math.PI/2,0,!1),e.lineTo(r,9),e.absarc(9,9,1,0,Math.PI/2,!1),e.lineTo(1,r),e.absarc(1,9,1,Math.PI/2,Math.PI,!1),e.lineTo(0,1),e.absarc(1,1,1,Math.PI,1.5*Math.PI,!1),e}),[1,r]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("group",{position:e.pos,rotation:e.rot,children:[Object(l.jsxs)("mesh",{children:[Object(l.jsx)("extrudeBufferGeometry",{attach:"geometry",args:[m,{bevelEnabled:!1,steps:2,depth:.5}]}),Object(l.jsx)("meshStandardMaterial",{attach:"material",ref:s,map:o})]}),[[t,t,-3],[r-t,t,-3],[r-t,r-t,-3],[t,r-t,-3]].map((function(e,t){return Object(l.jsx)(v,{pos:e,rot:[Math.PI/2,0,0],textureMaterial:s.current},t)})),Object(l.jsxs)("mesh",{position:[t,t,.501],children:[Object(l.jsx)("planeGeometry",{args:[.6,.6]}),Object(l.jsx)("meshStandardMaterial",{map:i})]})]})})};P.defaultProps={pos:[0,0,0],rot:[-Math.PI/2,0,0]};var E=P;var R=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),r=t[0],o=t[1],i=Object(a.useRef)({x:0,y:0}),s=Object(u.useSpring)({position:r?[1.05,1.5,-.5]:[-1,3,0],rotation:r?[-Math.PI/2,0,0]:[0,0,0]}),j=s.position,g=s.rotation,h=function(){var e=new n.Vector3;return Object(c.b)((function(t){t.camera.fov=n.MathUtils.lerp(t.camera.fov,r?30:40,.03),t.camera.position.lerp(e.set(r?-.5:-1,r?3:4.5,r?5:15),.03),t.camera.lookAt(e.set(r?.8:2,r?1.5:0,0)),t.camera.updateProjectionMatrix()})),null};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(c.a,{camera:{position:[-1,4.5,15],fov:40},onMouseMove:function(e){return i.current=function(e){return{x:e.clientX,y:e.clientY}}(e)},children:[Object(l.jsx)(h,{}),Object(l.jsx)("ambientLight",{intensity:.3}),Object(l.jsx)("pointLight",{intensity:.5,position:[1.5,3,5]}),Object(l.jsxs)(a.Suspense,{fallback:"loading",children:[Object(l.jsx)(p,{pos:[5,-6,-5],rot:[-Math.PI/2,0,0]}),Object(l.jsx)(f,{pos:j,rot:g,mouse:i,onClick:function(){o(!r)}}),Object(l.jsx)(E,{})]})]})})},I=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,66)).then((function(t){var r=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),a(e),o(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root")),I()}},[[65,1,2]]]);
//# sourceMappingURL=main.68a1da23.chunk.js.map