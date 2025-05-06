import { writable } from 'svelte/store';
import Lenis from 'lenis';
import type { LenisInstance } from './lenis-types';

// Create a writable store for the Lenis instance
export const lenisStore = writable<LenisInstance | null>(null);

// Function to initialize Lenis
export function initLenis(): LenisInstance {
	// Explicitly type the return to ensure TypeScript understands
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

	// Explicitly cast to our interface to enforce type safety
	const typedLenis = lenis as unknown as LenisInstance;

	// Store the instance
	lenisStore.set(typedLenis);

	// Start the animation loop
	function raf(time: number) {
		typedLenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	return typedLenis;
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

// Updated helper function to scroll to a specific position
export function scrollTo(target: number | HTMLElement, options = {}) {
	console.log('Enhanced scrollTo helper called with target:', target);
	
	// Get current lenis instance safely
	let lenis: LenisInstance | null = null;
	
	const unsubscribe = lenisStore.subscribe((value) => {
		lenis = value;
	});
	unsubscribe();
	
	let success = false;
	
	// Try Lenis if available
	if (lenis) {
		console.log('Trying Lenis scrollTo with options:', options);
		try {
			// Try with immediate first to ensure it happens
			(lenis as any).scrollTo(target, { 
				...options, 
				immediate: true 
			});
			success = true;
		} catch (error) {
			console.error('Error with Lenis scrollTo:', error);
		}
	}
	
	// Always do native scrolling as fallback
	if (typeof target === 'number') {
		try {
			// Immediate scroll first
			console.log('Using immediate native scroll as fallback');
			window.scrollTo(0, target);
			
			// Then try smooth scroll
			setTimeout(() => {
				console.log('Using delayed smooth scroll');
				window.scrollTo({
					top: target,
					behavior: 'smooth'
				});
			}, 10);
			
			success = true;
		} catch (error) {
			console.error('Error with native scrollTo:', error);
			
			// Last resort for older browsers
			document.body.scrollTop = target as number; // For Safari
			document.documentElement.scrollTop = target as number; // For others
			success = true;
		}
	}
	
	return success;
}
