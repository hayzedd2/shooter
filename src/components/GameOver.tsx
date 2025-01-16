import { useKeys } from "use-keys-bindings";
import { GameStateControl } from "../types/type";
import Pill from "./reusableComponents/Pill";

const GameOver = ({ setGameState }: GameStateControl) => {
  useKeys({
    keys: ["r"],
    callback: () => {
      setGameState("active");
    },
  });
  return <div>GameOver. Use <Pill text="r"/> to restart the game.</div>;
};

export default GameOver;
