import { writable } from 'svelte/store';
import Lenis from 'lenis'

// Create a writable store for the Lenis instance
export const lenisStore = writable<Lenis | null>(null);

// Function to initialize Lenis
export function initLenis() {
	const lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		orientation: 'vertical',
		gestureOrientation: 'vertical',
		smoothWheel: true,
		wheelMultiplier: 1,
		touchMultiplier: 2,
		infinite: false
	});

	// Store the instance
	lenisStore.set(lenis);

	// Start the animation loop
	function raf(time: number) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	return lenis;
}

// Function to destroy Lenis
export function destroyLenis() {
	lenisStore.update((lenis) => {
		if (lenis) {
			lenis.destroy();
		}
		return null;
	});
}
