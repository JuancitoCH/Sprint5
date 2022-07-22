import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import '../assets/models/product/milok02v.gltf'
import '../assets/models/product/millk Base Color.png'
import '../assets/models/product/milok02v.bin'

export default function generateCanva(main){
    const scene = new THREE.Scene();
    const loader = new GLTFLoader()
    const camera = new THREE.PerspectiveCamera( 40,  (window.innerWidth-2)/ (window.innerHeight/1.5),1, 100 );
    camera.position.z = 5;

    const colorBackground = new THREE.Color("rgb(70, 54, 107)");
    scene.background=colorBackground

    // const light = new THREE.AmbientLight( 0xf20034,20 ); // soft white light
    // scene.add( light );

    const light = new THREE.DirectionalLight( 0xf20034 );
    const helper = new THREE.DirectionalLightHelper( light, 5 );
    scene.add( helper );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth-2, window.innerHeight/1.5 );
    renderer.shadowMap.enabled = true
    let cube=''

    const texture = new THREE.TextureLoader().load( './assets/millk Base Color.png' );
    const material = new THREE.MeshBasicMaterial( { map: texture } );
    material.map.flipY=false
    
    
    loader.load('./assets/milok02v.gltf',(gltf)=>{
        cube=gltf.scene.children[0]
        cube.material = material
        console.log(cube.material)
        cube.position.set(-0.5,-1.4,-5.2)

        scene.add( cube );
        // console.log(cube)
        
    },(err)=>{
        console.log(err)
    })

    function animate() {
        requestAnimationFrame( animate );
        try{

            if(window.scrollY/500 > cube.rotation.x ){
                cube.rotation.x += 0.01;
                cube.rotation.y +=0.01;
            }
            else if(cube.rotation.x<=0 ){
                cube.rotation.x += 0;
                cube.rotation.y +=0;
            }
            else if (cube.rotation.x>window.scrollY/500+0.01 ) {
                cube.rotation.x -= 0.05;
                cube.rotation.y -=0.05;
            }
        }
        catch{

        }
        renderer.render( scene, camera );
    };

    animate();

    main.appendChild( renderer.domElement );
}
// window.onscroll=()=>{
//     console.log(window.scrollY)
//     console.log(window.innerHeight)
// }