import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureIcons from "@/components/FeatureIcons";
import NFTCollections from "@/components/NFTCollections";
import NFTDropsAndPromo from "@/components/NFTDropsAndPromo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeatureIcons />
      <div className="py-10 sm:py-20">
        <NFTCollections />
        <NFTDropsAndPromo />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
