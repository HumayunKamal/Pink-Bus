import { Link } from "react-router";

const ButtonPrimary = ({ title, to }: { title: string; to: string }) => {
  return (
    <Link to={to}>
      <button className="buttonPrimary button-effect-1 h-[50px] w-[120px] rounded-xl text-lg font-medium lg:h-[60px] lg:w-[155px] lg:rounded-[12px] xl:text-xl 2xl:h-[80px] 2xl:w-[200px]">
        {title}
      </button>
    </Link>
  );
};

const IconButtonPrimary = ({
  title,
  children,
  isActive,
  onClick,
}: {
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${isActive ? "buttonPrimary" : "buttonOutline"} font-secondary flex h-[60px] w-[160px] flex-row items-center justify-center gap-2 rounded-[20px] font-medium duration-200 ease-linear`}
    >
      <p className="text-[20px]">{title}</p>

      {children}
    </button>
  );
};

export { ButtonPrimary, IconButtonPrimary };
