import React from 'react';
import styled from 'styled-components';

const TestPage = () => {
  return (
    <Center>
      <Header>
        <h2>&lt;</h2>
        <h2>똥BTI</h2>
        <h3>1 / 7</h3>
      </Header>
      <ProgressBar>
        <ProgressBarFill width={1 * 84} />
      </ProgressBar>
      <h4>지나가다가 물렁한 똥을 발견했다. 어떻게 할 것인가?</h4>
      <button>무시하고 지나간다</button>
      <button>어우 더러워라고 하면서 치운다</button>
    </Center>
  );
};

export default TestPage;

const Center = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.5s;

  h2 {
    font-family: 'GmarketSansBold';
    font-size: 40px;
    color: #56483b;
    margin-right: 180px;
  }

  h3 {
    font-family: 'GmarketSansBold';
    font-size: 30px;
    color: #766a5e;
  }

  h4 {
    margin: 64px 0 14px 0;
    width: 510px;
    font-size: 35px;
    color: #56483b;
    text-align: center;
  }

  button {
    box-sizing: border-box;
    margin-top: 50px;

    width: 588px;
    height: 102px;

    background: #caa692;
    border: 1px solid #56483b;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    font-family: 'GmarketSansMedium';
    font-size: 30px;
    color: #56483b;
  }
`;

const Header = styled.div`
  display: flex;
`;

const ProgressBar = styled.div`
  margin-top: 26px;
  width: 588px;
  height: 26px;

  background: #bda394;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;

const ProgressBarFill = styled.div`
  width: ${(props) => props.width}px;
  height: 26px;
  background: #867267;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;
