import * as THREE from "three";

const canvas = document.querySelector("#hero-scene");
const host = canvas && canvas.parentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const smallScreen = window.matchMedia("(max-width: 700px)");

if (canvas && host) {
  try {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 30);
    camera.position.set(0, 0, 8.6);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !smallScreen.matches,
      powerPreference: "low-power"
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, smallScreen.matches ? 1 : 1.35));

    // Enhanced sculpture group with multiple layers
    const sculpture = new THREE.Group();
    scene.add(sculpture);

    // Core globe - larger and more detailed
    const globeGeometry = new THREE.IcosahedronGeometry(2.35, 2);
    const globe = new THREE.Mesh(
      globeGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x64e8e7,
        wireframe: true,
        transparent: true,
        opacity: 0.22
      })
    );
    sculpture.add(globe);

    // Glow orbit - subtle pulsing effect
    const glowGeometry = new THREE.TorusGeometry(2.8, 0.08, 8, 200);
    const glow = new THREE.Mesh(
      glowGeometry,
      new THREE.MeshBasicMaterial({ 
        color: 0x64e8e7,
        transparent: true,
        opacity: 0.12
      })
    );
    glow.rotation.set(1.2, 0.5, -0.4);
    sculpture.add(glow);

    // Accent nodes - brighter and more numerous
    const nodes = new THREE.Points(
      globeGeometry,
      new THREE.PointsMaterial({
        color: 0xd9f56d,
        size: smallScreen.matches ? 0.05 : 0.065,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.88
      })
    );
    sculpture.add(nodes);

    // Secondary orbit with different speed
    const orbitA = new THREE.Mesh(
      new THREE.TorusGeometry(2.65, 0.015, 6, 200),
      new THREE.MeshBasicMaterial({ color: 0x64e8e7, transparent: true, opacity: 0.7 })
    );
    orbitA.rotation.set(1.18, 0.44, -0.32);
    sculpture.add(orbitA);

    // Secondary orbit B
    const orbitB = new THREE.Mesh(
      new THREE.TorusGeometry(2.88, 0.009, 5, 200),
      new THREE.MeshBasicMaterial({ color: 0xd9f56d, transparent: true, opacity: 0.5 })
    );
    orbitB.rotation.set(0.3, 1.3, 0.8);
    sculpture.add(orbitB);

    // Dust particles - more dense
    const dustCount = smallScreen.matches ? 54 : 72;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i += 1) {
      const radius = 2.8 + Math.random() * 1.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      dustPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      dustPositions[i * 3 + 1] = radius * Math.cos(phi);
      dustPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    const dust = new THREE.Points(
      dustGeometry,
      new THREE.PointsMaterial({
        color: 0xbdebe1,
        size: smallScreen.matches ? 0.025 : 0.03,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.6
      })
    );
    sculpture.add(dust);

    // Ring system - elegant addition
    const ringCount = 3;
    for (let r = 0; r < ringCount; r++) {
      const ringThickness = 0.04 + r * 0.02;
      const ringGeometry = new THREE.TorusGeometry(3.1 - r * 0.3, ringThickness, 8, 150);
      const ring = new THREE.Mesh(
        ringGeometry,
        new THREE.MeshBasicMaterial({ 
          color: [0x64e8e7, 0xd9f56d, 0x64e8e7][r],
          transparent: true,
          opacity: [0.4, 0.3, 0.35][r]
        })
      );
      ring.rotation.x = (Math.PI / 2) * (r + 1);
      ring.rotation.z = r * 0.3;
      sculpture.add(ring);
    }

    // Interactive pointer tracking
    let visible = true;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let animationPhase = 0;

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      renderer.setSize(bounds.width, bounds.height, false);
      camera.aspect = bounds.width / bounds.height;
      camera.updateProjectionMatrix();
    };

    const draw = (time = 0) => {
      frame = 0;
      if (!visible || document.hidden) return;
      
      targetX += (pointerX - targetX) * 0.04;
      targetY += (pointerY - targetY) * 0.04;
      
      if (!reducedMotion.matches) {
        // Multi-layer rotation for depth
        sculpture.rotation.y = time * 0.00012 + targetX * 0.2;
        sculpture.rotation.x = Math.sin(time * 0.0002) * 0.1 + Math.sin(time * 0.0001) * 0.05 + targetY * 0.12;
        sculpture.rotation.z = Math.cos(time * 0.00018) * 0.05;
        
        // Orbit animations at different speeds
        orbitA.rotation.z += 0.001;
        orbitB.rotation.y -= 0.0008;
        
        // Glow pulse
        glow.scale.set(1 + Math.sin(time * 0.002) * 0.03, 1, 1);
        
        // Ring subtle rotation
        sculpture.children.forEach((child, i) => {
          if (child.isMesh && child.geometry.type === 'TorusGeometry') {
            child.rotation.z += 0.0005 * (i + 1);
          }
        });
      }
      
      renderer.render(scene, camera);
      if (!reducedMotion.matches) frame = window.requestAnimationFrame(draw);
    };

    const start = () => {
      if (!frame) frame = window.requestAnimationFrame(draw);
    };
    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    new ResizeObserver(resize).observe(host);
    resize();

    // Enhanced IntersectionObserver
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          visible = entry.isIntersecting;
          if (visible) start();
          else stop();
        });
      }).observe(host);
    }

    // Pointer interactions
    host.addEventListener("pointermove", (event) => {
      if (reducedMotion.matches) return;
      const bounds = host.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    }, { passive: true });
    host.addEventListener("pointerleave", () => { pointerX = 0; pointerY = 0; }, { passive: true });
    
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else if (visible && !reducedMotion.matches) start();
      else if (visible) draw();
    });
    
    reducedMotion.addEventListener("change", () => {
      if (reducedMotion.matches) {
        stop();
        draw();
      } else if (visible && !document.hidden) {
        start();
      }
    });

    // Start animation
    if (reducedMotion.matches) draw();
    else start();
    
  } catch (e) {
    // The CSS orbit artwork remains visible if WebGL is unavailable.
  }
}