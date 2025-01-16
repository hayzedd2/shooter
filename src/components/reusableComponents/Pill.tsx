import Link from "../../assets/icons/Link";

interface PillProps {
  text: string;
  margin?: boolean;
  link?: boolean;
  active?: boolean
}
const Pill = ({ text, margin = true, link = false, active= false }: PillProps) => {
  return (
    <span
      style={{
        marginLeft: margin ? "4px" : 0,
      }}
      className={`${active ? "bg-gray-100 " : ""}whitespace-nowrap  border w-max border-[#EBEBEB] text-[13px] rounded-[0.375rem] py-[3px] px-[5px]`}
    >
      {text}
      {link && <Link />}
    </span>
  );
};

export default Pill;
