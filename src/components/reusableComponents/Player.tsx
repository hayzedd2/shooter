
interface PlayerProps {
  x: number;
  y: number;
}

const Player = ({ x, y }: PlayerProps) => {
  return (
    <div
      style={{
        left: `${x}px`,
        top: `${y}px`,
        bottom: 0,
      }}
      className="bg-cover player-bg  flex items-end  justify-end bg-center bg-no-repeat absolute w-[80px] h-[80px]"
    ></div>
  );
};

export default Player;
