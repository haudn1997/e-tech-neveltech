import { useIsMobile } from "../hooks/use-mobile";
import CommonCarousel from "./ui/common-carousel";

const HeroSection = () => {
  const isMobile = useIsMobile();
  const heroHeight = isMobile ? 180 : 450;
  const imageSrc = isMobile ? '/images/slider-mobile.png' : '/images/Slider.png';

  const carouselItems = Array(9).fill({
    description: '',
    link: '#'
  }).map((item, index) => ({
    ...item,
    id: index,
    image: imageSrc,
  }));

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <CommonCarousel
        items={carouselItems}
        size={
          {
            height: heroHeight
          }
        }
        autoPlay={true}
        autoPlayDelay={3000}
        showDots={true}
        showProgressBar={false}
        isShowArrows={true}
        objectFit="contain"
        className="w-full"
      />
    </section>
  );
};

export default HeroSection;