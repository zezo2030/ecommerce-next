import Banner from "./_components/Banner";
import Brands from "./_components/Brands";
import NewArrivals from "./_components/NewArrivals";
import TopSelling from "./_components/TopSelling";

export default function Home() {
  return (
    <main>
      <Banner />
      <Brands />
      <NewArrivals />
      <TopSelling />
    </main>
  );
}
