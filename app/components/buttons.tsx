import { Link } from "react-router";

const ButtonPrimary = ({ title, to }: { title: string; to: string }) => {
  return (
    <Link to={to}>
      <button className="buttonPrimary button-effect-1 h-[50px] w-[120px] rounded-xl lg:h-[55px] lg:w-[160px] lg:rounded-[20px] 2xl:h-[80px] 2xl:w-[200px]">
        {title}
      </button>
    </Link>
  );
};

const IconButtonPrimary = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <button className="buttonPrimary flex h-[60px] w-[160px] flex-row items-center justify-center gap-2 rounded-[20px]">
      <p className="text-[20px]">{title}</p>

      {children}
    </button>
  );
};

export { ButtonPrimary, IconButtonPrimary };
