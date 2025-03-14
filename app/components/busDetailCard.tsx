import Bus3DModel from "./Bus3DModel";
import BusStats from "./BusStats";

const BusDetailCard = () => (
  <div className="bg-secondary-bg dark:bg-primary-light dark:shadow-pink relative container mt-5 mb-10 max-h-[500px] rounded-2xl shadow-black max-sm:max-w-[280px] 2xl:h-[500px]">
    {/* Model */}
    <Bus3DModel />

    {/* Detail */}
    <div className="px-4 pb-5 sm:hidden">
      {/* Bus heading */}
      <h2 className="text-primary font-secondary dark:text-dark-mode text-[26px] font-bold lg:text-[32px]">
        Gulabi Bus
      </h2>
      <p className="caption text-secondary/50">Environment Friendly</p>

      <BusStats />
    </div>

    <div className="absolute bottom-5 left-5 hidden sm:block">
      <h2 className="text-primary title dark:text-dark-mode xl:text-[32px]">
        Gulabi Bus
      </h2>
      <p className="caption text-secondary/50 dark:text-dark-mode">
        Environment Friendly Electric
      </p>
    </div>
  </div>
);

export default BusDetailCard;
