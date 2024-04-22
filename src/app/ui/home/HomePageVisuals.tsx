import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { Group } from 'three';

const HomePageVisuals: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full w-full ">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 10, 0]} intensity={1} />
                <Visuals />
            </Canvas>
        </div>
    );
};

export default HomePageVisuals;

const Visuals: React.FC = () => {
    const { scene } = useGLTF('/scene.gltf') as { scene: Group };
    const group = useRef<Group>(null);
    const model = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (group.current) {
            group.current.rotation.y = Math.sin(t / 2) * Math.PI / 4; // Rotate model along X-axis
        }
    });

    return (
        <>
            <group ref={group} scale={[0.8, 0.8, 0.8]} position={[0, 0, -3]}> {/* Adjust scale and position */}
                <mesh ref={model} position={[0, 0, 0]}>
                    <primitive object={scene} />

                </mesh>
            </group>
        </>
    );
};
