export const formatCurrency = (value, currency = "IDR") => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatPercentage = (value) => {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
};

