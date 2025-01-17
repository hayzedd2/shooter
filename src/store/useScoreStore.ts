import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ScoreProps {
  score: number;
  updateScore: (newScore: number) => void;
  resetScore: () => void;
}

interface HighScoreProps {
  highScore: number;
  updateHighScore: (newScore: number) => void;
  resetHighScore: () => void;
}

export const useScoreStore = create<ScoreProps>((set) => ({
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

// High score store with persistence
export const useHighScoreStore = create<HighScoreProps>()(
  persist(
    (set) => ({
      highScore: 0,
      updateHighScore: (newScore: number) =>
        set((state) => ({
          // Only update if new score is higher
          highScore: newScore > state.highScore ? newScore : state.highScore,
        })),
        resetHighScore: () =>
        set(() => ({
          highScore: 0,
        })),
    }),
    {
      name: "shooter-high-score",    
    }
  )
);
