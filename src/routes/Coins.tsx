import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loading from '../components/Loading';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
`;

const CoinsList = styled.ul`
  width: 85%;
  max-width: 500px;
  margin: 0 auto;
`;

const Coin = styled.li`
  background-color: white;
  border-radius: 3px;
  padding: 15px 20px;
  margin: 10px;
  color: ${(props) => props.theme.bgColor};
  transition: all ease 300ms;
  a {
    transition: all ease 300ms;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;

  p {
    margin: 5px;
  }
`;

const Image = styled.img`
  height: 50px;
  width: auto;
  display: inline;
  margin-right: 10px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinsList>
        {loading ? (
          <Loading />
        ) : (
          coins.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Image
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={coin.name}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))
        )}
        <PaginationWrapper>
          
        </PaginationWrapper>
      </CoinsList>
    </Container>
  );
};

export default Coins;
