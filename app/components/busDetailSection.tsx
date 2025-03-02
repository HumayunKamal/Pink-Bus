import BusDetailCard from "./busDetailCard";

const BusDetailSection = () => {
  return (
    <>
      {/*Section heading */}
      <div className="col-span-full mt-10 sm:mt-0">
        <p className="text-secondary/50 ml-1 text-xs font-bold sm:text-sm">
          Safety and comfort
        </p>
        <h1 className="heading mt-2">Our Bus</h1>
      </div>

      {/* Card */}
      <div className="col-span-full mt-10 place-items-center lg:col-start-2 lg:col-end-12">
        <BusDetailCard />
      </div>
    </>
  );
};

export default BusDetailSection;
