import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import IdleGame from "./components/IdleGame";
import { GameState } from "./types/type";
import NotAllowed from "./components/NotAllowed";
import Footer from "./components/reusableComponents/Footer";
import useDeviceType from "./helpers/useDeviceType";

function App() {
  const [gameState, setGameState] = useState<GameState>("idle");
  const deviceType = useDeviceType();

  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center px-4">
      {gameState == "idle" && <IdleGame setGameState={setGameState} />}
      {gameState == "active" &&
        (deviceType == "desktop" ? (
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
