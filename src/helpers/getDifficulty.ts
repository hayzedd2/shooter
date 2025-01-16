import { difficultyState } from "../types/type";

export const getDifficulty = (difficulty: difficultyState) => {
  switch (difficulty) {
    case "easy":
      return { spawnRate: 3000, movementSpeed: 0.2 };
    case "medium":
      return { spawnRate: 2000, movementSpeed: 1 };
    case "hard":
      return { spawnRate: 1000, movementSpeed: 1.5 };
  }
};
