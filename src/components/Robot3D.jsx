"use client";

import { Suspense, useRef, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

/* ──────────────────────────────────────────────
   Apply vibrant colours & make the robot pop
   ────────────────────────────────────────────── */
function colouriseModel(scene) {
  // Log mesh names once so we can fine-tune later
  scene.traverse((child) => {
    if (!child.isMesh) return; // skip non-mesh log
  });

  scene.traverse((child) => {
    if (!child.isMesh) return;

    // Clone material to avoid mutating the cached GLB
    if (Array.isArray(child.material)) {
      child.material = child.material.map((m) => {
        const cloned = m.clone();
        applyStyle(cloned, child.name);
        return cloned;
      });
    } else {
      child.material = child.material.clone();
      applyStyle(child.material, child.name);
    }
  });
}

function applyStyle(mat, name) {
  const n = (name || "").toLowerCase();

  // Make sure we are using a standard/physical material
  mat.transparent = false;
  mat.opacity = 1;
  mat.side = THREE.FrontSide;

  // ─── Eyes / lenses → bright golden glow ───
  if (n.includes("eye") || n.includes("lens") || n.includes("pupil")) {
    mat.color = new THREE.Color("#FFD700");
    mat.emissive = new THREE.Color("#FFB300");
    mat.emissiveIntensity = 2;
    mat.metalness = 0.7;
    mat.roughness = 0.1;
    return;
  }

  // ─── Antenna ───
  if (n.includes("antenna") || n.includes("aerial")) {
    mat.color = new THREE.Color("#22D3EE");
    mat.emissive = new THREE.Color("#06B6D4");
    mat.emissiveIntensity = 0.8;
    mat.metalness = 0.9;
    mat.roughness = 0.1;
    return;
  }

  // ─── Screen / face panel → light face ───
  if (n.includes("screen") || n.includes("face") || n.includes("display")) {
    mat.color = new THREE.Color("#CBD5E1");
    mat.emissive = new THREE.Color("#94A3B8");
    mat.emissiveIntensity = 0.2;
    mat.metalness = 0.1;
    mat.roughness = 0.5;
    return;
  }

  // ─── Chest core / light → cyan glow ───
  if (n.includes("core") || n.includes("chest") || n.includes("light") || n.includes("circle") || n.includes("glow")) {
    mat.color = new THREE.Color("#22D3EE");
    mat.emissive = new THREE.Color("#06B6D4");
    mat.emissiveIntensity = 2.5;
    mat.metalness = 0.5;
    mat.roughness = 0.15;
    return;
  }

  // ─── Default: Boost existing colors, add metallic sheen ───
  // Brighten the existing colour
  const hsl = {};
  mat.color.getHSL(hsl);
  // Push lightness up so dark models become visible
  mat.color.setHSL(hsl.h, Math.min(hsl.s * 1.4, 1), Math.max(hsl.l * 1.6, 0.35));

  // Add a subtle blue emissive so nothing looks pitch-black
  if (!mat.emissive) mat.emissive = new THREE.Color("#000000");
  mat.emissive.set("#1E3A8A");
  mat.emissiveIntensity = 0.15;
  mat.metalness = Math.min((mat.metalness || 0.3) + 0.15, 0.85);
  mat.roughness = Math.max((mat.roughness || 0.5) - 0.1, 0.15);
}

/* ──────────────────────────────────────────────
   Find the head node for cursor tracking
   ────────────────────────────────────────────── */
function findHead(scene) {
  let head = null;

  // Priority 1: look for a node explicitly named "head"
  scene.traverse((child) => {
    const n = (child.name || "").toLowerCase();
    if (!head && n.includes("head")) head = child;
  });

  // Priority 2: If no "head" found, try the upper-most mesh group
  if (!head) {
    const meshes = [];
    scene.traverse((c) => { if (c.isMesh) meshes.push(c); });
    if (meshes.length > 0) {
      // pick the mesh with the highest Y position (likely the head)
      let highest = meshes[0];
      meshes.forEach((m) => {
        const posA = new THREE.Vector3();
        const posB = new THREE.Vector3();
        m.getWorldPosition(posA);
        highest.getWorldPosition(posB);
        if (posA.y > posB.y) highest = m;
      });
      head = highest.parent || highest;
    }
  }
  return head;
}

/* ──────────────────────────────────────────────
   RobotModel component
   ────────────────────────────────────────────── */
function RobotModel() {
  const { scene } = useGLTF("/models/robot.glb");
  const groupRef = useRef();
  const headRef = useRef(null);
  const headOriginalRot = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const { gl } = useThree();

  useEffect(() => {
    colouriseModel(scene);
    const head = findHead(scene);
    headRef.current = head;
    if (head) {
      headOriginalRot.current = { x: head.rotation.x, y: head.rotation.y };
    }
  }, [scene]);

  // Track pointer over canvas
  const onPointerMove = useCallback((e) => {
    const rect = gl.domElement.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }, [gl]);

  const onPointerLeave = useCallback(() => {
    mouse.current.x = 0;
    mouse.current.y = 0;
  }, []);

  useEffect(() => {
    const el = gl.domElement;
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerleave", onPointerLeave);
    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [gl, onPointerMove, onPointerLeave]);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Floating
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.1;

    // Head follows cursor
    if (headRef.current) {
      const baseX = headOriginalRot.current.x;
      const baseY = headOriginalRot.current.y;

      const targetY = baseY + mouse.current.x * 0.6;
      const targetX = baseX + mouse.current.y * -0.35;

      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y, targetY, 0.06
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x, targetX, 0.06
      );
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      <Center>
        <primitive
          object={scene}
          scale={2.5}
          rotation={[0.05, -0.3, 0]}
        />
      </Center>
    </group>
  );
}

/* ──────────────────────────────────────────────
   Canvas
   ────────────────────────────────────────────── */
export default function Robot3D() {
  return (
    <div className="w-full h-[420px] md:h-[560px] lg:h-[620px]">
      <Canvas
        camera={{ position: [0, 0.2, 5.8], fov: 38 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "default",
          failIfMajorPerformanceCaveat: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.8,
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Bright lighting to make the robot pop */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
          <directionalLight position={[-5, 4, -3]} intensity={1.2} color="#3B82F6" />
          <spotLight
            position={[0, 8, 4]}
            intensity={2}
            angle={0.5}
            penumbra={0.5}
            color="#60A5FA"
          />
          <pointLight position={[3, -2, 5]} intensity={0.6} color="#8B5CF6" />
          <pointLight position={[-3, 2, 4]} intensity={0.5} color="#06B6D4" />

          {/* Hemisphere light for overall fill */}
          <hemisphereLight
            color="#60A5FA"
            groundColor="#1E1B4B"
            intensity={0.8}
          />

          <RobotModel />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/robot.glb");
