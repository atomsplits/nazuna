//@ts-nocheck
import * as THREE from "three";
import { OrbitControls, TeapotGeometry } from "three/examples/jsm/Addons.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

let width = window.innerWidth;
let height = window.innerHeight;

let aspect = width / height;

let container, stats;
let camera: THREE.PerspectiveCamera, scene, renderer: THREE.WebGLRenderer, mesh;
let cameraRig, activeCamera, activeHelper;
let cameraPerspective: THREE.PerspectiveCamera;
let cameraPerspectiveHelper: THREE.CameraHelper;

container = document.createElement("div");
document.body.appendChild(container);

scene = new THREE.Scene();

cameraPerspective = new THREE.PerspectiveCamera(120, aspect, 5, 2000);
cameraPerspectiveHelper = new THREE.CameraHelper(cameraPerspective);
cameraPerspective.position.z = 100;

//scene.add(cameraPerspectiveHelper);

activeCamera = cameraPerspective;
activeHelper = cameraPerspectiveHelper;

cameraRig = new THREE.Group();

cameraRig.add(cameraPerspective);

scene.add(cameraRig);

mesh = new THREE.Mesh(
  new TeapotGeometry(50, 15, 25, 25),
  new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true }),
);
scene.add(mesh);

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 10000; i++) {
  vertices.push(THREE.MathUtils.randFloatSpread(2000));
  vertices.push(THREE.MathUtils.randFloatSpread(2000));
  vertices.push(THREE.MathUtils.randFloatSpread(2000));
}

geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(vertices, 3),
);
const particles = new THREE.Points(
  geometry,
  new THREE.PointsMaterial({ color: 0x888888 }),
);
scene.add(particles);

// renderer stuff

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);
container.appendChild(renderer.domElement);

// orbital controls
const controls = new OrbitControls(activeCamera, renderer.domElement);
controls.enablePan = true;
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// event listeners

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  aspect = width / height;

  renderer.setSize(width, height);
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
}

function animate() {
  controls.update();
  render();
}

function render() {
  mesh.rotation.x += 0.002;
  mesh.rotation.y += 0.001;

  cameraPerspective.updateProjectionMatrix();

  renderer.setClearColor(0x000000, 1);
  renderer.setViewport(0, 0, width, height);
  renderer.render(scene, activeCamera);

  /*
  renderer.setClearColor(0x111111, 1);
  renderer.setScissor(width / 2, 0, width / 2, height);
  renderer.setViewport(width / 2, 0, width / 2, height);
  renderer.render(scene, camera);
  */
}
