import { create } from 'zustand';

const useMacbookStore = create((set) => ({
  color: '#2e2c2e',
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),


  texture: '/videos/feature-1.mp4', // default texture
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({
      color: '#2e2c2e',
      scale: 0.08,
      texture: '/videos/feature-1.mp4', // reset texture as well
    }),
}));

export default useMacbookStore;
