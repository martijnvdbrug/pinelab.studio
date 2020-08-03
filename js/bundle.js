(function (THREE) {
    'use strict';

    console.log('jatoch');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});

    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    document.getElementById( 'canvasDiv' ).appendChild(renderer.domElement);


    camera.position.z = 5;

    // LIGHTS
    //const light = new AmbientLight(0xfeada6);
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


    const geometry = new THREE.SphereGeometry(5, 30, 30);
    // const material = new MeshLambertMaterial({color: 0xfeada6});
    const material = new THREE.MeshPhongMaterial({color: 0xfeada6, flatShading: true});
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // DEBUG
    /*const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);*/
    let grow = false;
    let speed = 0.0005;
    let chaos = 1;
    const increase = 0.06;

    function update() {
        if (grow && chaos < 5) {
            chaos += increase;
        } else if (!grow && chaos > 1) {
            chaos -= increase;
        }
        //go through vertices here and reposition them
        for (let i = 0; i < sphere.geometry.vertices.length; i++) {
            const p = sphere.geometry.vertices[i];
            const time = performance.now() * speed;
            //start loop
            p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * chaos + time, p.y * chaos, p.z * chaos));
        }
        sphere.geometry.computeVertexNormals();
        // sphere.geometry.normalsNeedUpdate = true;
        sphere.geometry.verticesNeedUpdate = true;
        console.log();
    }

    function animate() {
        // requestAnimationFrame(animate);
        renderer.render(scene, camera);
        update();
    }


    $(document).on('mousewheel', function (e) {
        grow = true;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {grow = false;},1000); // stop animation when scrolling stops
    });

    $(document).on('mousedown touchstart', function (e) {
        grow = true;
    });

    $(document).on('mouseup touchend', function (e) {
        grow = false;
    });

    update();
    setInterval( function () {
        requestAnimationFrame( animate );
    }, 1000 / 20 ); // limit FPS to 20 fps

}(THREE));
