import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0);
    } to {
        transform: rotate(360deg);
    }
`;
const LoadingCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 200px;
  border: 4px solid #454545;
  margin: 50px auto;
  border-bottom-color: ${(props) => props.theme.accentColor};
  animation: ${rotate} infinite linear 1s;
`;

const Loading = () => {
  return <LoadingCircle />;
};

export default Loading;
