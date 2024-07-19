import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { useTheme } from 'next-themes';

const LandingScene = () => {
  const mountRef = useRef(null);
  const { theme } = useTheme();
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1.5;
    camera.position.y = 0.8;
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.5;
    controls.enableZoom = false;
    controls.rotateSpeed = 0.3;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.01);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 0.5, -1);
    scene.add(directionalLight);

    const globeGroup = new THREE.Group();
    globeGroup.rotation.z = 23.4 * Math.PI / 180;
    scene.add(globeGroup);

    const loader = new THREE.TextureLoader();
    const bumpMap = loader.load('/Bump.jpg');
    const earthMap = loader.load('/AlbedoGrayscale.jpg');
    const lightMap = loader.load('/night_lights_modified.png');
    const oceanMap = loader.load('/Ocean.png');
    const cloudMap = loader.load('/Clouds.png');

    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthMap,
      bumpMap: bumpMap,
      bumpScale: 0.04,
      roughnessMap: oceanMap,
      metalnessMap: oceanMap,
      metalness: 0.1,
      emissiveMap: lightMap,
      emissive: new THREE.Color(0xffffff),
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earth);

    const cloudGeometry = new THREE.SphereGeometry(1.005, 64, 64);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      alphaMap: cloudMap,
      transparent: true,
      opacity: 0.5,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    globeGroup.add(clouds);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    composerRef.current = composer;

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      earth.rotation.y += 0.0005;
      clouds.rotation.y += 0.0006;
      composer.render();
    };

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const backgroundColor = theme === 'dark' ? 0x0c0a09 : 0xffffff;
    if (rendererRef.current) {
      rendererRef.current.setClearColor(backgroundColor);
    }
  }, [theme]);

  return <div ref={mountRef} className={'fixed top-0 left-0 w-fit'} />;
};

export default LandingScene;
