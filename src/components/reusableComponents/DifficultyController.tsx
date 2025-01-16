import { DifficultyControllerProp, difficultyState } from "../../types/type";
import Pill from "./Pill";

const DifficultyController = ({ setDifficulty }: DifficultyControllerProp) => {
  const difficulties: difficultyState[] = ["easy", "medium", "hard"];
  return (
    <div className="flex">
      {difficulties.map((d, i) => {
        return (
          <button key={i} onClick={() => setDifficulty(d)}>
            <Pill text={d} />
          </button>
        );
      })}
    </div>
  );
};

export default DifficultyController;
