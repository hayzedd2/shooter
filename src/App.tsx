import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import IdleGame from "./components/IdleGame";
import { GameState } from "./types/type";
import NotAllowed from "./components/NotAllowed";
import Footer from "./components/reusableComponents/Footer";
import {isMobile} from "react-device-detect"

function App() {
  const [gameState, setGameState] = useState<GameState>("idle");
  
  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center px-4">
      {gameState == "idle" && <IdleGame setGameState={setGameState} />}
      {gameState == "active" &&
        (!isMobile ? (
          <Game setGameState={setGameState} />
        ) : (
          <NotAllowed />
        ))}
      {gameState == "over" && <GameOver setGameState={setGameState} />}
      <Footer />
    </main>
  );
}

export default App;
