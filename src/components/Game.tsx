import { useKeys } from "use-keys-bindings";
import { GameStateControl } from "../types/type";
import { useEffect, useRef } from "react";
import { Player } from "./reusableComponents/Player";

const Game = ({ setGameState }: GameStateControl) => {
  const canvasHeight = 600;
  const canvasWidth = 500;
  const playerSize = 50
  const playerRef = useRef({ x: canvasWidth / 2, y: canvasHeight- playerSize });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  const movePlayer = (direction: "left" | "right") => {
    if (direction == "left" && playerRef.current.x > 0) {
      playerRef.current.x -= 10;
    } else if (direction == "right" && playerRef.current.x < canvasWidth - playerSize) {
      playerRef.current.x += 10;
    }
  };
  useKeys({
    keys: ["ArrowLeft", "ArrowRight"],
    triggerOnAnyKey: true,
    enableKeyRepeatOnHold: true,
    callback: (e) => {
      if (e.key == "ArrowRight") movePlayer("right");
      if (e.key == "ArrowLeft") movePlayer("left");
    },
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const gameLoop = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      Player(ctx, playerRef.current.x, playerRef.current.y);
      console.log(requestAnimationFrame(gameLoop))
      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className=" text-[2rem] ">
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
