import { Link } from "react-router";

const ButtonPrimary = ({ title, to }: { title: string; to: string }) => {
  return (
    <Link to={to}>
      <button className="buttonPrimary h-[50px] w-[120px] rounded-xl lg:h-[55px] lg:w-[160px] lg:rounded-[20px] 2xl:h-[80px] 2xl:w-[200px]">
        {title}
      </button>
    </Link>
  );
};

export default ButtonPrimary;
