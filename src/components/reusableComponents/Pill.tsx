import Link from "../../assets/icons/Link";

interface PillProps {
  text: string;
  margin?: boolean;
  link?: boolean;
}
const Pill = ({ text, margin = true, link = false }: PillProps) => {
  return (
    <span
      style={{
        marginLeft: margin ? "4px" : 0,
      }}
      className={`whitespace-nowrap  border w-max border-[#EBEBEB] text-[13px] rounded-[0.375rem] py-[3px] px-[5px]`}
    >
      {text}
      {link && <Link />}
    </span>
  );
};

export default Pill;
