import { GameStateControl } from "../types/type";
import { useKeys } from "use-keys-bindings";
import Button from "./reusableComponents/Button";
import Pill from "./reusableComponents/Pill";
import ShortcutPill from "./reusableComponents/ShortcutPill";

const IdleGame = ({ setGameState }: GameStateControl) => {
  useKeys({
    keys: ["s"],
    callback: () => {
      setGameState("active");
    },
  });
  return (
    <div className="max-w-[600px] flex items-center flex-col justify-center gap-4 w-full">
      <About />
      <Button width="150px" onClick={() => setGameState("active")}>
        Start Game <ShortcutPill />
      </Button>
    </div>
  );
};

export default IdleGame;

const About = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <h2 className="text-[2.5rem] py-2 text-gray-500 text-effect">
          SHOOTER
        </h2>
      </div>
      <p className="text-[14px] leading-[24px] text-center">
        A <Pill text="smol" /> shooting game. Why did i build this? - To
        show how easy it is to handle keyboard events using a package I
        created called
        <a href="">
          <Pill text="use-keys-bindings" link />
        </a>
        
      </p>
    </div>
  );
};
