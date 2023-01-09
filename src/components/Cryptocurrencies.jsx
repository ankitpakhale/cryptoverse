import React from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi"

const Cryptocurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);
  
  return <div>Cryptocurrencies</div>;
};

export default Cryptocurrencies;
