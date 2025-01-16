import Button from "./Button";

const GameControlHelper = () => {
  return (
    <div
      className="flex w-full mt-8 items-end justify-center gap-10
  "
    >
      <div className="flex flex-col gap-2 items-center">
        <Button width="80px">Space</Button>
        <p className="text-[12px]">Shoot</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Button width="50px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className=" rotate-[-90deg]"
            viewBox="0 0 24 24"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          </svg>
        </Button>
        <p className="text-[12px]">Move left</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Button width="50px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className=" rotate-90"
            viewBox="0 0 24 24"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          </svg>
        </Button>
        <p className="text-[12px]">Move right</p>
      </div>
    </div>
  );
};

export default GameControlHelper;
