'use strict';

    import * as THREE from "../../node_modules/three/build/three.module.js"

    //import { render } from '../js/blueprint3d.js';

    import { STLLoader } from '../../node_modules/three/examples/jsm/loaders/STLLoader.js';


    var container, renderer;

    var camera, cameraTarget, scene;

    var blueprint3d = new BP3D.Blueprint3d();

    console.log(blueprint3d);

    init();
    animate();

    function init() {
        
        container = document.createElement( 'div' );
        document.body.appendChild( container );

        camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 );
        camera.position.set( 3, 0.15, 3 );

        cameraTarget = new THREE.Vector3( 0, - 0.25, 0 );

        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x72645b );
        scene.fog = new THREE.Fog( 0x72645b, 2, 15 );


        // Ground

        var plane = new THREE.Mesh(
            new THREE.PlaneBufferGeometry( 40, 40 ),
            new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
        );
        plane.rotation.x = - Math.PI / 2;
        plane.position.y = - 0.5;
        scene.add( plane );

        plane.receiveShadow = true;


        // Binary files

        // var material = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );
        // var loader = new STLLoader();
        // loader.load( 'test.STL', function ( geometry ) {
        //     var mesh = new THREE.Mesh( geometry, material );

        //     mesh.position.set( 0, - 0.0, - 0.0 );
        //     //mesh.rotation.set( - Math.PI / 2, 0, 0 );
        //     mesh.scale.set( 0.0001, 0.0001, 0.0001 );

        //     //mesh.castShadow = true;
        // //  mesh.receiveShadow = true;

        //     scene.add( mesh );

        // } );

        loader.load( 'test1.STL', function ( geometry ) {

            var mesh = new THREE.Mesh( geometry, material );

            mesh.position.set( 0, - 0.5, - 0.0 );
            //mesh.rotation.set( - Math.PI / 2, 0, 0 );
            mesh.scale.set( 0.0005, 0.0005, 0.0005 );

            //mesh.castShadow = true;
            //  mesh.receiveShadow = true;

            scene.add( mesh );

        } );

        // Lights

        scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

        addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
        addShadowedLight( 0.5, 1, - 1, 0xffaa00, 1 );
        // renderer

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.outputEncoding = THREE.sRGBEncoding;

        renderer.shadowMap.enabled = true;

        container.appendChild( renderer.domElement );

        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function addShadowedLight( x, y, z, color, intensity ) {

        var directionalLight = new THREE.DirectionalLight( color, intensity );
        directionalLight.position.set( x, y, z );
        scene.add( directionalLight );

        directionalLight.castShadow = true;

        var d = 1;
        directionalLight.shadow.camera.left = - d;
        directionalLight.shadow.camera.right = d;
        directionalLight.shadow.camera.top = d;
        directionalLight.shadow.camera.bottom = - d;

        directionalLight.shadow.camera.near = 1;
        directionalLight.shadow.camera.far = 4;

        directionalLight.shadow.bias = - 0.002;

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function animate() {

        requestAnimationFrame( animate );

        render();

    }

    function render() {

        var timer = Date.now() * 0.0005;

        camera.position.x = Math.cos( timer ) * 3;
        camera.position.z = Math.sin( timer ) * 3;

        camera.lookAt( cameraTarget );

        renderer.render( scene, camera );

    }
