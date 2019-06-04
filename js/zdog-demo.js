// zdog-demo.js

// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  rotate: { y: Zdog.TAU/16 },
  zoom: 1.5,
  dragRotate: true,
});

var hatGroup = new Zdog.Group({
  addTo: illo,
  translate: { y: -120 }
});

let hatflap = new Zdog.Polygon({
	addTo: hatGroup,
	radius: 20,
	sides: 5,
	stroke: 10,
	color: '#efefef',
	fill: true,
});

let crossVertical = new Zdog.Rect({
  addTo: hatGroup,
  width: 5,
  height: 20,
  stroke: 5,
  color: '#FECDBC',
});

let crossHorizontal = new Zdog.Rect({
  addTo: hatGroup,
  width: 20,
  height: 5,
  stroke: 5,
  color: '#FECDBC',
});

// add circle
let head = new Zdog.Shape({
  addTo: illo,
  stroke: 200,
  color: '#DAB070',
});

let lefteye = new Zdog.Ellipse({
  addTo: head,
  diameter: 25,
  quarters: 2,
  stroke: 6,
  translate: { z: 80, y: -30, x: -40 },
  rotate: { z: Zdog.TAU/4, y: Zdog.TAU/16 },
  color: '#665D4F',
});

let righteye = new Zdog.Ellipse({
  addTo: head,
  diameter: 25,
  quarters: 2,
  stroke: 6,
  translate: { z: 80, y: -30, x: 40 },
  rotate: { z: Zdog.TAU/4, y: -Zdog.TAU/16 },
  color: '#665D4F',
});

// add right ear
let rightear = new Zdog.RoundedRect({
  addTo: head,
  width: 70,
  height: 120,
  cornerRadius: 30,
  translate: { x: 100, y: 30 },
  rotate: { y: Zdog.TAU/4 },
  stroke: 30,
  fill: true,
  color: '#C8A571',
});

// add left ear
let leftear = new Zdog.RoundedRect({
  addTo: head,
  width: 70,
  height: 120,
  cornerRadius: 30,
  translate: { x: -100, y: 30 },
  rotate: { y: Zdog.TAU/4 },
  stroke: 30,
  fill: true,
  color: '#C8A571',
});

// add nose
let nose = new Zdog.Shape({
  addTo: head,
  path: [ { z: 20}, {z: 10} ],
  translate: { z: 80, y: 30 },
  stroke: 100,
  color: '#C8A571',
});

let tip = new Zdog.Ellipse({
  addTo: nose,
  diameter: 20,
  quarters: 2,
  stroke: 20,
  translate: { z: 70 },
  rotate: { z: Zdog.TAU/4 },
  color: '#665D4F',
});

let rightlip = new Zdog.Ellipse({
  addTo: tip,
  diameter: 30,
  quarters: 1,
  stroke: 6,
  translate: { x: 20, y: -15 },
  rotate: { z: Zdog.TAU/4, y: -Zdog.TAU/8 },
  color: '#665D4F',
});

let leftlip = new Zdog.Ellipse({
  addTo: tip,
  diameter: 30,
  quarters: 1,
  stroke: 6,
  translate: { x: 20, y: 15 },
  rotate: { z: Zdog.TAU/32, y: -Zdog.TAU/8 },
  color: '#665D4F',
});

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();