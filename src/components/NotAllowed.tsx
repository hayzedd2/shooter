import No from "../assets/icons/No";
import Pill from "./reusableComponents/Pill";

const NotAllowed = () => {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center flex-col gap-6">
      <No />
      <p className="text-[14px] leading-[24px] text-center">
        Sorry, you can only play this game on a <Pill text="desktop  :)" />
      </p>
    </div>
  );
};

export default NotAllowed;
