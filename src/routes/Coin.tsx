import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import styled from 'styled-components';

interface Params {
  coinId: string;
}

interface RouteState {
  name: string;
}

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
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;

const CoinWrapper = styled.div``;


interface CoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  tags: object;
  team: object;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface PriceInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: object;
}

const Coin = () => {
  const [coinInfo, setCoinInfo] = useState<CoinInfo>({});
  const [priceInfo, setPriceInfo] = useState<PriceInfo>({});
  const { coinId } = useParams<Params>();
  const { state } = useLocation<RouteState>();
  // const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const coinInfo = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceInfo = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setCoinInfo(coinInfo);
      console.log(coinInfo);
      setPriceInfo(priceInfo);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || coinInfo.name}</Title>
      </Header>
      <CoinWrapper>{loading ? <Loading /> : coinInfo.description}</CoinWrapper>
    </Container>
  );
};

export default Coin;
