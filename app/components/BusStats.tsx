import { Bus, Engine, Group } from "./svgs";

interface StatItemProps {
  Icon: React.FC<{ className: string }>;
  label: string;
  value: string;
}

const StatItem = ({ Icon, label, value }: StatItemProps) => (
  <div className="flex flex-col items-center justify-center">
    <div className="bg-primary flex h-[32px] w-[32px] items-center justify-center rounded-full">
      <Icon className="fill-secondary-text" />
    </div>
    <p className="text-primary mt-2 text-xs">{label}</p>
    <p className="text-grey text-xs">{value}</p>
  </div>
);

const BusStats = () => {
  return (
    <div className="mt-4 flex justify-between">
      <StatItem Icon={Bus} label="Class" value="Large Bus" />
      <StatItem Icon={Group} label="Capacity" value="48" />
      <StatItem Icon={Engine} label="Engine" value="Electric" />
    </div>
  );
};

export default BusStats;
