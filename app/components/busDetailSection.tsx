import BusDetailCard from "./busDetailCard";

const BusDetailSection = () => {
  return (
    <>
      {/*Section heading */}
      <div className="col-span-full">
        <p className="text-secondary/50 ml-1 text-xs lg:text-[16px]">
          Safety, comfort our priority
        </p>
        <h1 className="sub-heading">Our Bus</h1>
      </div>

      {/* Card */}
      <div className="col-span-full mt-10 place-items-center lg:col-start-2 lg:col-end-12">
        <BusDetailCard />
      </div>
    </>
  );
};

export default BusDetailSection;
