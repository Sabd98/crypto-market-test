import { useState } from "react";
import { ArrowUp, ArrowDown, Star, ChevronsUpDown } from "lucide-react";

const FavoriteTable = () => {
  const [activeCurrency, setActiveCurrency] = useState("IDR");

  const currencies = ["IDR", "USD", "BNB", "BTC"];

  const tableData = [
    {
      pair: "BTC/DAI",
      lastPrice: "98,832.93 / Rp 1,612,213,281.72",
      change: 3.89,
      highest: "102,451.34 / Rp 94,288.07",
      capitalize: "Rp 31,953.008T",
      volume: "1.538M",
    },
    {
      pair: "ETH/DAI",
      lastPrice: "98,832.93 / Rp 1,612,213,281.72",
      change: 3.89,
      highest: "102,451.34 / Rp 94,288.07",
      capitalize: "Rp 31,953.008T",
      volume: "1.538M",
    },
    {
      pair: "XRP/ETH",
      lastPrice: "98,832.93 / Rp 1,612,213,281.72",
      change: 3.89,
      highest: "102,451.34 / Rp 94,288.07",
      capitalize: "Rp 31,953.008T",
      volume: "1.538M",
    },
  ];

  return (
    <section className="mt-16">
      <div className="flex justify-start gap-8 items-center mb-6">
        <h2 className="text-2xl font-bold">Favorit</h2>
        <div className="flex space-x-2">
          {currencies.map((currency) => (
            <button
              key={currency}
              className={`px-3 py-1 rounded-md ${
                activeCurrency === currency
                  ? "text-yellow-500"
                  : "hover:bg-gray-600"
              }`}
              onClick={() => setActiveCurrency(currency)}
            >
              {currency}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="">
            <tr>
              <th className="px-6 py-3  text-left text-xs font-medium text-white uppercase">
                <div className="flex items-center gap-3">
                  <span>Pasangan</span> <ChevronsUpDown />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
                <div className="flex items-center gap-3">
                  <span>Harga Terakhir</span> <ChevronsUpDown />
                </div>
              </th>
              <th className="px-6 py-3  text-left text-xs font-medium text-white uppercase">
                <div className="flex items-center gap-3">
                  <span> Perubahan 24 jam</span> <ChevronsUpDown />
                </div>
              </th>
              <th className="px-6 py-3  text-left text-xs font-medium text-white uppercase">
                <div className="flex items-center gap-3">
                  <span>Tertinggi / Terendah 24 jam</span> <ChevronsUpDown />
                </div>
              </th>
              <th className="px-6 py-3  text-left text-xs font-medium text-white uppercase">
                <div className="flex items-center gap-3">
                  <span>Kapitalisasi Pasar</span> <ChevronsUpDown />
                </div>
              </th>
              <th className="px-6 py-3  text-left text-xs font-medium text-white uppercase">
                <div className="flex items-center gap-3">
                  <span> Volume 24 Jam</span> <ChevronsUpDown />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="px-6 py-4 flex gap-4 whitespace-nowrap font-medium">
                  <Star /> {row.pair}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{row.lastPrice}</td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${
                    row.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <div className="flex items-center">
                    {row.change >= 0 ? (
                      <ArrowUp size={16} />
                    ) : (
                      <ArrowDown size={16} />
                    )}
                    {Math.abs(row.change)}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{row.highest}</td>{" "}
                <td className="px-6 py-4 whitespace-nowrap">{row.capitalize}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FavoriteTable;
