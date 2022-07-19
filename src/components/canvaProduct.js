import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import '../assets/models/product/milk.glb'
import '../assets/models/product/milk.png'

export default function generateCanva(main){
    const scene = new THREE.Scene();
    const colorBackground = new THREE.Color("rgb(255, 253, 252)");
    scene.background=colorBackground


    // const directionalLight = new THREE.DirectionalLight( 0xe02bcb, 0.5 );
    // scene.add( directionalLight );

    const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight,1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( window.innerWidth-2, window.innerHeight/1.5 );
    let cube=''

    const texture = new THREE.TextureLoader().load( './assets/milk.png' );
    const material = new THREE.MeshBasicMaterial( { map: texture } );

    const loader = new GLTFLoader()
    loader.load('./assets/milk.glb',(gltf)=>{
        cube=gltf.scene.children[0]
        cube.material = material
        cube.position.x=-1
        cube.position.y=-1.9
        cube.position.z=-5.2
        scene.add( cube );
        console.log(cube)
    },(err)=>{
        console.log(err)
    })

    // const geometry = new THREE.BoxGeometry( 1, 1.5, 1 );
    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // const cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );
    
    camera.position.z = 5;

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