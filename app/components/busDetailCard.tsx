import Bus3DModel from "./Bus3DModel";
import BusStats from "./BusStats";

const BusDetailCard = () => (
  <div className="bg-secondary-bg relative container mt-5 mb-10 max-h-[500px] rounded-2xl shadow-black max-sm:max-w-[280px] 2xl:h-[500px]">
    {/* Model */}
    <Bus3DModel />

    {/* Detail */}
    <div className="p-5 sm:hidden">
      {/* Bus heading */}
      <h2 className="text-primary text-[28px] font-bold lg:text-[32px]">
        Pink Bus
      </h2>
      <p className="caption">Environment Friendly</p>

      <BusStats />
    </div>

    <div className="absolute bottom-5 left-5 hidden sm:block">
      <h2 className="text-primary text-[28px] font-bold lg:text-[32px]">
        Pink Bus
      </h2>
      <p className="caption">Environment Friendly</p>
    </div>
  </div>
);

export default BusDetailCard;
