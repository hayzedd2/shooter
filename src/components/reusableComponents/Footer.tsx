import Pill from "./Pill";

const Footer = () => {
  return (
    <div className="absolute bottom-5 right-5">
      <a href="https://www.alhameen.xyz" target="_blank">
        <Pill text="Built by alhameen" link />
      </a>
    </div>
  );
};

export default Footer;
