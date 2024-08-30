import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { useTheme } from 'next-themes';

const LandingScene = ({ setLoaded }) => {
  const { theme } = useTheme();
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);
  const earthMaterialRef = useRef(null);
  const managerRef = useRef(new THREE.LoadingManager());

  useEffect(() => {
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const manager = managerRef.current;
    manager.onLoad = () => {
      setLoaded(true);
      animate();
    };

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 3);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    if (window.innerWidth < 768) {
      renderer.setPixelRatio(Math.min(pixelRatio, 1));
    } else {
      renderer.setPixelRatio(pixelRatio);
    }
    rendererRef.current = renderer;

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const loader = new THREE.TextureLoader(manager);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.005);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, window.innerWidth < 768 ? 1.5 : 2.5);
    directionalLight.position.set(3, 0.5, -1);
    scene.add(directionalLight);

    const globeGroup = new THREE.Group();

    const bumpMap = loader.load('/Bump.jpg');
    const earthMap = loader.load('/AlbedoGrayscale.jpg');
    const lightMap = loader.load('/night_lights_modified.png');
    const oceanMap = loader.load('/Ocean.png');
    const cloudMap = loader.load('/Clouds.png');
    const starMap = loader.load('/star.png');

    const earthGeometry = new THREE.SphereGeometry(1, window.innerWidth < 768 ? 32 : 64, window.innerWidth < 768 ? 32 : 64);
    const earthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        map: { value: earthMap },
        bumpMap: { value: bumpMap },
        bumpScale: { value: 0.04 },
        emissiveMap: { value: lightMap },
        emissiveColor: { value: new THREE.Color(0x22C55E) },
        oceanMap: { value: oceanMap },
        lightDirection: { value: directionalLight.position.clone().normalize() },
        invertColors: { value: false },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        uniform sampler2D bumpMap;
        uniform sampler2D emissiveMap;
        uniform sampler2D oceanMap;
        uniform vec3 emissiveColor;
        uniform vec3 lightDirection;
        uniform bool invertColors;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vec3 texColor = texture2D(map, vUv).rgb;
          vec3 bump = texture2D(bumpMap, vUv).rgb;
          vec3 ocean = texture2D(oceanMap, vUv).rgb;
          
          float lightIntensity = dot(normalize(vNormal), lightDirection);
          lightIntensity = clamp(lightIntensity, 0.1, 1.0);
          
          float emissive = max(dot(normalize(vNormal), -lightDirection), 0.0);
          vec3 emissiveLight = emissive * texture2D(emissiveMap, vUv).rgb * emissiveColor * 1.75;

          vec3 dayColor = texColor * lightIntensity;
          vec3 nightColor = texColor * 0.2 + emissiveLight;

          vec3 finalColor = mix(nightColor, dayColor, lightIntensity);

          if (invertColors) {
            finalColor = mix(finalColor, vec3(1.0) - texColor, 1.0 - ocean.r);
          }

          finalColor += emissiveLight * step(0.001, emissiveLight.r + emissiveLight.g + emissiveLight.b);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });
    earthMaterialRef.current = earthMaterial;
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earth);

    const cloudGeometry = new THREE.SphereGeometry(1.005, window.innerWidth < 768 ? 32 : 64, window.innerWidth < 768 ? 32 : 64);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      alphaMap: cloudMap,
      transparent: true,
      opacity: 0.5,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    globeGroup.add(clouds);

    globeGroup.rotation.z = 23.4 * Math.PI / 180;
    scene.add(globeGroup);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const positionArray = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      let x, y, z, distance;

      do {
        x = THREE.MathUtils.randFloatSpread(2);
        y = THREE.MathUtils.randFloatSpread(2);
        z = THREE.MathUtils.randFloatSpread(2);
        distance = Math.sqrt(x * x + y * y + z * z);
      } while (distance < 0.5);

      const scale = THREE.MathUtils.randFloat(3, 10) / distance;

      positionArray[i * 3] = x * scale;
      positionArray[i * 3 + 1] = y * scale;
      positionArray[i * 3 + 2] = z * scale;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

    const starMaterial = new THREE.PointsMaterial({
      map: starMap,
      color: 'white',
      size: 0.015,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    renderer.compile(scene, camera);
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
      camera.position.lerp(new THREE.Vector3(0, 0.8, 1.5), 0.01);
      camera.lookAt(0, 0.5, 0);
      earth.rotation.y += 0.0005;
      clouds.rotation.y += 0.0006;
      stars.rotation.y += 0.000006;
      composer.render();
    };

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [setLoaded]);

  useEffect(() => {
    const backgroundColor = theme === 'dark' ? 0x0c0a09 : 0xffffff;
    if (rendererRef.current) {
      rendererRef.current.setClearColor(backgroundColor);
    }
    if (earthMaterialRef.current) {
      earthMaterialRef.current.uniforms.invertColors.value = theme === 'light';
    }
  }, [theme]);

  return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: { delay: 2, duration: 3 }}}
      >
          <div ref={mountRef} className="fixed top-0 left-0 w-fit overflow-hidden"/>
      </motion.div>
  )
};

export default LandingScene;