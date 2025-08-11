"use client";

import { useEffect, useRef, useState } from 'react';
import { TwistyPlayer } from 'cubing/twisty';

export default function RubiksCube() {
	const cubeContainerRef = useRef<HTMLInputElement | null>(null);
	const rubiksCubeRef = useRef<TwistyPlayer | null>(null);
	const moves: string[] = ['R', 'U', 'F', 'L', 'B'];
	const lastMove = useRef<string>("");
	
	const performRandomMove = () => {
		if (!rubiksCubeRef || !rubiksCubeRef.current) return;
		
		let randMoveIdx: number = Math.floor(Math.random() * (moves.length - 0) + 0);
		let isDouble: boolean = Math.floor(Math.random() * (2 + 0) + 0) === 1 ? true : false;
		let isPrime: boolean = Math.floor(Math.random() * (2 + 0) + 0) === 1 ? true : false;
		const numTries: number = 3;
		let currTry: number = 0;
		
		while (moves[randMoveIdx] === lastMove.current[0] || currTry > numTries) {
			randMoveIdx = Math.floor(Math.random() * (moves.length - 0) + 0);
			isDouble = Math.floor(Math.random() * (2 + 0) + 0) === 1 ? true : false;
			isPrime = Math.floor(Math.random() * (2 + 0) + 0) === 1 ? true : false;
			
			currTry += 1;
		}
		
		const move: string = moves[randMoveIdx] + (isDouble == true ? '2' : '') + (isPrime == true ? "'" : '');
		
		lastMove.current = move;
		
		rubiksCubeRef.current.experimentalAddMove(move, { cancel: false });
	};

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
		
		setInterval(() => performRandomMove(), 800);
	}, []);

	return (
		<div ref={cubeContainerRef} className='flex items-center justify-center' />
	);
}