import CryptoCard from "./CryptoCard";

const MarketSection = () => {
  // Data with realistic fluctuations
  const marketData = [
    {
      id: 1,
      pair: "TKO/IDR",
      price: 5261.3,
      change: -3.82,
      volume: 2258.08,
      sparklineData: [
        { value: 5150 },
        { value: 7500 },
        { value: 3250 },
        { value: 5300 },
        { value: 1350 },
        { value: 3300 },
        { value: 1261.3 },
      ],
    },
    {
      id: 2,
      pair: "TKO/IDR",
      price: 5261.3,
      change: -3.82,
      volume: 2258.08,
      sparklineData: [
        { value: 5150 },
        { value: 7500 },
        { value: 3250 },
        { value: 5300 },
        { value: 1350 },
        { value: 3300 },
        { value: 1261.3 },
      ],
    },
    {
      id: 3,
      pair: "TKO/IDR",
      price: 5261.3,
      change: 3.82,
      volume: 2258.08,
      sparklineData: [
        { value: 1261.3 },
        { value: 3300 },
        { value: 1350 },
        { value: 5300 },
        { value: 3250 },
        { value: 7500 },
        { value: 5150 },
      ],
    },
    {
      id: 4,
      pair: "TKO/IDR",
      price: 5261.3,
      change: 3.82,
      volume: 2258.08,
      sparklineData: [
        { value: 1261.3 },
        { value: 3300 },
        { value: 1350 },
        { value: 5300 },
        { value: 3250 },
        { value: 7500 },
        { value: 5150 },
      ],
    },
  ];

  return (
    <section className="mb-2">
      <h1 className="text-3xl font-bold my-3">Pasar</h1>
      <h1 className="text-2xl font-bold text-gray-100 mb-6">
        Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
      </h1>

      {/* Market Cards - Grid layout */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketData.map((data) => (
          <CryptoCard key={data.id} {...data} />
        ))}
      </section>
    </section>
  );
};

export default MarketSection;
