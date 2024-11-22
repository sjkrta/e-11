const dummyUrl = import.meta.env.VITE_DUMMY_API_URL;

export const formatURL = (path) => {
  return dummyUrl + "/" + path;
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 2,
  });
};
