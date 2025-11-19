import React from 'react'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'

import state from '../store'

export default function Shirt() {
  const snap = useSnapshot(state)
  // Pull only the geometry from the GLB—no baked materials here
  const { nodes } = useGLTF('/shirt_baked.glb')

  // Preload decal textures from state
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)

  // Optional: slowly rotate the shirt
  useFrame(({ clock }) => {
    const mesh = nodes.T_Shirt_male
    if (mesh) mesh.rotation.y = clock.getElapsedTime() * 0.1
  })

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        dispose={null}
      >
        {/*
          ◀── HERE WE REPLACE the GLB’s baked material
          with a fresh, state-driven meshStandardMaterial ──▶ 
        */}
        <meshStandardMaterial
          color={snap.color}    // use Valtio state for dynamic tint
          roughness={1}
          metalness={0.3}
        />

        {/* Full-print decal (unchanged) */}
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {/* Logo decal (unchanged) */}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            anisotropy={16}
            depthTest={false}
            depthWrite
          />
        )}
      </mesh>
    </group>
  )
}
