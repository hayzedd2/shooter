export type GameState = "idle" | "active" | "over";
export interface GameStateControl {
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}
