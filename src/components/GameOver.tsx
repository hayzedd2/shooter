import { useKeys } from "use-keys-bindings";
import { GameStateControl } from "../types/type";
import Pill from "./reusableComponents/Pill";
import { useScoreStore } from "../store/useScoreStore";

const GameOver = ({ setGameState }: GameStateControl) => {
  const { score, resetScore } = useScoreStore();
  useKeys({
    keys: ["r"],
    callback: () => {
      resetScore();
      setGameState("active");
    },
  });

  return (
    <div className="flex items-center justify-center flex-col">
      <h6>You scored: </h6>
      <h2 className="text-[3.5rem] mb-2 py-2 text-gray-500 text-effect">
        {score}
      </h2>
      <p className="text-center">
        {" "}
        GameOver. Use <Pill text="r" /> to restart the game.
      </p>
    </div>
  );
};

export default GameOver;
