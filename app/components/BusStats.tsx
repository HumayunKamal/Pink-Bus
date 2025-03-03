import { Bus, Engine, Group } from "./svgs";

interface StatItemProps {
  Icon: React.FC<{ className: string }>;
  label: string;
  value: string;
}

const StatItem = ({ Icon, label, value }: StatItemProps) => (
  <div className="flex flex-col items-center justify-center">
    <div className="bg-primary flex h-[36px] w-[36px] items-center justify-center rounded-full">
      <Icon className="fill-secondary-text" />
    </div>
    <p className="text-primary mt-2 text-sm">{label}</p>
    <p className="caption text-secondary/50">{value}</p>
  </div>
);

const BusStats = () => {
  return (
    <div className="mt-4 flex justify-between">
      <StatItem Icon={Bus} label="Class" value="Large Bus" />
      <StatItem Icon={Group} label="Capacity" value="48" />
      <StatItem Icon={Engine} label="Engine" value="80Kmph" />
    </div>
  );
};

export default BusStats;
