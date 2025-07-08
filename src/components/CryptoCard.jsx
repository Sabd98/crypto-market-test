import { useMemo } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { formatCurrency, formatPercentage } from "../utils/formatters";

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, currency }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-3">
        <p className="text-sm font-semibold text-white">
          {formatCurrency(payload[0].value, currency)}
        </p>
        <p className="text-xs text-gray-300 mt-1">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    );
  }
  return null;
};

const CryptoCard = ({
  pair,
  price,
  change,
  volume,
  sparklineData = [],
  currency = "IDR",
}) => {
  const isPositive = change >= 0;
  const Icon = isPositive ? ArrowUp : ArrowDown;
  const lineColor = isPositive ? "#10B981" : "#EF4444";
  const fillColor = isPositive
    ? "url(#colorGradientGreen)"
    : "url(#colorGradientRed)";

  // Generate realistic sparkline data
  const chartData = useMemo(() => {
    if (sparklineData.length > 0) return sparklineData;

    const baseValue = price;
    const variation = price * (Math.abs(change) / 100);
    const dataPoints = 7;

    return Array.from({ length: dataPoints }, (_, i) => {
      // Create realistic fluctuations using sine wave
      const fluctuation = variation * Math.sin(i * 1.2);
      const value = isPositive
        ? baseValue + fluctuation
        : baseValue - fluctuation;

      return { value };
    });
  }, [sparklineData, price, change, isPositive]);

  return (
    <article className="bg-[#0B132280] rounded-xl shadow-md p-4 transition-all hover:shadow-lg flex flex-col">
      <div className="flex justify-between gap-5">
        {/* Content: Price and Volume */}
        <div className="mb-3">
          <h3 className="font-bold text-gray-200">{pair}</h3>

          <p className="text-base font-bold text-gray-100 mb-1">
            {formatCurrency(price, currency)}
          </p>
          <span
            className={`flex items-center py-1 rounded-full text-xs font-medium mt-3 ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            <Icon size={12} className="mr-1" />
            {formatPercentage(change)}
          </span>
        </div>
        {/* Sparkline Chart */}
        <div className="h-12 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 2, right: 0, left: 0, bottom: 0 }}
            >
              <Tooltip
                content={<CustomTooltip currency={currency} />}
                position={{ y: -40 }}
                cursor={{
                  stroke: "#4B5563",
                  strokeWidth: 1,
                  strokeDasharray: "3 3",
                }}
              />
              <Line
                type="linear"
                dataKey="value"
                stroke={lineColor}
                fill={fillColor}
                strokeWidth={1.5}
                isAnimationActive={true}
                animationDuration={1000}
                animationEasing="ease-out"
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-400 mt-4 text-right">
            Volume: {formatCurrency(volume, currency)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CryptoCard;
