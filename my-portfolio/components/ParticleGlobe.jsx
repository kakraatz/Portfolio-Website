import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ParticleGlobe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let particleSystem, particlePositions, particles;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const globeRadius = 200;
    const particleCount = 175000; // Increase for more particles

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/Albedo.jpg', (texture) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = texture.image.width;
      canvas.height = texture.image.height;
      context.drawImage(texture.image, 0, 0);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

      particles = new THREE.BufferGeometry();
      particlePositions = new Float32Array(particleCount * 3);

      let particleIndex = 0;
      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = 2 * Math.PI * Math.random();

        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.sin(phi) * Math.sin(theta);
        const z = Math.cos(phi);

        const u = (0.5 + Math.atan2(z, x) / (2 * Math.PI)) * canvas.width;
        const v = (0.5 - Math.asin(y) / Math.PI) * canvas.height;

        const index = ((Math.floor(v) * canvas.width) + Math.floor(u)) * 4;

        if (imageData[index] > 32) { // Assuming white is land and black is water
          particlePositions[particleIndex * 3] = globeRadius * x;
          particlePositions[particleIndex * 3 + 1] = globeRadius * y;
          particlePositions[particleIndex * 3 + 2] = globeRadius * z;
          particleIndex++;
        }
      }

      particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

      const particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        sizeAttenuation: true
      });

      particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(particleSystem);

      if (intersects.length > 0) {
        const point = intersects[0].point;
        const index = intersects[0].index;

        gsap.to(point, {
          duration: 0.5,
          x: point.x * 1.2,
          y: point.y * 1.2,
          z: point.z * 1.2,
          onUpdate: () => {
            particlePositions[index * 3] = point.x;
            particlePositions[index * 3 + 1] = point.y;
            particlePositions[index * 3 + 2] = point.z;
            particles.attributes.position.needsUpdate = true;
          },
          onComplete: () => {
            gsap.to(point, {
              duration: 0.5,
              x: point.x / 1.2,
              y: point.y / 1.2,
              z: point.z / 1.2,
              onUpdate: () => {
                particlePositions[index * 3] = point.x;
                particlePositions[index * 3 + 1] = point.y;
                particlePositions[index * 3 + 2] = point.z;
                particles.attributes.position.needsUpdate = true;
              }
            });
          }
        });
      }
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      if (particleSystem) {
        particleSystem.rotation.y += 0.001;
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ParticleGlobe;