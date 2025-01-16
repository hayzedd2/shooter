import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import IdleGame from "./components/IdleGame";
import { GameState } from "./types/type";

function App() {
  const [gameState, setGameState] = useState<GameState>("idle");
  
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4">
      {gameState == "idle" && <IdleGame setGameState={setGameState} />}
      {gameState == "active" && <Game setGameState={setGameState} />}
      {gameState == "over" && <GameOver />}
    </main>
  );
}

export default App;
