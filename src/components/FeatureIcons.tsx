import { features } from "@/data/features";

const FeatureIcons = () => {
  return (
    <section className="flex flex-col justify-center items-center py-0 h-[92px] sm:h-[121.88px] bg-[#1F2023] flex-none order-2 self-stretch flex-grow-0">
      <div className="container mx-auto px-2">
        <div className="flex justify-between">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative text-center w-[65px] sm:w-[105px] h-[60px] sm:h-[74px]"
            >
              <div className="flex flex-col items-center  gap-[12px]">
                <img
                  src={feature.iconSrc} 
                  alt={feature.title}
                  className="sm:w-[53.44px] sm:h-[42px] w-[35px] h-[28px]"
                />
                <h3 className="text-[10px] sm:text-sm font-medium sm:font-normal leading-3 sm:leading-5 uppercase text-white">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureIcons;