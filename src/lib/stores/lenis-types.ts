// Define the structure of the Lenis instance
export interface LenisInstance {
  scrollTo: (target: number | HTMLElement | string, options?: any) => void;
  raf: (time: number) => void;
  destroy: () => void;
  // Add other methods/properties as needed
}
