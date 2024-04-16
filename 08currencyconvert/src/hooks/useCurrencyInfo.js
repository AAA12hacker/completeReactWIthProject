import { useEffect, useState } from "react";
// this is out custom hooks
const useCurrencyInfo = (currency) => {
  const [currencyData, setCurrencyData] = useState({});
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setCurrencyData(res);
      })
      .catch((err) => console.log(err));
  }, [currency]);
  console.log(currencyData);
  return currencyData;
};
export default useCurrencyInfo;
