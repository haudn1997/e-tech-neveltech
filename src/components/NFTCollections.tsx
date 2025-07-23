import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { collections } from "@/data/collections";

const NFTCollections = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const handleScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsPrevDisabled(scrollLeft <= 0);
      setIsNextDisabled(scrollLeft + clientWidth >= scrollWidth - 1); // -1 for precision
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      handleScrollState(); // Initial check
      container.addEventListener('scroll', handleScrollState);
      window.addEventListener('resize', handleScrollState); // Check on resize

      return () => {
        container.removeEventListener('scroll', handleScrollState);
        window.removeEventListener('resize', handleScrollState);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collections]);

  const scrollByAmount = (direction: 'prev' | 'next') => {
    if (scrollContainerRef.current) {
      const cardWidth = 180; // w-[180px]
      const gap = 16; // gap-4
      const scrollAmount = (cardWidth + gap) * 3; // Scroll by 3 items
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section className="pb-10 sm:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-[900] text-[24px] sm:text-[32px] italic text-z-yellow flex items-center uppercase">
            New NFT Collections
          </h2>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => scrollByAmount('prev')}
              variant="ghost"
              size="sm"
              className="p-2 h-8 w-8 bg-secondary hover:bg-secondary/80 rounded-[12px]"
              disabled={isPrevDisabled}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollByAmount('next')}
              variant="ghost"
              size="sm"
              className="p-2 h-8 w-8 bg-secondary hover:bg-secondary/80 rounded-[12px]"
              disabled={isNextDisabled}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 no-scrollbar"
        >
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group cursor-pointer flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-300">
                <div className="relative w-[102px] sm:w-[180px] h-[140px] sm:h-[245px]">
                  <img
                    src={collection.image}
                    alt={`NFT Collection ${collection.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTCollections;