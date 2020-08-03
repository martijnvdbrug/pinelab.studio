import * as THREE from 'three';

console.log('delete', noise.perlin3(1, 2, 3))

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

// LIGHTS
//const light = new THREE.AmbientLight(0xfeada6);
const light = new THREE.PointLight(0xFFFFFF);
light.position.x = 0;
light.position.y = 10;
light.position.z = 0;
scene.add(light);
const light2 = new THREE.PointLight(0xFFFFFF);
light2.position.x = 0;
light2.position.y = -10;
light2.position.z = 0;
scene.add(light2);
const light3 = new THREE.PointLight(0xFFFFFF);
light3.position.x = 0;
light3.position.y = 0;
light3.position.z = 5;
scene.add(light3);

let speed = 0.001;
let chaos = 2;
const geometry = new THREE.SphereGeometry(1.5, 128, 128);
// const geometry = new THREE.SphereGeometry(1.5, 20, 20);
// const material = new THREE.MeshNormalMaterial();
// const material = new THREE.MeshPhongMaterial({color: 0xfeada6, flatShading: true});
const material = new THREE.MeshLambertMaterial({color: 0xfeada6});
// const material = new THREE.MeshStandardMaterial({color: 0xfeada6});
// const material = new THREE.MeshToonMaterial({color: 0xfeada6});
// const material = new THREE.MeshMatcapMaterial({color: 0xfeada6});
// const material = new THREE.MeshBasicMaterial({color: 0xfeada6, vertexColors: false});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// DEBUG
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
let grow = false
function update() {
    //go through vertices here and reposition them

    for (let i = 0; i < sphere.geometry.vertices.length; i++) {
        const p = sphere.geometry.vertices[i];
        const time = performance.now() * speed;
        //start loop
        if(grow) {
            p.add(p.clone().normalize().multiplyScalar(0.005 * noise.perlin3(p.x * chaos, p.y * chaos, p.z * chaos)));
        } else {
            p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * chaos + time, p.y * chaos, p.z * chaos));
        }
        // p.add(p.clone().normalize().multiplyScalar(0.1 * noise.perlin3(p.x * chaos, p.y * chaos, p.z * chaos)));
    }
    sphere.geometry.computeVertexNormals();
    // sphere.geometry.normalsNeedUpdate = true;
    sphere.geometry.verticesNeedUpdate = true;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    update();
}

$(document).on('click touchstart', function () {
    grow = true;
});

$(document).on('click touchend', function () {
    grow = false;
});

update();
animate();
