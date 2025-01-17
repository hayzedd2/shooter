import { useKeys } from "use-keys-bindings";
import { GameStateControl } from "../types/type";
import Pill from "./reusableComponents/Pill";
import { useHighScoreStore, useScoreStore } from "../store/useScoreStore";

const GameOver = ({ setGameState }: GameStateControl) => {
  const { score, resetScore } = useScoreStore();
  const updateHighScore = useHighScoreStore((state) => state.updateHighScore);
  useKeys({
    keys: ["r"],
    callback: () => {
      updateHighScore(score);
      resetScore();
      setGameState("active");
    },
  });

  return (
    <div className="flex items-center justify-center flex-col">
      <h6 className="mb-1 text-red-500 font-[600]">GameOver!</h6>
      <h6>You scored: </h6>
      <h2 className="text-[3.5rem] text-gray-500 text-effect">{score}</h2>

      <p className="text-center">
        Use <Pill text="r" /> to restart the game.
      </p>
    </div>
  );
};

export default GameOver;
