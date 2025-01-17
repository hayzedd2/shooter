import { create } from "zustand";

interface scoreProps {
  score: number;
  updateScore: (newScore: number) => void;
  resetScore: () => void;
}

export const useScoreStore = create<scoreProps>((set) => ({
  score: 0,
  updateScore: (newScore: number) =>
    set((state) => ({
      score: state.score + newScore,
    })),

  resetScore: () =>
    set(() => ({
      score: 0,
    })),
}));
