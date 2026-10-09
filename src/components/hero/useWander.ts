import {
	type MotionValue,
	useAnimationFrame,
	useMotionValue,
	useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

type Point = [number, number];

type Path = {
	points: Point[];
	progress: number;
	elapsed: number;
	duration: number;
};

const RADIUS = 70;
const MIN_STEP = 0.5 * RADIUS;
const MAX_STEP = 1.4 * RADIUS;
// Sharper turns would make the path fold back on itself and slow to a halt
const MAX_TURN = (130 * Math.PI) / 180;
const TRIES = 16;
const RAMP_UP = 1.2;

const randomPoint = (radius: number): Point => {
	const angle = Math.random() * 2 * Math.PI;
	const distance = radius * Math.sqrt(Math.random());
	return [distance * Math.cos(angle), distance * Math.sin(angle)];
};

// Random point in the disc, reached without a sharp turn or a too short/long step
const nextPoint = ([px, py]: Point, [lx, ly]: Point): Point => {
	const hx = lx - px;
	const hy = ly - py;
	let best = randomPoint(RADIUS);
	let bestScore = Number.POSITIVE_INFINITY;

	for (let i = 0; i < TRIES; i++) {
		const candidate = randomPoint(RADIUS);
		const dx = candidate[0] - lx;
		const dy = candidate[1] - ly;
		const step = Math.hypot(dx, dy);
		const cos = (hx * dx + hy * dy) / (Math.hypot(hx, hy) * step || 1);
		const turn = Math.acos(Math.min(1, Math.max(-1, cos)));
		const offStep = Math.max(0, MIN_STEP - step, step - MAX_STEP) / RADIUS;

		if (turn <= MAX_TURN && offStep === 0) return candidate;

		const score = turn + 4 * offStep;
		if (score < bestScore) {
			best = candidate;
			bestScore = score;
		}
	}

	return best;
};

// Uniform cubic B-spline: continuous position, velocity and acceleration
const bspline = ([p0, p1, p2, p3]: Point[], t: number, axis: 0 | 1) => {
	const t2 = t * t;
	const t3 = t2 * t;
	return (
		((1 - t) ** 3 * p0[axis] +
			(3 * t3 - 6 * t2 + 4) * p1[axis] +
			(-3 * t3 + 3 * t2 + 3 * t + 1) * p2[axis] +
			t3 * p3[axis]) /
		6
	);
};

const createPath = (): Path => {
	const first = randomPoint(RADIUS / 2);
	// Mirrored first point: the curve starts exactly at the resting position
	const points: Point[] = [[-first[0], -first[1]], [0, 0], first];
	points.push(nextPoint(points[1], points[2]));
	return {
		points,
		progress: 0,
		elapsed: 0,
		duration: 1.6 + Math.random() * 0.5,
	};
};

// Endless, random but smooth wandering around the resting position
const useWander = (): { x: MotionValue<number>; y: MotionValue<number> } => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const reduceMotion = useReducedMotion();
	const path = useRef<Path | null>(null);

	useAnimationFrame((_, delta) => {
		if (reduceMotion) return;
		if (!path.current) path.current = createPath();

		const current = path.current;
		const dt = Math.min(delta, 50) / 1000;
		current.elapsed += dt;

		const ramp = Math.min(1, current.elapsed / RAMP_UP);
		current.progress += (dt / current.duration) * ramp * ramp * (3 - 2 * ramp);

		while (current.progress >= 1) {
			current.progress -= 1;
			current.points.shift();
			current.points.push(nextPoint(current.points[1], current.points[2]));
		}

		x.set(bspline(current.points, current.progress, 0));
		y.set(bspline(current.points, current.progress, 1));
	});

	return { x, y };
};

export default useWander;
