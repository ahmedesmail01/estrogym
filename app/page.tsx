import AboutDoc from "./components/AboutDoc";
import Footer from "./components/Footer";
import ForWhoSec from "./components/ForWhoSec";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import SubscribeSec from "./components/SubscribeSec";
import WhyChooseSec from "./components/WhyChooseSec";
import WhySec from "./components/WhySec";

export default function Home() {
  return (
    <main dir="rtl" className="container [font-family:Tajawal] ">
      <Header />
      <HeroSec />
      <WhySec />
      <WhyChooseSec />
      <AboutDoc />
      <ForWhoSec />
      <SubscribeSec />
      <Footer />
    </main>
  );
}
