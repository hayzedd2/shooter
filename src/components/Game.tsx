import { useKeys } from "use-keys-bindings";
import { difficultyState, GameStateControl } from "../types/type";
import { useEffect, useRef, useState } from "react";
import { Player } from "./reusableComponents/Player";
import { Enemy } from "./reusableComponents/Enemy";
import { getDifficulty } from "../helpers/getDifficulty";
import DifficultyController from "./reusableComponents/DifficultyController";

const Game = ({ setGameState }: GameStateControl) => {
  const canvasHeight = 600;
  const canvasWidth = 500;
  const playerSize = 50;
  const EnemySize = 30;
  const playerRef = useRef({
    x: canvasWidth / 2,
    y: canvasHeight - playerSize,
  });
  const enemiesRef = useRef<{ x: number; y: number }[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const [difficulty, setDifficulty] = useState<difficultyState>("easy");
  useKeys({
    keys: ["ArrowLeft", "ArrowRight"],
    triggerOnAnyKey: true,
    enableKeyRepeatOnHold: true,
    callback: (e) => {
      if (e.key == "ArrowRight") movePlayer("right");
      if (e.key == "ArrowLeft") movePlayer("left");
    },
  });

  const movePlayer = (direction: "left" | "right") => {
    if (direction == "left" && playerRef.current.x > 0) {
      playerRef.current.x -= 10;
    } else if (
      direction == "right" &&
      playerRef.current.x < canvasWidth - playerSize
    ) {
      playerRef.current.x += 10;
    }
  };
  const { spawnRate, movementSpeed } = getDifficulty(difficulty);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const gameLoop = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      // draw player
      Player(ctx, playerRef.current.x, playerRef.current.y);

      // draw enemies
      enemiesRef.current = enemiesRef.current.filter((enemy) => {
        Enemy(ctx, enemy.x, enemy.y);
        enemy.y += movementSpeed;
        return enemy.y < canvasHeight;
      });

      // Spawn new enemies
      if (Math.random() < spawnRate) {
        enemiesRef.current.push({
          x: Math.random() * (canvasWidth - EnemySize),
          y: 0,
        });
      }
      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [difficulty]);

  return (
    <div className=" text-[2rem]">
      <DifficultyController setDifficulty={setDifficulty} />
      <p>
        {difficulty} {spawnRate} {movementSpeed}
      </p>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className="border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default Game;
