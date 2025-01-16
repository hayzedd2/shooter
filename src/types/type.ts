export type GameState = "idle" | "active" | "over";
export interface GameStateControl {
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}
export type difficultyState = "easy" | "medium" | "hard";
export interface DifficultyControllerProp {
  setDifficulty: React.Dispatch<React.SetStateAction<difficultyState>>;
}
