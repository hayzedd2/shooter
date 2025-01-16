import { difficultyState } from "../types/type";

export const getDifficulty = (difficulty: difficultyState) => {
  switch (difficulty) {
    case "easy":
      return { spawnRate: 0.01, movementSpeed: 0.2 };
    case "medium":
      return { spawnRate: 0.02, movementSpeed: 1 };
    case "hard":
      return { spawnRate: 0.03, movementSpeed: 1.5 };
  }
};
