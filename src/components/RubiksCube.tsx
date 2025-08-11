"use client";

import { useEffect, useRef } from 'react';
import { TwistyPlayer } from 'cubing/twisty';

export default function RubiksCube({ moves }: { moves: string }) {
	const cubeContainerRef = useRef<HTMLInputElement | null>(null);
	const rubiksCubeRef = useRef<TwistyPlayer | null>(null);

	useEffect(() => {
		if (!cubeContainerRef.current) return;
		
		const twistyPlayer = new TwistyPlayer({
			puzzle: '3x3x3',
			visualization: 'PG3D',
			alg: '',
			experimentalSetupAnchor: 'start',
			background: 'none',
			controlPanel: 'none',
			hintFacelets: 'none',
			tempoScale: 5,
			cameraLatitude: 50,
			cameraLongitude: 50,
		});
		
		rubiksCubeRef.current = twistyPlayer;

		rubiksCubeRef.current.classList.add("rubikscube__container");
		cubeContainerRef.current.appendChild(rubiksCubeRef.current);
	}, []);

	return (
		<div ref={cubeContainerRef} className='flex items-center justify-center' />
	);
}