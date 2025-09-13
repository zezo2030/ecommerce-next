import Banner from "./_components/Banner";
import Brands from "./_components/Brands";
import BrowseByDressStyle from "./_components/BrowseByDressStyle";
import NewArrivals from "./_components/NewArrivals";
import TopSelling from "./_components/TopSelling";
import OurHapyCusromer from "./_components/OurHapyCusromer";

export default function Home() {
  return (
    <main>
      <Banner />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <BrowseByDressStyle />
      <OurHapyCusromer />
    </main>
  );
}
