import Image from "next/image";

function Card({
  title,
  src,
  spanClass,
  minHClass = "min-h-[240px] md:min-h-[260px]",
}) {
  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden ${spanClass} ${minHClass}`}
    >
      <p className="absolute z-10 top-6 left-6 text-black text-[22px] md:text-[28px] font-[Satoshi] font-[700]">
        {title}
      </p>
      <Image
        src={src}
        alt={`${title} style`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        priority={false}
      />
    </div>
  );
}

function BrowseByDressStyle() {
  return (
    <section>
      <div className="mx-auto max-w-7xl mt-[72px] px-4">
        <div className="bg-[#F0F0F0] rounded-3xl p-6 md:p-10">
          <h2 className="font-[Satoshi] font-bold text-[32px] md:text-[48px] text-center mb-8 md:mb-10">
            BROWSE BY DRESS STYLE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Top row */}
            <Card title="Casual" src="/casual.png" spanClass="lg:col-span-3" />
            <Card title="Formal" src="/formal.png" spanClass="lg:col-span-3" />

            {/* Bottom row - left wider, right narrower */}
            <Card
              title="Party"
              src="/party.png"
              spanClass="lg:col-span-4"
              minHClass="min-h-[220px] md:min-h-[240px] lg:min-h-[260px]"
            />
            <Card
              title="Gym"
              src="/gym.png"
              spanClass="lg:col-span-2"
              minHClass="min-h-[220px] md:min-h-[240px] lg:min-h-[260px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrowseByDressStyle;
