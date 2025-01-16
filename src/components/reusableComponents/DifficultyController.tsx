import { DifficultyControllerProp, difficultyState } from "../../types/type";
import Pill from "./Pill";

const DifficultyController = ({
  difficulty,
  setDifficulty,
}: DifficultyControllerProp) => {
  const difficulties: difficultyState[] = ["easy", "medium", "hard"];
  return (
    <div className="flex">
      {difficulties.map((d, i) => {
        return (
          <button key={i} onClick={() => setDifficulty(d)}>
            <Pill active={d == difficulty} text={d} />
          </button>
        );
      })}
    </div>
  );
};

export default DifficultyController;
