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

    const sculpture = new THREE.Group();
    scene.add(sculpture);

    const globeGeometry = new THREE.IcosahedronGeometry(2.12, 2);
    const globe = new THREE.Mesh(
      globeGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x64e8e7,
        wireframe: true,
        transparent: true,
        opacity: 0.24
      })
    );
    sculpture.add(globe);

    const nodes = new THREE.Points(
      globeGeometry,
      new THREE.PointsMaterial({
        color: 0xd9f56d,
        size: smallScreen.matches ? 0.045 : 0.052,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.82
      })
    );
    sculpture.add(nodes);

    const orbitA = new THREE.Mesh(
      new THREE.TorusGeometry(2.55, 0.012, 5, 180),
      new THREE.MeshBasicMaterial({ color: 0x64e8e7, transparent: true, opacity: 0.7 })
    );
    orbitA.rotation.set(1.08, 0.42, -0.3);
    sculpture.add(orbitA);

    const orbitB = new THREE.Mesh(
      new THREE.TorusGeometry(2.76, 0.008, 4, 180),
      new THREE.MeshBasicMaterial({ color: 0xd9f56d, transparent: true, opacity: 0.48 })
    );
    orbitB.rotation.set(0.25, 1.24, 0.72);
    sculpture.add(orbitB);

    const dustPositions = new Float32Array(72 * 3);
    for (let i = 0; i < 72; i += 1) {
      const radius = 2.65 + Math.random() * 0.78;
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
        size: 0.022,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.54
      })
    );
    sculpture.add(dust);

    let visible = true;
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      renderer.setSize(bounds.width, bounds.height, false);
      camera.aspect = bounds.width / bounds.height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    const draw = (time = 0) => {
      frame = 0;
      if (!visible || document.hidden) return;
      targetX += (pointerX - targetX) * 0.035;
      targetY += (pointerY - targetY) * 0.035;
      if (!reducedMotion.matches) {
        sculpture.rotation.y = time * 0.00009 + targetX * 0.16;
        sculpture.rotation.x = Math.sin(time * 0.00016) * 0.075 + targetY * 0.1;
        orbitA.rotation.z += 0.0008;
        orbitB.rotation.y -= 0.00045;
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

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        if (visible) start();
        else stop();
      }).observe(host);
    }

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

    if (reducedMotion.matches) draw();
    else start();
  } catch {
    // The CSS orbit artwork remains visible if WebGL is unavailable.
  }
}
