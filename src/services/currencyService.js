const getCurrencies = async () => {
  const result = await fetch("https://mindicador.cl/api");

  if (result.status === 200) return result.json();
};

const getCurrencyForIndicator = async (indicatorType) => {
  const result = await fetch(`https://mindicador.cl/api/${indicatorType}`);

  if (result.status === 200) return result.json();
};

export { getCurrencies, getCurrencyForIndicator };
