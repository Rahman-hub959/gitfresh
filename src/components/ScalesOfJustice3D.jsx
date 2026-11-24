import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Scale, Sparkles, BookOpen } from 'lucide-react';

export default function ScalesOfJustice3D({ className = "", isDark = false, inCreamBox = false }) {
  const mountRef = useRef(null);
  const [tiltState, setTiltState] = useState('balanced');
  const [autoRotate, setAutoRotate] = useState(true);
  
  const animControlsRef = useRef({
    targetTilt: 0,
    currentTilt: 0,
    mouseTiltDelta: 0,
    autoRotate: true,
    userRotationY: 0,
    targetRotationY: 0,
    bookHover: 0
  });

  useEffect(() => {
    animControlsRef.current.autoRotate = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.3, 7.8);
    camera.lookAt(0, 0.35, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = inCreamBox ? 1.35 : (isDark ? 1.3 : 1.45);
    container.appendChild(renderer.domElement);

    // --- PBR Materials ---
    // Metallic Polished Gold (Court Quality)
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xdeb841,
      metalness: 0.92,
      roughness: 0.18,
    });

    // Bright Polished Brass
    const polishedBrassMaterial = new THREE.MeshStandardMaterial({
      color: 0xf3d274,
      metalness: 0.95,
      roughness: 0.12,
    });

    // Dark Marble / Polished Mahogany Base Plinth
    const plinthBaseMaterial = new THREE.MeshStandardMaterial({
      color: inCreamBox ? 0x1a120c : (isDark ? 0x141822 : 0x241614),
      metalness: 0.5,
      roughness: 0.35,
    });

    // Suspension braided cords
    const chainMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.88,
      roughness: 0.25,
    });

    // Parchment paper for books & scrolls
    const paperMaterial = new THREE.MeshStandardMaterial({
      color: 0xfaf4e8,
      roughness: 0.85,
      metalness: 0.05,
    });

    // Leather Covers for 3D Books
    const leatherRedMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b261b, // Terracotta Maroon (MBA / Corporate)
      roughness: 0.55,
      metalness: 0.15,
    });

    const leatherBlueMaterial = new THREE.MeshStandardMaterial({
      color: 0x182c4d, // Deep Royal Navy (Constitution & LL.B./LL.M.)
      roughness: 0.55,
      metalness: 0.15,
    });

    const leatherGreenMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f4733, // Scientific Emerald (B.Sc. Forensic / Analytical)
      roughness: 0.55,
      metalness: 0.15,
    });

    const silkRibbonMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.3,
      metalness: 0.4,
    });

    // Master Group
    const scalesMasterGroup = new THREE.Group();
    scalesMasterGroup.position.y = -1.25;
    scene.add(scalesMasterGroup);

    // --- 1. PEDESTAL & COURT PLINTH ---
    // Bottom stepped dark plinth
    const baseBottomGeo = new THREE.CylinderGeometry(1.75, 1.9, 0.22, 48);
    const baseBottom = new THREE.Mesh(baseBottomGeo, plinthBaseMaterial);
    baseBottom.position.y = 0.11;
    scalesMasterGroup.add(baseBottom);

    // Beveled gold trim collar
    const baseGoldTrimGeo = new THREE.TorusGeometry(1.76, 0.045, 16, 48);
    const baseGoldTrim = new THREE.Mesh(baseGoldTrimGeo, goldMaterial);
    baseGoldTrim.rotation.x = Math.PI / 2;
    baseGoldTrim.position.y = 0.22;
    scalesMasterGroup.add(baseGoldTrim);

    // Tier 2 plinth
    const baseMidGeo = new THREE.CylinderGeometry(1.4, 1.55, 0.22, 48);
    const baseMid = new THREE.Mesh(baseMidGeo, goldMaterial);
    baseMid.position.y = 0.33;
    scalesMasterGroup.add(baseMid);

    // Tier 3 plinth
    const baseTopGeo = new THREE.CylinderGeometry(0.85, 1.2, 0.18, 48);
    const baseTop = new THREE.Mesh(baseTopGeo, plinthBaseMaterial);
    baseTop.position.y = 0.52;
    scalesMasterGroup.add(baseTop);

    // Pillar bottom brass collar
    const pillarCollarGeo = new THREE.CylinderGeometry(0.38, 0.52, 0.16, 32);
    const pillarCollar = new THREE.Mesh(pillarCollarGeo, polishedBrassMaterial);
    pillarCollar.position.y = 0.68;
    scalesMasterGroup.add(pillarCollar);

    // --- 2. CENTRAL PILLAR OF LAW ---
    const columnGeo = new THREE.CylinderGeometry(0.2, 0.26, 2.75, 32);
    const column = new THREE.Mesh(columnGeo, polishedBrassMaterial);
    column.position.y = 2.15;
    scalesMasterGroup.add(column);

    // Ornamental classical ring bands
    const ringGeo1 = new THREE.TorusGeometry(0.27, 0.035, 16, 32);
    const ring1 = new THREE.Mesh(ringGeo1, goldMaterial);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = 1.35;
    scalesMasterGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(0.24, 0.035, 16, 32);
    const ring2 = new THREE.Mesh(ringGeo2, goldMaterial);
    ring2.rotation.x = Math.PI / 2;
    ring2.position.y = 2.85;
    scalesMasterGroup.add(ring2);

    // Pillar Capital
    const capitalGeo = new THREE.CylinderGeometry(0.36, 0.24, 0.25, 32);
    const capital = new THREE.Mesh(capitalGeo, goldMaterial);
    capital.position.y = 3.62;
    scalesMasterGroup.add(capital);

    // Calibrated Gauge Arch (indicates balance index)
    const gaugeArchGeo = new THREE.TorusGeometry(0.48, 0.025, 12, 32, Math.PI * 0.8);
    const gaugeArch = new THREE.Mesh(gaugeArchGeo, goldMaterial);
    gaugeArch.rotation.z = Math.PI * 0.1;
    gaugeArch.position.set(0, 3.82, 0.08);
    scalesMasterGroup.add(gaugeArch);

    // Central Sphere Fulcrum
    const fulcrumGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const fulcrum = new THREE.Mesh(fulcrumGeo, polishedBrassMaterial);
    fulcrum.position.y = 3.88;
    scalesMasterGroup.add(fulcrum);

    // Top Decorative Finial (Gavel / Classical Spire)
    const finialSpireGeo = new THREE.ConeGeometry(0.14, 0.48, 32);
    const finialSpire = new THREE.Mesh(finialSpireGeo, goldMaterial);
    finialSpire.position.y = 4.32;
    scalesMasterGroup.add(finialSpire);

    // --- 3. BALANCE BEAM WITH PRECISION EQUILIBRIUM NEEDLE ---
    const beamPivotY = 3.88;
    const beamGroup = new THREE.Group();
    beamGroup.position.set(0, beamPivotY, 0);
    scalesMasterGroup.add(beamGroup);

    // Slender tapered balance arm
    const beamLength = 4.3;
    const beamGeo = new THREE.CylinderGeometry(0.065, 0.1, beamLength, 24);
    const beamMesh = new THREE.Mesh(beamGeo, polishedBrassMaterial);
    beamMesh.rotation.z = Math.PI / 2;
    beamGroup.add(beamMesh);

    // Precision Balance Indicator Needle pointing upwards to the arch
    const needleGeo = new THREE.ConeGeometry(0.035, 0.55, 16);
    const needleMesh = new THREE.Mesh(needleGeo, polishedBrassMaterial);
    needleMesh.position.set(0, 0.28, 0.1);
    beamGroup.add(needleMesh);

    // End Eyelet Rings
    const eyeletGeo = new THREE.TorusGeometry(0.08, 0.02, 12, 24);
    const leftEyelet = new THREE.Mesh(eyeletGeo, goldMaterial);
    leftEyelet.position.x = -beamLength / 2;
    beamGroup.add(leftEyelet);

    const rightEyelet = new THREE.Mesh(eyeletGeo, goldMaterial);
    rightEyelet.position.x = beamLength / 2;
    beamGroup.add(rightEyelet);

    // --- 4. ACCURATE COURT SCALE DISHES (OPEN BOWLS FACING UPWARDS) ---
    const panRadius = 0.85;
    const panDepth = 0.18;
    const chainDrop = 1.65;

    const createCourtPanAssembly = (xPos, contentType) => {
      const panAssembly = new THREE.Group();
      panAssembly.position.set(xPos, 0, 0);

      // Top suspension ring
      const topRingGeo = new THREE.TorusGeometry(0.06, 0.018, 12, 24);
      const topRing = new THREE.Mesh(topRingGeo, goldMaterial);
      topRing.position.y = -0.05;
      panAssembly.add(topRing);

      // 3 Braided support cables descending to the bowl rim
      const numChains = 3;
      for (let i = 0; i < numChains; i++) {
        const angle = (i * 2 * Math.PI) / numChains;
        const rimX = Math.cos(angle) * panRadius;
        const rimZ = Math.sin(angle) * panRadius;

        const cordLength = Math.sqrt(rimX * rimX + rimZ * rimZ + chainDrop * chainDrop);
        const cordGeo = new THREE.CylinderGeometry(0.012, 0.012, cordLength, 8);
        const cord = new THREE.Mesh(cordGeo, chainMaterial);

        const target = new THREE.Vector3(rimX, -chainDrop, rimZ);
        cord.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          target.clone().normalize()
        );
        cord.position.set(rimX / 2, -chainDrop / 2, rimZ / 2);
        panAssembly.add(cord);
      }

      // The Actual Dish / Pan Group (Open bowl facing UPWARDS)
      const dishGroup = new THREE.Group();
      dishGroup.position.y = -chainDrop;

      // Realistic Lathe-style concave upward dish
      const points = [];
      points.push(new THREE.Vector2(0, 0));
      points.push(new THREE.Vector2(panRadius * 0.45, 0.02));
      points.push(new THREE.Vector2(panRadius * 0.75, 0.08));
      points.push(new THREE.Vector2(panRadius * 0.95, 0.16));
      points.push(new THREE.Vector2(panRadius, 0.18));
      const dishGeo = new THREE.LatheGeometry(points, 36);
      const dish = new THREE.Mesh(dishGeo, goldMaterial);
      dishGroup.add(dish);

      // Thick Polished Rim
      const dishRimGeo = new THREE.TorusGeometry(panRadius, 0.035, 16, 36);
      const dishRim = new THREE.Mesh(dishRimGeo, polishedBrassMaterial);
      dishRim.rotation.x = Math.PI / 2;
      dishRim.position.y = 0.18;
      dishGroup.add(dishRim);

      // Contents inside the dish!
      if (contentType === "scroll") {
        // Rolled Legal Parchment Scroll (Evidence & Facts)
        const scrollGroup = new THREE.Group();
        scrollGroup.position.set(0, 0.08, 0);
        scrollGroup.rotation.z = Math.PI * 0.08;

        const scrollBodyGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.75, 24);
        const scrollBody = new THREE.Mesh(scrollBodyGeo, paperMaterial);
        scrollBody.rotation.z = Math.PI / 2;
        scrollGroup.add(scrollBody);

        // Crimson Seal Ribbon around the scroll
        const ribbonGeo = new THREE.CylinderGeometry(0.125, 0.125, 0.1, 24);
        const ribbon = new THREE.Mesh(ribbonGeo, leatherRedMaterial);
        ribbon.rotation.z = Math.PI / 2;
        scrollGroup.add(ribbon);

        dishGroup.add(scrollGroup);
      } else {
        // Polished Brass Weights (Law & Equity)
        const weightGroup = new THREE.Group();
        weightGroup.position.set(0, 0.04, 0);

        // Main Weight
        const w1Geo = new THREE.CylinderGeometry(0.2, 0.26, 0.22, 20);
        const w1 = new THREE.Mesh(w1Geo, polishedBrassMaterial);
        w1.position.set(-0.1, 0.11, 0);
        weightGroup.add(w1);

        const w1KnobGeo = new THREE.SphereGeometry(0.08, 16, 16);
        const w1Knob = new THREE.Mesh(w1KnobGeo, goldMaterial);
        w1Knob.position.set(-0.1, 0.26, 0);
        weightGroup.add(w1Knob);

        // Secondary small weight
        const w2Geo = new THREE.CylinderGeometry(0.14, 0.18, 0.16, 16);
        const w2 = new THREE.Mesh(w2Geo, polishedBrassMaterial);
        w2.position.set(0.18, 0.08, 0.08);
        weightGroup.add(w2);

        dishGroup.add(weightGroup);
      }

      panAssembly.add(dishGroup);
      return panAssembly;
    };

    const leftPanAssembly = createCourtPanAssembly(-beamLength / 2, "scroll");
    const rightPanAssembly = createCourtPanAssembly(beamLength / 2, "weight");

    beamGroup.add(leftPanAssembly);
    beamGroup.add(rightPanAssembly);

    // --- 5. 3D STACKED LAW & ACADEMIC BOOKS AT THE BASE ---
    // User requested: "add some books related to her qualification or somethings in the front end and make some ainmation"
    const booksGroup = new THREE.Group();
    booksGroup.position.set(1.05, 0.12, 0.65);
    booksGroup.rotation.y = -Math.PI * 0.25;
    scalesMasterGroup.add(booksGroup);

    // Helper to create a realistic leather-bound book
    const createBook = (w, h, d, coverMat, angle, yPos, labelColor) => {
      const book = new THREE.Group();
      book.position.y = yPos;
      book.rotation.y = angle;

      // Cover (Box)
      const coverGeo = new THREE.BoxGeometry(w, d, h);
      const cover = new THREE.Mesh(coverGeo, coverMat);
      book.add(cover);

      // Paper Pages Block inside
      const pagesGeo = new THREE.BoxGeometry(w * 0.94, d * 0.82, h * 0.94);
      const pages = new THREE.Mesh(pagesGeo, paperMaterial);
      pages.position.set(w * 0.02, 0, 0);
      book.add(pages);

      // Gold Embossed Spine Trim
      const spineTrimGeo = new THREE.BoxGeometry(0.03, d * 1.02, h * 1.02);
      const spineTrim = new THREE.Mesh(spineTrimGeo, goldMaterial);
      spineTrim.position.x = -w / 2;
      book.add(spineTrim);

      return book;
    };

    // Book 1: Constitution of India & Substantive Jurisprudence (LL.B. & LL.M.) - Navy
    const book1 = createBook(1.25, 1.6, 0.26, leatherBlueMaterial, 0, 0.13, 0xd4af37);
    booksGroup.add(book1);

    // Book 2: Corporate Law & Commercial Management (MBA) - Terracotta Maroon
    const book2 = createBook(1.15, 1.48, 0.22, leatherRedMaterial, 0.12, 0.37, 0xf5d77f);
    booksGroup.add(book2);

    // Book 3: Forensic Science & Evidence Analysis (B.Sc.) - Emerald Green
    const book3 = createBook(1.05, 1.38, 0.18, leatherGreenMaterial, -0.15, 0.57, 0xd4af37);
    booksGroup.add(book3);

    // Silk bookmark ribbon hanging from Book 3
    const ribbonGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.6, 8);
    const ribbon = new THREE.Mesh(ribbonGeo, silkRibbonMaterial);
    ribbon.position.set(0.45, 0.42, 0.55);
    ribbon.rotation.x = Math.PI * 0.25;
    booksGroup.add(ribbon);

    // --- 6. ATMOSPHERIC GOLD DUST PARTICLES ---
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 1] = Math.random() * 6 - 0.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      particleSpeeds.push({
        orbit: 0.002 + Math.random() * 0.003,
        radius: 1.6 + Math.random() * 2.8,
        angle: Math.random() * Math.PI * 2
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: inCreamBox ? 0xb47828 : (isDark ? 0xf5d77f : 0xb47828),
      size: 0.065,
      transparent: true,
      opacity: inCreamBox ? 0.6 : (isDark ? 0.65 : 0.45),
      blending: inCreamBox ? THREE.NormalBlending : (isDark ? THREE.AdditiveBlending : THREE.NormalBlending)
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- 7. LIGHTING SETUP ---
    const ambientLight = new THREE.AmbientLight(
      inCreamBox ? 0xfff6ea : (isDark ? 0xffeedd : 0xffffff), 
      inCreamBox ? 1.25 : (isDark ? 0.95 : 1.25)
    );
    scene.add(ambientLight);

    const keySpot = new THREE.DirectionalLight(0xfff5e0, inCreamBox ? 2.6 : (isDark ? 2.4 : 2.7));
    keySpot.position.set(4, 7, 5);
    scene.add(keySpot);

    const rimLight = new THREE.DirectionalLight(
      inCreamBox ? 0xffe8cc : (isDark ? 0x7da4d9 : 0xffe8cc), 
      inCreamBox ? 1.1 : 1.3
    );
    rimLight.position.set(-4, -1, -3);
    scene.add(rimLight);

    const mousePointLight = new THREE.PointLight(0xffdf88, 1.8, 10);
    mousePointLight.position.set(0, 2, 4);
    scene.add(mousePointLight);

    // --- 8. MOUSE & RESIZE HANDLERS ---
    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mousePointLight.position.x = x * 3.5;
      mousePointLight.position.y = y * 2.5 + 2;
      animControlsRef.current.mouseTiltDelta = -x * 0.12;

      camera.position.x = x * 0.45;
      camera.position.y = 1.3 + y * 0.35;
      camera.lookAt(0, 0.35, 0);
    };

    container.addEventListener('pointermove', handlePointerMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // --- 9. ANIMATION LOOP ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      const ctrl = animControlsRef.current;
      const desiredTilt = ctrl.targetTilt + ctrl.mouseTiltDelta;
      ctrl.currentTilt += (desiredTilt - ctrl.currentTilt) * 0.06;

      // Apply tilt to balance beam
      beamGroup.rotation.z = ctrl.currentTilt;

      // Counter-rotate pan assemblies so bowls stay horizontal & upright
      leftPanAssembly.rotation.z = -ctrl.currentTilt;
      rightPanAssembly.rotation.z = -ctrl.currentTilt;

      // Subtle organic sway of pans
      const swayL = Math.sin(elapsedTime * 1.8) * 0.025;
      const swayR = Math.cos(elapsedTime * 1.8 + 0.5) * 0.025;
      leftPanAssembly.children[leftPanAssembly.children.length - 1].rotation.x = swayL;
      rightPanAssembly.children[rightPanAssembly.children.length - 1].rotation.x = swayR;

      // Gentle breathing animation of the top academic book
      book3.rotation.y = -0.15 + Math.sin(elapsedTime * 1.2) * 0.03;
      ribbon.rotation.x = Math.PI * 0.25 + Math.sin(elapsedTime * 2) * 0.04;

      if (ctrl.autoRotate) {
        scalesMasterGroup.rotation.y += 0.0045;
      }

      // Animate floating particles
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const spd = particleSpeeds[i];
        spd.angle += spd.orbit;
        positions[i * 3] = Math.cos(spd.angle) * spd.radius;
        positions[i * 3 + 2] = Math.sin(spd.angle) * spd.radius;
        positions[i * 3 + 1] += Math.sin(elapsedTime * 0.8 + i) * 0.003;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', handlePointerMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isDark, inCreamBox]);

  const setTilt = (preset) => {
    setTiltState(preset);
    if (preset === 'balanced') {
      animControlsRef.current.targetTilt = 0;
    } else if (preset === 'left') {
      animControlsRef.current.targetTilt = 0.22;
    } else if (preset === 'right') {
      animControlsRef.current.targetTilt = -0.22;
    }
  };

  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <div 
        ref={mountRef} 
        className="w-full h-[420px] md:h-[500px] lg:h-[560px] cursor-grab active:cursor-grabbing relative"
      />

      {/* Floating 3D Interaction Control HUD with High-Contrast Obsidian / Gold Glassmorphism */}
      <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 px-3.5 rounded-full text-xs z-10 border backdrop-blur-xl shadow-2xl transition-all ${
        inCreamBox
          ? 'bg-[#0b111e]/90 border-amber-500/40 text-amber-200 shadow-xl shadow-black/30'
          : isDark 
            ? 'bg-slate-900/80 border-amber-500/30 text-amber-200 shadow-amber-950/40' 
            : 'bg-[#fbf7f3]/85 border-[#953a2e]/25 text-[#1a0f0c] shadow-[#1a0f0c]/10'
      }`}>
        <button
          onClick={() => setTilt('left')}
          title="Tilt to Evidence & Facts (Scroll in left pan)"
          className={`px-2.5 py-1 rounded-full font-display font-semibold transition-all duration-200 ${
            tiltState === 'left' 
              ? 'bg-amber-500 text-slate-950 shadow-md font-bold' 
              : 'text-amber-200/80 hover:text-amber-300'
          }`}
        >
          <span>Evidence</span>
        </button>

        <button
          onClick={() => setTilt('balanced')}
          title="Rebalance Scales to Equilibrium"
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-display font-semibold transition-all duration-200 ${
            tiltState === 'balanced' 
              ? 'bg-amber-500 text-slate-950 shadow-md font-bold' 
              : 'text-amber-200/80 hover:text-amber-300'
          }`}
        >
          <Scale className="w-3.5 h-3.5" />
          <span>Equilibrium</span>
        </button>

        <button
          onClick={() => setTilt('right')}
          title="Tilt to Constitutional Law & Equity (Weights in right pan)"
          className={`px-2.5 py-1 rounded-full font-display font-semibold transition-all duration-200 ${
            tiltState === 'right' 
              ? 'bg-amber-500 text-slate-950 shadow-md font-bold' 
              : 'text-amber-200/80 hover:text-amber-300'
          }`}
        >
          <span>Equity</span>
        </button>

        <div className={`w-[1px] h-4 mx-1 ${inCreamBox ? 'bg-amber-500/30' : isDark ? 'bg-amber-500/20' : 'bg-[#953a2e]/20'}`} />

        <button
          onClick={toggleAutoRotate}
          title={autoRotate ? "Pause 360° Orbit" : "Resume 360° Orbit"}
          className={`p-1.5 rounded-full transition-colors ${
            autoRotate 
              ? 'text-amber-400 bg-amber-500/20' 
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
        </button>
      </div>
    </div>
  );
}
