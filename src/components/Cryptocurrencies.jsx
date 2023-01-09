import React, { useState, useEffect } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Row, Col, Card, Input } from "antd";
import { Link } from "react-router-dom";

const Cryptocurrencies = (simplified) => {
  const count = simplified.simplified ? 10 : 100;

  // const [searchTerm, setSearchTerm] = useState();

  const { data, isLoading } = useGetCryptosQuery(count);
  const coinData = data?.data?.coins;

  // let coinData = null;

  // useEffect(() => {
  //   console.log('object');
  //   const filteredData = data?.data?.coins.filter((coin) =>
  //     coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   coinData = filteredData;
  // }, [searchTerm, data]);

  if (isLoading) return "Loading...";

  return (
    <>
      {/* {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )} */}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {coinData?.map((currency) => (
          <Col xs={24} sm={12} ls={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
