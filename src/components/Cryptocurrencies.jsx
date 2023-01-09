import React, { useState, useEffect } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Row, Col, Card, Input } from "antd";
import { Link } from "react-router-dom";

const Cryptocurrencies = (simplified) => {
  const count = simplified.simplified ? 10 : 100;
  const { data, isLoading } = useGetCryptosQuery(count);

  const [searchTerm, setSearchTerm] = useState("");
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCoinData(filteredData);
  }, [data, searchTerm]);

  if (isLoading) return "Loading...";

  return (
    <>
      {!simplified.simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[24, 24]} className="crypto-card-container">
        {coinData?.map((currency) => (
          <Col
            xs={24}
            sm={6}
            ls={4}
            className="crypto-card"
            key={currency.uuid}
          >
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
