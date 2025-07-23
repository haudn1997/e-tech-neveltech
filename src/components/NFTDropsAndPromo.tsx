import { useIsMobile } from "@/hooks/use-mobile";
import CommonCarousel from "./ui/common-carousel";

const NFTDropsAndPromo = () => {
  const isMobile = useIsMobile();
  const carouselHeight = isMobile ? 170 : 240;
  const carouselHotNftHeight = isMobile ? 167 : 240;

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Side: NFT Drops Calendar */}
          <div className="w-full lg:w-1/2 mb-10 sm:mb-0">
            <CommonCarousel
              items={[
                {
                  image: '/images/image.png',
                  description: '',
                  link: '#'
                },
                {
                  image: '/images/image.png',
                  description: '',
                  link: '#'
                },
                {
                  image: '/images/image.png',
                  description: '',
                  link: '#'
                }
              ]}
              title="NFT Drops Calendar"
              autoPlay={false}
              autoPlayDelay={5000}
              showDots={false}
              showProgressBar={false}
              className="rounded-2xl"
              size={{ height: carouselHeight }}
              isShowArrows={true}
              objectFit="contain"
            />
          </div>

          {/* Right Side: Hot NFT and Promotion */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <CommonCarousel
                  items={[
                    {
                      image: '/images/hot-nft.png',
                      description: '',
                      link: '#'
                    },
                    {
                      image: '/images/hot-nft.png',
                      description: '',
                      link: '#'
                    },
                    {
                      image: '/images/hot-nft.png',
                      description: '',
                      link: '#'
                    }
                  ]}
                  title="Hot NFT"
                  autoPlay={false}
                  autoPlayDelay={5000}
                  showDots={false}
                  showProgressBar={false}
                  className="rounded-2xl"
                  size={{ height: carouselHotNftHeight }}
                  isShowArrows={false}
                  objectFit="contain"
                />
              </div>
              <div>
                <CommonCarousel
                  items={[
                    {
                      image: '/images/promotion.png',
                      description: '',
                      link: '#'
                    },
                    {
                      image: '/images/promotion.png',
                      description: '',
                      link: '#'
                    },
                    {
                      image: '/images/promotion.png',
                      description: '',
                      link: '#'
                    }
                  ]}
                  title="Promotion"
                  autoPlay={false}
                  autoPlayDelay={5000}
                  showDots={false}
                  showProgressBar={false}
                  className="rounded-2xl"
                  size={{ height: carouselHotNftHeight }}
                  isShowArrows={false}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTDropsAndPromo;