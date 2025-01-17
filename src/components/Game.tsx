import { useKeys } from "use-keys-bindings";
import { difficultyState, GameStateControl } from "../types/type";
import { useEffect, useRef, useState } from "react";
import { Enemy } from "./reusableComponents/Enemy";
import { getDifficulty } from "../helpers/getDifficulty";
import DifficultyController from "./reusableComponents/DifficultyController";
import { Bullet } from "./reusableComponents/Bullet";
import GameControlHelper from "./reusableComponents/GameControlHelper";
import Player from "./reusableComponents/Player";
import { useHighScoreStore, useScoreStore } from "../store/useScoreStore";
const canvasHeight = 500;
const canvasWidth = 500;
const playerSize = 80;
const margin = 50;
const EnemySize = 30;

const Game = ({ setGameState }: GameStateControl) => {
  const playerRef = useRef({
    x: canvasWidth / 2,
    y: canvasHeight - playerSize,
  });
  const [_, setPlayerPosition] = useState({
    x: canvasWidth / 2,
    y: canvasHeight - playerSize,
  });
  const { score, updateScore } = useScoreStore();
  const highScore = useHighScoreStore((state)=> state.highScore);
  const bulletsRef = useRef<{ x: number; y: number }[]>([]);
  const enemiesRef = useRef<{ x: number; y: number }[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState<difficultyState>("easy");
  const lastEnemySpawnTimeRef = useRef(0);
  useKeys({
    keys: ["ArrowLeft", "ArrowRight", " "],
    triggerOnAnyKey: true,
    enableKeyRepeatOnHold: true,
    callback: (e) => {
      if (e.key == "ArrowRight") movePlayer("right");
      if (e.key == "ArrowLeft") movePlayer("left");
      if (e.key == " ") shoot();
    },
  });

  const movePlayer = (direction: "left" | "right") => {
    setPlayerPosition((prevPosition) => {
      let newX = prevPosition.x;
      if (direction === "left" && prevPosition.x > 0) {
        newX -= 10;
      } else if (
        direction === "right" &&
        prevPosition.x < canvasWidth - playerSize
      ) {
        newX += 10;
      }
      playerRef.current = { ...playerRef.current, x: newX };
      return { ...prevPosition, x: newX };
    });
  };

  const shoot = () => {
    bulletsRef.current.push({
      x: playerRef.current.x + playerSize / 2,
      y: playerRef.current.y,
    });
  };
  const { spawnRate, movementSpeed } = getDifficulty(difficulty);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const gameLoop = (timestamp: number) => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      enemiesRef.current = enemiesRef.current.filter((enemy) => {
        Enemy(ctx, enemy.x, enemy.y);
        enemy.y += movementSpeed;
        return enemy.y < canvasHeight;
      });
      // draw bullets
      bulletsRef.current = bulletsRef.current.filter((bullet) => {
        Bullet(ctx, bullet.x, bullet.y);
        bullet.y -= 5;
        return bullet.y > 0;
      });

      // Spawn new enemies
      if (timestamp - lastEnemySpawnTimeRef.current >= spawnRate) {
        enemiesRef.current.push({
          x: Math.random() * (canvasWidth - EnemySize - 2 * margin) + margin,
          y: 0,
        });
        lastEnemySpawnTimeRef.current = timestamp;
      }

      // check bullet colision

      bulletsRef.current = bulletsRef.current.filter((bullet) => {
        let hit = false;
        enemiesRef.current = enemiesRef.current.filter((enemy) => {
          if (
            Math.abs(bullet.x - enemy.x) < EnemySize &&
            Math.abs(bullet.y - enemy.y) < EnemySize
          ) {
            hit = true;
            updateScore(10);
            return false;
          }
          return true;
        });
        return !hit;
      });

      if (
        enemiesRef.current.some((enemy) => enemy.y > canvasHeight - playerSize)
      ) {
        setGameOver(true);
        setGameState("over");
      }

      if (!gameOver) {
        animationFrameRef.current = requestAnimationFrame(gameLoop);
      }
    };
    lastEnemySpawnTimeRef.current = performance.now();
    animationFrameRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [difficulty, gameOver]);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <DifficultyController
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />

        <p>
          Score: <span>{score}</span>
        </p>
        <p>
          Highscore: <span>{highScore}</span>
        </p>
      </div>

      <div
        className="relative p-0"
        style={{ width: canvasWidth, height: canvasHeight }}
      >
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="border border-gray-300 rounded-md"
        />
        {/* Overlay the player div */}
        <Player x={playerRef.current.x} y={playerRef.current.y} />
      </div>

      <GameControlHelper />
    </div>
  );
};

export default Game;
